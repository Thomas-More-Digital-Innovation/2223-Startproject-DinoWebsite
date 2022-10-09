export default function ContactInfo() {
  return (
    <div className="lg:ml-24 lg:pl-10 lg:border-l-2 border-dinoblack">
      <h2 className="text-3xl text-tmblue dark:text-coffeegreen mb-5 mt-24 lg:mt-0 font-heading">
        Contact
      </h2>
      <div className="flex flex-col gap-5">
        <div>
          <p>TM address</p>
          <a
            href="https://goo.gl/maps/1bFNMyqUGEV6orjx9"
            target="_blank"
            rel="noreferrer"
            className="underline text-tmorange dark:text-coffeecream"
          >
            Kleinhoefstraat 4, 2440 Geel
          </a>
        </div>
        <div>
          <p>TM mail</p>
          <a
            href="mailto:info.geel@thomasmore.be"
            className="underline text-tmorange dark:text-coffeecream"
          >
            info.geel@thomasmore.be
          </a>
        </div>
        <div>
          <p>TM website</p>
          <a
            href="https://www.thomasmore.be/"
            target="_blank"
            rel="noreferrer"
            className="underline text-tmorange dark:text-coffeecream"
          >
            Thomas More
          </a>
        </div>
        <div>
          <p>TM phone number</p>
          <a
            href="tel:+3214562310"
            className="underline text-tmorange dark:text-coffeecream"
          >
            +32 14 56 23 10
          </a>
        </div>
      </div>
    </div>
  );
}
