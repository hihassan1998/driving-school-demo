import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { GallerySection } from "@/components/GallerySection";
import { PartnersSection } from "@/components/PartnersSection";
import { BookingSection } from "@/components/BookingSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <GallerySection />
      <PartnersSection />
      <BookingSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
