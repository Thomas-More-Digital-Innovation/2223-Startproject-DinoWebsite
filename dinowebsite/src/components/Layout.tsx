import NavBar from "../components/nav/NavBar";
import { useRouter } from "next/router";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/404" ? <NavBar /> : null}

      <main className="overflow-hidden h-full relative">{children}</main>

      {router.pathname !== "/404" ? <Footer /> : null}
    </>
  );
}
