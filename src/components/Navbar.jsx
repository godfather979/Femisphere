import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { PiSuitcaseSimple } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";



const Navbar = () => {
  const links = [
    {
      title: "Live Location",
      icon: (
        <FaLocationDot className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/tracking",
    },

    {
      title: "Wellness",
      icon: (
        <FaHeartbeat className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/wellness",
    },
    {
      title: "Home",
      icon: (
        <IoHomeOutline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/home",
    },
    {
      title: "Job Oppurtunities",
      icon: (
        <PiSuitcaseSimple className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/job",
    },
    {
      title: "Legal Assistance",
      icon: (
        <GoLaw className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/legal",
    },
   
  
  ];
  return (
    <div className="fixed bottom-0 flex items-center justify-center h-[8rem] w-full z-50">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}

export default Navbar;
