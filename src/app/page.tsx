import Image from "next/image"
import Hero from "./components/Hero";
import Featuredcourses from "./components/Featuredcourses";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialCards from "./components/TestimonialCards";
import UpcomingWebinar from "./components/UpcomingWebinar";
import Instructor from "./components/Instructor";

export default function Home() {
  return (
     <div className="min-h-screen border- bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
    <Hero/>
    <Featuredcourses/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <UpcomingWebinar/>
    <Instructor/> 
    </div>
  );
}
