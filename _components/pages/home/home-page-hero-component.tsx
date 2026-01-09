import classNames from "classnames";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

interface HomePageHeroComponentProps {
  cssClasses?: string;
}

const HomePageHeroComponent = ({ cssClasses }: HomePageHeroComponentProps) => {
  return (
    <section className={classNames("relative", cssClasses)}>
      <Image
        src="/images/home-page/8a68bbb5ef8659ee65d9be6e01cebf472f4f3316.png"
        alt="Maple Ranch Hero Image"
        width={1360}
        height={500}
        className="h-[600px] tablet:h-[700px] desktop:h-auto desktop:aspect-video object-cover object-right"
        priority
      />
      <div className="absolute top-40 border-4 right-32 border-dashed border-white p-1 phone:border-6 phone:top-[24%] phone:right-[12.5%] desktop:top-[195px] desktop:right-44">
        <h1 className="text-subheading uppercase font-rye text-white phone:text-heading">
          Maple Ranch
        </h1>
      </div>
      <svg
        width="92"
        height="123"
        viewBox="0 0 92 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-60 right-28 rotate-115 phone:rotate-180 phone:top-56 phone:right-68 tablet:top-62 tablet:right-[30%] desktop:rotate-0 desktop:top-14 desktop:right-60"
      >
        <path
          d="M-4.91915e-06 122.661L47.5624 101.737L5.66035 71.0088L-4.91915e-06 122.661ZM88 2.66113L84.3712 -3.69549e-06L20.3214 87.3406L23.9502 90.0017L27.579 92.6629L91.6288 5.32227L88 2.66113Z"
          fill="#DF3900"
        />
      </svg>
    </section>
  );
};

export default HomePageHeroComponent;
