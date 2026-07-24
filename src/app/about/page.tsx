import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Story } from "@/components/about/story";
import { ExperienceSection } from "@/components/about/experience";
import { EducationAndSkills } from "@/components/about/education-skills";
import { Footer } from "@/components/footer";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} - ${site.description}`,
};

export default function AboutPage() {
  return (
    <>
      <SmoothScroll />
      <div className="grain" />
      <Nav />
      <main>
        <Story />
        <ExperienceSection />
        <EducationAndSkills />
      </main>
      <Footer />
    </>
  );
}
