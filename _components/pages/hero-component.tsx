import Image from "next/image";

import GallerySlider from "@/_components/pages/gallery-slider";
import classNames from "classnames";

interface HeroComponentProps {
  galleryData: string[];
  imageUrl?: string;
  pageName?: string;
}

const HeroComponent = ({
  galleryData,
  pageName,
  imageUrl,
}: HeroComponentProps) => {
  return (
    <section className="relative grid">
      <div
        className={classNames("overflow-hidden", {
          "order-last desktop:order-first": pageName,
        })}
      >
        <GallerySlider
          data={galleryData}
          cssClasses="h-[500px] phone:h-[575px] tablet:h-[650px] desktop:h-[600px]"
        />
      </div>
      <div
        className={classNames(
          "flex flex-col gap-5 items-center desktop:absolute desktop:top-[250px] desktop:left-0 desktop:z-10 desktop:bg-white/90",
          {
            "mt-15 desktop:flex-row desktop:pl-10 desktop:pr-5 desktop:mt-0":
              imageUrl,
            "desktop:px-10": !imageUrl,
          },
        )}
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Maple Ranch Logo"
            className="w-[250px] object-contain desktop:w-[125px] desktop:order-last"
            width={250}
            height={250}
            priority
          />
        )}
        <div>
          <h1
            className={classNames(
              "grid gap-1.5 place-items-center border-y-4 border-red/75 text-[1.25rem] uppercase font-pt-sans desktop:text-[1.75rem] desktop:normal-case pb-4 pt-0.5 desktop:pb-3 desktop:pt-0 desktop:my-10",
              {
                "my-15": !imageUrl,
                "mb-15": imageUrl,
              },
            )}
          >
            Maple Ranch
            <span className="font-passion-one text-[3.75rem] normal-case">
              {pageName}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
