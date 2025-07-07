'use client';

import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import SliderOne from "@/components/ui/slider";
import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./snippets/shopify-stores";
import Brands from "./snippets/brands";
import Services from "./snippets/services";
import FAQS from "./snippets/faq";
import { useRef, useState } from "react";

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);

  const navbarHeight = 80; // Adjust to your actual navbar height

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const y =
        ref.current.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToWebsiteDesign = () => scrollToRef(websiteDesignRef);
  const scrollToGraphicDesign = () => scrollToRef(graphicDesignRef);
  const scrollToShopifyStores = () => scrollToRef(shopifyStoresRef);
  const scrollToBrands = () => scrollToRef(brandsRef);

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
      />
      <Spotlight
        className="hidden md:flex md:left-80"
        fill="white"
      />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-32 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Create, Grow, and <br /> Scale your business
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom tailored solutions for your business. We are a team of
          creatives who are excited to help you grow your business.
        </p>
        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white"
        >
          Book a Call
        </Link>

        <div className="w-full pt-20">
          <SliderOne />
        </div>

        <div ref={websiteDesignRef} className="scroll-mt-28">
          <WebsiteDesign />
        </div>

        <div ref={graphicDesignRef} className="scroll-mt-28">
          <GraphicDesign />
        </div>

        <div ref={shopifyStoresRef} className="scroll-mt-28">
          <ShopifyStores />
        </div>

        <div ref={brandsRef} className="scroll-mt-28">
          <Brands />
        </div>

        <Services />
        <FAQS />
      </div>
    </div>
  );
}
