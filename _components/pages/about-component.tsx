import ButtonLink from "@/_components/ui/buttons/button-link";
import Image from "next/image";
import { parseLinks } from "@/_lib/utils/parse-links";
import classNames from "classnames";

interface AboutComponentProps {
  data: {
    heading: string;
    paragraph: string[];
    subparagraph1?: { subheading: string; paragraph: string[] };
    subparagraph2?: { subheading: string; paragraph: string[] };
    bookingNote?: string;
    images: string[];
    button?: {
      text: string;
      href: string;
    };
    button2?: {
      text: string;
      href: string;
    };
  };
  id?: string;
  cssClasses?: string;
  isMain?: boolean;
}

const AboutComponent = ({
  data: {
    heading,
    paragraph,
    subparagraph1,
    subparagraph2,
    bookingNote,
    images,
    button,
    button2,
  },
  id,
  cssClasses,
  isMain = false,
}: AboutComponentProps) => {
  const RootElement = isMain ? "main" : "section";
  return (
    <RootElement className={classNames("grid gap-5", cssClasses)} id={id}>
      <h2 className="text-[32px] tablet:text-[40px] font-rye">{heading}</h2>
      <div className="desktop:grid gap-10 desktop:grid-cols-3">
        <div className="flex flex-col gap-4 desktop:order-last">
          {paragraph.map((para, index) => (
            <p key={index}>{parseLinks(para)}</p>
          ))}
          {subparagraph1 && (
            <div>
              <h3 className="text-subheading font-semibold">
                {subparagraph1.subheading}
              </h3>
              {subparagraph1.paragraph.map((para, index) => (
                <p key={index}>{parseLinks(para)}</p>
              ))}
            </div>
          )}
          {subparagraph2 && (
            <div>
              <h3 className="text-subheading font-semibold">
                {subparagraph2.subheading}
              </h3>
              {subparagraph2.paragraph.map((para, index) => (
                <p key={index}>{parseLinks(para)}</p>
              ))}
            </div>
          )}
          <div className="mt-5">
            {bookingNote && <p>{parseLinks(bookingNote)}</p>}
            {button && (
              <ButtonLink
                color="gold"
                ariaLabel={button.text}
                href={button.href}
                cssClasses={classNames(bookingNote ? "mt-5" : "")}
              >
                {button.text}
              </ButtonLink>
            )}
            {button2 && (
              <ButtonLink
                color="red"
                ariaLabel={button2.text}
                href={button2.href}
                cssClasses="mt-5"
              >
                {button2.text}
              </ButtonLink>
            )}
          </div>
        </div>
        <div className="grid gap-10 mt-10 tablet:grid-cols-3 desktop:grid-cols-2 desktop:mt-0 desktop:col-span-2">
          <div>
            <Image
              src={images[0]}
              alt={heading}
              width={400}
              height={400}
              className="w-full h-full aspect-square phone:aspect-video object-cover"
            />
          </div>
          <div className="desktop:order-last">
            <Image
              src={images[1]}
              alt={heading}
              width={400}
              height={400}
              className="w-full h-full object-cover aspect-square phone:aspect-video"
            />
          </div>
          <div className="hidden tablet:block desktop:row-span-2">
            <Image
              src={images[2]}
              alt={heading}
              width={400}
              height={800}
              className="w-full h-full aspect-square object-cover phone:aspect-video desktop:object-top"
            />
          </div>
        </div>
      </div>
    </RootElement>
  );
};

export default AboutComponent;
