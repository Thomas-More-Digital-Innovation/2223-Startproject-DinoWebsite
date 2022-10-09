import NavBar from "../components/nav/NavBar";
import { useRouter } from "next/router";
import Footer from "./Footer";
import { useEffect } from "react";

export default function Layout({ children }: any) {
  const router = useRouter();

  useEffect(() => {
    function coffeemode() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const coffeemode = urlParams.has("coffeemode");
      console.log(coffeemode);

      if (coffeemode) {
        document.getElementById("coffeemode")?.classList.add("dark");
      } else {
        document.getElementById("coffeemode")?.classList.remove("dark");
      }
    }
    coffeemode();
  }, []);

  return (
    <>
      {router.pathname !== "/404" ? <NavBar /> : null}

      <main id="coffeemode" className="overflow-hidden h-full relative">
        {children}
      </main>

      {router.pathname !== "/404" ? <Footer /> : null}
    </>
  );
}
