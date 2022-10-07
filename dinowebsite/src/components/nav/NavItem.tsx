import Link from "next/link";

type MyProps = {
  name: string;
  href: string;
  mobile?: boolean;
};

const NavItem = (props: MyProps) => {
  return (
    <Link href={props.href} passHref>
      <a
        className={`${
          props.mobile
            ? "flex flex-col py-4 justify-around text-center text-2xl text-dinocream hover:underline hover:underline-offset-8 hover:decoration-tmorange font-heading bg-dinoblack"
            : "py-5 px-3 hover:underline hover:underline-offset-8 hover:decoration-tmorange"
        }`}
      >
        {props.name}
      </a>
    </Link>
  );
};

export default NavItem;
