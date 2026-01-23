import { generatePageMetadata } from "@/_lib/metadata";
import HeroComponent from "@/_components/pages/hero-component";
import generalData from "@/_data/general-data.json";
import AboutComponent from "@/_components/pages/about-component";
import ContactComponent from "@/_components/pages/contact-component";
import PageWrapper from "@/_lib/page-wrapper";

export const metadata = generatePageMetadata({
  title: "Horse Trails - Maple Ranch Plettenberg Bay",
  description:
    "Guided horse trails through indigenous forests near Plettenberg Bay. Experience nature on our American Quarter Horses with 1-2 hour rides tailored for intermediate riders.",
  keywords: [
    "Horse trails Plettenberg Bay",
    "horse riding Plett",
    "quarter horses",
    "forest trails",
    "horse riding garden route",
    "Maple Ranch horse trails",
    "guided horse rides",
  ],
  path: "/horse-trails",
  ogTitle: "Horse Trails - Maple Ranch Plettenberg Bay",
  ogDescription:
    "Guided horse trails through indigenous forests near Plettenberg Bay on American Quarter Horses. Book your ride today!",
  twitterTitle: "Horse Trails - Maple Ranch",
  twitterDescription:
    "Guided horse trails through indigenous forests near Plettenberg Bay on American Quarter Horses.",
  ogImageAlt: "Horse Trails at Maple Ranch",
});

const {
  horseTrailsPage: { heroGallery, about },
} = generalData;

const HorseTrailsPage = () => {
  return (
    <div className="max-w-[1360px] mx-auto">
      <HeroComponent galleryData={heroGallery} pageName="Horse Trails" />
      <PageWrapper cssClasses="grid gap-15 pt-15">
        <AboutComponent data={about} />
        <div id="contact" className="scroll-mt-0" />
        <ContactComponent department="adventures" />
      </PageWrapper>
    </div>
  );
};

export default HorseTrailsPage;
