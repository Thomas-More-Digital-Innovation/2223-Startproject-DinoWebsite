import Image from "next/image";

type MyProps = {
  image: string;
  name: string;
  text: string;
};

export default function Coach(props: MyProps) {
  return (
    <div className="flex gap-10">
      <Image
        src={props.image}
        alt="dino"
        width={200}
        height={200}
        className="rounded-lg"
      />
      <div className="w-1/4">
        <p className="font-sans text-2xl">{props.name}</p>
        <p className="mt-3">{props.text}</p>
      </div>
    </div>
  );
}
