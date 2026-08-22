import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/sections/Hero";
import { ReflectionQuestions } from "@/components/sections/ReflectionQuestions";
import { OSComparison } from "@/components/sections/OSComparison";
import { FounderStory } from "@/components/sections/FounderStory";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { ThoughtExperiment } from "@/components/sections/ThoughtExperiment";
import { Workshop } from "@/components/sections/Workshop";
import { Footer } from "@/components/sections/Footer";
import { ModalProvider } from "@/components/modal/ModalContext";
import { ReflectionModal } from "@/components/modal/ReflectionModal";

export default function Home() {
  return (
    <ModalProvider>
      <NoiseOverlay />
      <ProgressBar />
      <Nav />
      <main>
        <Hero />
        <ReflectionQuestions />
        <OSComparison />
        <FounderStory />
        <JourneyTimeline />
        <ThoughtExperiment />
        <Workshop />
      </main>
      <Footer />
      <ReflectionModal />
    </ModalProvider>
  );
}
