import ContactSection from "@/components/ContactSection";
import CounterSection from "@/components/CounterSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import Category from "@/sections/Category";
import  './globals.css'




export default function Home() {
  return (
    <main id="main">
     <Header /> 
    
       <HeroSection/>     
       <Category />
       <ServiceSection />
        <CounterSection /> 
        <ContactSection />
        < Footer />  
 
    </main>
  );
}
