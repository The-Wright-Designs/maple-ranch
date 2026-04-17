import { generatePageMetadata } from "@/_lib/metadata";
import HeroComponent from "@/_components/pages/hero-component";
import heroGalleryData from "@/_data/general-data.json";
import AboutComponent from "@/_components/pages/about-component";
import ContactComponent from "@/_components/pages/contact-component";
import EquadToursComponent from "@/_components/pages/adventures/e-quad-tours";
import PageWrapper from "@/_lib/page-wrapper";

export const metadata = generatePageMetadata({
  title:
    "MR Adventures - E-Quad Tours, Horse Trails & Team Building at Maple Ranch",
  description:
    "Experience guided electric quad bike tours and scenic horse trails through indigenous forests near Plettenberg Bay. Offering team building, school camps, kayaking, and outdoor adventures. Open daily 07:30-18:00. Book your adventure from R650pp.",
  keywords: [
    "MR Adventures",
    "E-Quad tours Plettenberg Bay",
    "electric quad bike tours Plett",
    "horse trails Plettenberg Bay",
    "guided horse rides Plett",
    "forest trails Plettenberg Bay",
    "team building Plett",
    "school camps Plettenberg Bay",
    "corporate team building",
    "kayaking Plettenberg Bay",
    "outdoor adventures Plett",
    "ATV tours South Africa",
    "guided quad tours",
    "Keurbooms adventures",
    "whale viewing Plett",
    "electric quad bikes",
    "Quarter horse trails",
  ],
  path: "/adventures",
  ogTitle:
    "MR Adventures - E-Quad Tours, Horse Trails & Team Building at Maple Ranch",
  ogDescription:
    "Whisper-quiet electric quad bike tours and scenic horse trails through indigenous forest, team building programs, and outdoor adventures near Plettenberg Bay. Book your adventure today!",
  twitterTitle:
    "MR Adventures - E-Quad Tours, Horse Trails & Outdoor Activities",
  twitterDescription:
    "Guided electric quad bike tours, horse trails, and team building in Plettenberg Bay.",
  ogImageAlt: "MR Adventures - E-Quad Tours, Horse Trails & Outdoor Activities",
});

const {
  adventuresPage: { heroGallery, about, eQuadTours },
  horseTrailsPage: { about: horseTrailsAbout },
} = heroGalleryData;

const AdventuresPage = () => {
  return (
    <div className="max-w-[1360px] mx-auto">
      <HeroComponent galleryData={heroGallery} pageName="MR Adventures" />
      <PageWrapper cssClasses="grid gap-15 pt-15">
        <AboutComponent data={about} isMain />
        <EquadToursComponent data={eQuadTours} />
        <AboutComponent
          id="horse-trails"
          cssClasses="scroll-mt-10"
          data={horseTrailsAbout}
        />
        <ContactComponent
          id="contact"
          department="adventures"
          facebookLink="https://www.facebook.com/profile.php?id=61579958188427"
          instaLink="https://www.instagram.com/mapleranch_adventures/"
          tripAdvisorLink="https://www.tripadvisor.com/Attraction_Review-g312558-d33035628-Reviews-Maple_Ranch_Adventures-Plettenberg_Bay_Western_Cape.html"
        />
      </PageWrapper>
    </div>
  );
};

export default AdventuresPage;
