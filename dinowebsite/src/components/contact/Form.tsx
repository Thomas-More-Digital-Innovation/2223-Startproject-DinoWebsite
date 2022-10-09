import { Icon } from "@iconify/react";
import { useRef, useState } from "react";

export default function Form() {
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

  return (
    <form action="" className="my-5 lg:w-4/6">
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
          className="valid:border-green-500 invalid:border-red-500 outline-tmblue rounded bg-dinogrey px-2 py-1 w-full lg:w-2/4"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          required
          className="valid:border-green-500 invalid:border-red-500 outline-tmblue rounded bg-dinogrey px-2 py-1 w-full lg:w-2/4"
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="valid:border-green-500 invalid:border-red-500 outline-tmblue w-full rounded bg-dinogrey px-2 py-1 mb-3"
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
          className="valid:border-green-500 invalid:border-red-500 outline-tmblue rounded bg-dinogrey px-2 py-1 w-full mt-3 lg:w-2/4"
        />
        <p className=" w-full lg:w-2/4"></p>
      </div>
      <textarea
        name="message"
        placeholder="Message.."
        required
        className="valid:border-green-500 invalid:border-red-500 outline-tmorange w-full rounded bg-dinogrey px-2 py-1 mb-3 lg:mt-3"
      />
      <div
        className="flex gap-3 items-center mb-3 cursor-pointer"
        onClick={() => openFiles()}
      >
        <input
          type="file"
          ref={inputFileRef}
          className="hidden"
          accept=".doc, .docx, .txt, .pdf, .xlsx, .ppt"
        />
        <div className="p-2 rounded bg-gray-300 text-gray-500">
          <Icon icon="ant-design:plus-outlined" className="text-2xl " />
        </div>
        <p>Add files</p>
      </div>
      <button
        type="submit"
        className="bg-dinoblack text-dinocream px-24 py-1 rounded-md border-2 border-tmblue dark:border-coffeecream"
      >
        Send Message
      </button>
    </form>
  );
}
