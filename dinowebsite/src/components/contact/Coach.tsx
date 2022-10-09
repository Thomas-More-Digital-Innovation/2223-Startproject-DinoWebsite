import Image from "next/image";

type MyProps = {
  image: string;
  name: string;
  text: string;
};

export default function Coach(props: MyProps) {
  return (
    <div className="flex basis-1/2 justify-center flex-col md:flex-row">
      <Image
        src={props.image}
        alt="dino"
        width={200}
        height={200}
        className="md:rounded-bl-md md:rounded-tl-3xl rounded-t-md md:rounded-t-none"
      />
      <div className="lg:w-2/4 xl:w-1/3 bg-tmgrey bg-opacity-5 self-stretch md:rounded-tr-md md:rounded-br-3xl rounded-b-md md:rounded-b-none p-5">
        <p className="font-sans text-2xl">{props.name}</p>
        <p className="mt-3">{props.text}</p>
      </div>
    </div>
  );
}

/* rounded-lg md:rounded-r-none md:rounded-b rounded-b-none 
rounded-lg md:rounded-l-none md:rounded-t rounded-t-none p-5*/
