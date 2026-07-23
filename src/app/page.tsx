import { Nav } from "@/components/nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Hero } from "@/components/home/hero";
import { WorkList } from "@/components/home/work-list";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <div className="grain" />
      <Nav />
      <main>
        <Hero />
        <WorkList />
      </main>
      <Footer />
    </>
  );
}
