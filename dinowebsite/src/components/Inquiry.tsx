import { Icon } from "@iconify/react";
import Link from "next/link";

const Inquiry = () => {
    return(
        <div className="relative w-fill md:w-[1000px] overflow-hidden m-auto pb-10">
        <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"/>
        <div className="bg-dinoblack h-12 w-full pl-5 flex items-center">
            <h1 className="text-lg font-heading text-white float-left px-2">
            Sender&#58; john doe
            </h1>
            <h1 className="text-lg font-heading text-white float-right px-2 hidden md:block">
            Email&#58; johndoe@hotmail.com
            </h1>
        </div>

        <div className="absolute top-3 right-3 text-white transition-transform duration-400 rotate-0 peer-checked:rotate-180">
            <Icon className="w-6 h-6" icon="material-symbols:arrow-drop-down-circle-outline"/>
        </div>

        <div className="bg-dinogrey overflow-hidden max-h-0 peer-checked:max-h-full">
            <div className="p-4">
            <p className="font-semibold md:hidden">
                Email&#58; johndoe@hotmail.com
            </p>
            <p className="font-semibold">
                Message&#58;
            </p>
            <p className="pb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci atque cupiditate necessitatibus eveniet quo quae excepturi neque nam, blanditiis quisquam!</p>
            <Link href="mailto:someone@yoursite.com">
                <a className="rounded-full border-2 border-dinoblack px-5 hover:border-tmorange float-right">
                    Reply
                </a>
            </Link>
            </div>
        </div>
    </div>
    );}

export default Inquiry;