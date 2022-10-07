import Image from "next/image";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="absolute w-full overflow-hidden z-10 ">
      <div className="  relative inset-y-0 bottom-0 z-10 ">
        <footer className="bg-tmorange text-dinocream m-auto h-auto z-10">
          <div className="flex justify-between p-5 z-40">
            <div className="flex-none w-52">
              <div className="flex flex-col justify-between space-y-2">
                <h1 className="text-5xl font-heading">Contact</h1>
                <p>Digital Innovation</p>
                <p>IT Factory</p>
                <p>Thomas More - Campus Geel</p>
                <p>Kleinhoefstraat 4, 2440 Geel</p>
              </div>
            </div>
            <div className="grow h-14 text-center sm:hidden md:block">
              <Image
                src="/images/LogoTextTransparant.png"
                alt="Dino Logo"
                width={200}
                height={200}
              />
            </div>
            <div className="flex-none w-52">
              <div className="flex flex-col justify-between space-y-2 items-center">
                <Icon className="w-10 h-10" icon="ci:mail" />
                <Icon className="w-10 h-10" icon="bi:messenger" />
                <Icon className="w-10 h-10" icon="akar-icons:facebook-fill" />
                <Icon className="w-10 h-10" icon="akar-icons:youtube-fill" />
                <Icon
                  className="w-10 h-10"
                  icon="ant-design:twitter-circle-filled"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
