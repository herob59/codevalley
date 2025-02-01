
import CounterSection from "@/components/CounterSection";
import { AppProps } from "next/app";
import "./globals.css";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Category from "@/sections/Category";


export default function Home({ Component, pageProps }: AppProps) {
  return (

    <>
    <Header />  
    <HeroSection/>     
       <Category />
       <ServiceSection />
        <CounterSection /> 
        <ContactSection />
      < Footer />
    </>
  );
}
