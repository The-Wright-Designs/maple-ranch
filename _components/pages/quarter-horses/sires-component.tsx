import Image from "next/image";

import siresData from "@/_data/general-data.json";

const {
  quarterHorsesPage: { sires },
} = siresData;

const SiresComponent = () => {
  return (
    <section className="grid gap-10">
      <h2 className="text-[32px] tablet:text-[40px] font-rye">Sires</h2>
      <div className="grid tablet:grid-cols-2 desktop:grid-cols-3 gap-10">
        {sires.images.map((sire, index) => (
          <div key={index} className="grid gap-4">
            <Image
              src={sire.src}
              alt={sire.name}
              width={400}
              height={400}
              className="w-full h-full object-cover aspect-[4/3]"
            />
            <p className="text-paragraph">{sire.name}</p>
          </div>
        ))}
        <video
          src={sires.video}
          controls
          muted
          className="w-full h-full object-contain aspect-[4/3] bg-black"
        />
      </div>
    </section>
  );
};

export default SiresComponent;
