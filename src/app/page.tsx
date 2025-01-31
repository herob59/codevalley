
import CounterSection from "@/components/CounterSection";
import Product from "@/sections/Product";
import { AppProps } from "next/app";
import "./globals.css";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";


export default function Home({ Component, pageProps }: AppProps) {
  return (

    <>
    <Header />  
    <HeroSection/>     
       <Product />
       <ServiceSection />
        <CounterSection /> 
        <ContactSection />
      < Footer />
    </>
  );
}
