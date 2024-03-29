import { Icon } from "@iconify/react";
import { NextPage } from "next";
import { useRef, useState } from "react";

const Form: NextPage = () => {
  const inputFileRef = useRef(null);
  const openFiles = () => {
    if (inputFileRef && inputFileRef.current) {
      (inputFileRef.current as never as HTMLInputElement).click();
    }
  };

  const [option, setOption] = useState(0);
  const updateValue = (e: any) => {
    setOption(e.target.checked);
  };

  const [file, setFile] = useState("Add files");
  function getFileName(fileName: any) {
    setFile(fileName.target.files[0].name);
  }

  return (
    <form
      action="/api/post"
      method="POST"
      encType="multipart/form-data"
      target="_blank"
      className="my-5 lg:w-4/6"
    >
      <script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      ></script>
      <div className="flex">
        <span className="mr-3">Question</span>
        <label
          htmlFor="default-toggle"
          className="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            id="default-toggle"
            className="sr-only peer"
            onChange={updateValue}
          ></input>
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3">Proposal</span>
        </label>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 my-3 w-full">
        <input
          type="text"
          name="firstname"
          placeholder="First name"
          required
          className="valid:border-green-500 invalid:border-red-500 outline-tmblue dark:outline-coffeecream rounded bg-dinogrey px-2 py-1 w-full lg:w-2/4"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          required
          className="valid:border-green-500 invalid:border-red-500 outline-tmblue dark:outline-coffeecream rounded bg-dinogrey px-2 py-1 w-full lg:w-2/4"
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="valid:border-green-500 invalid:border-red-500 outline-tmblue dark:outline-coffeecream w-full rounded bg-dinogrey px-2 py-1 mb-3"
      />

      <div
        className={`${
          option ? "block" : "hidden"
        } flex flex-col lg:flex-row gap-3`}
      >
        <input
          type="text"
          name="companyname"
          placeholder="Company name"
          className="valid:border-green-500 invalid:border-red-500 outline-tmblue dark:outline-coffeecream rounded bg-dinogrey px-2 py-1 w-full mt-3 lg:w-2/4"
        />
        <p className=" w-full lg:w-2/4"></p>
      </div>
      <textarea
        name="message"
        placeholder="Message.."
        required
        className="valid:border-green-500 invalid:border-red-500 outline-tmblue dark:outline-coffeecream w-full rounded bg-dinogrey px-2 py-1 mb-3 lg:mt-3"
      />
      <div
        className="flex gap-3 items-center mb-3 cursor-pointer"
        onClick={() => openFiles()}
      >
        <input
          id="fileupload"
          name="file"
          type="file"
          onChange={(e) => {
            getFileName(e);
          }}
          ref={inputFileRef}
          className="hidden"
          accept=".doc, .docx, .txt, .pdf, .xlsx, .ppt"
        />
        <div className="p-2 rounded bg-gray-300 text-gray-500">
          <Icon icon="ant-design:plus-outlined" className="text-2xl " />
        </div>
        <p>{file}</p>
        <Icon
          icon="entypo:cross"
          className={`text-2xl hover:text-red-500 ${
            file === "Add files" ? "hidden" : "block"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setFile("Add files");
            (inputFileRef.current as never as HTMLInputElement).value = "";
          }}
        />
      </div>
      <div
        className="cf-turnstile"
        data-sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
      ></div>
      <button
        type="submit"
        className="bg-dinoblack text-dinocream px-24 py-1 rounded-md border-2 border-tmblue dark:border-coffeegreen"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
