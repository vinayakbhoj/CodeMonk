"use client";
import  { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../../components/ui/navbar-menu";
import { cn } from "../../../lib/utils";
import codemonk from '../../../assets/codemonk.jpeg'

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      {/* <img
          src={codemonk}
          alt="Codemonk Logo"
          width={45}
          height={45}
          className="rounded-full"
        /> */}
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="logo">
        <img src={codemonk} />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services">Web Development</HoveredLink>
            <HoveredLink href="/services">Fullstack Development</HoveredLink>
            <HoveredLink href="/services">IT Consulting</HoveredLink>
            <HoveredLink href="/services">Cloud Consulting</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/pricing">Web Devwlopment</HoveredLink>
            <HoveredLink href="/pricing">Fullstack Development</HoveredLink>
            <HoveredLink href="/pricing">IT Consulting</HoveredLink>
            {/* <HoveredLink href="/pricing">Enterprise</HoveredLink> */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">Team</HoveredLink>
            <HoveredLink href="/about">Milestone</HoveredLink>
            <HoveredLink href="/about">Leaders</HoveredLink>
            <HoveredLink href="/about">Clients</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Contact</HoveredLink>
            {/* <HoveredLink href="/about">Milestone</HoveredLink>
            <HoveredLink href="/about">Leaders</HoveredLink>
            <HoveredLink href="/about">Clients</HoveredLink> */}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
