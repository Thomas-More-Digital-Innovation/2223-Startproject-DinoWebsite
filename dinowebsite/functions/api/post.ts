export interface PagesEnv {
  INQUIRIES: KVNamespace;
  R2_INQUIRIES: R2Bucket;
}

export enum FormDataItem {
  FIRST_NAME = "firstname",
  LAST_NAME = "lastname",
  EMAIL = "email",
  MESSAGE = "message",
  FILE = "file",
  COMPANY = "companyname",
}

export const onRequestPost: PagesFunction<PagesEnv> = async ({
  request,
  env,
}) => {
  try {
    // Get the "Content-Type" of the request.
    if (!request.headers.get("Content-Type").includes("multipart/form-data")) {
      throw new Error("Content-Type must be multipart/form-data");
    }

    // Parse the request data.
    const formData = await request.formData();

    // Store current time 
    const currentTime = Date.now();

    // Check required fields.
    let requiredFields = [
      FormDataItem.FIRST_NAME,
      FormDataItem.LAST_NAME,
      FormDataItem.EMAIL,
      FormDataItem.MESSAGE,
    ];

    for (const requiredField of requiredFields) {
      if (!formData.has(requiredField))
        throw new Error(`${requiredField} is required`);
    }

    let fileExist = formData.has(FormDataItem.FILE);

    if(fileExist) {
      const r2Key = `file-${currentTime}`;
      const file = formData.get(FormDataItem.FILE);

      if(file && file instanceof File) {
        await env.R2_INQUIRIES.put(r2Key, await file.arrayBuffer());
      }

      fileExist = !!(fileExist && file);
    }

    // Create the object to enter into the KV namespace.
    const data = {
      firstName: formData.get(FormDataItem.FIRST_NAME),
      lastName: formData.get(FormDataItem.LAST_NAME),
      email: formData.get(FormDataItem.EMAIL),
      message: formData.get(FormDataItem.MESSAGE),
      company: formData.get(FormDataItem.COMPANY),
      date: currentTime,
      file: fileExist
    };

    // Generate a key based on the epoch.
    const kvKey = `inquiry-${currentTime}`;

    // Save the data to the KV namespace.
    await env.INQUIRIES.put(kvKey, JSON.stringify(data));

    return Response.redirect("https://digitalinnovation.be/success", 303);

  } catch (e) {
    if (e instanceof Error) {
      return new Response(e.message);
    }

    return new Response("Internal server error.", { status: 500 });
  }
};
