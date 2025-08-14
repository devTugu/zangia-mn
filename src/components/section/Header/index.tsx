"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Search,
  X,
  Menu,
  ChevronDown,
  Youtube,
  Instagram,
} from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (menu) => {
    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
  };

  return (
    <header className="w-full">
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-[#684df4] text-white py-2 px-4 hidden lg:block">
        <div className="container max-w-6xl mx-auto flex justify-between items-center text-sm py-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>55 Main Street, 2nd Block, USA</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>demo@example.com</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-white text-sm">Follow Us :</span>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-white hover:text-purple-200 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-purple-200 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-purple-200 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-purple-200 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="container max-w-6xl mx-auto px-4 lg:px-0 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/logo-black.png" width={120} height={40} alt="logo" />
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center">
                  {/* HOME */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-gray-700 hover:text-purple-600 font-bold">
                      HOME
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-48 p-4">
                        <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded">
                          Home Page 1
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded">
                          Home Page 2
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded">
                          Home Page 3
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* ABOUT US */}
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-gray-700 hover:text-purple-600 font-bold px-3 py-2">
                      ABOUT US
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* SERVICES */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-gray-700 hover:text-purple-600 font-bold">
                      SERVICES
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-56 p-4">
                        <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded">
                          Web Development
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded">
                          Mobile Apps
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded">
                          UI/UX Design
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded">
                          Digital Marketing
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* PAGES */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-gray-700 hover:text-purple-600 font-bold">
                      PAGES
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-48 p-4">
                        <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded">
                          Portfolio
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded">
                          Team
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded">
                          FAQ
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded">
                          Pricing
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* BLOG */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-gray-700 hover:text-purple-600 font-bold">
                      BLOG
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-48 p-4">
                        <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded">
                          Blog List
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded">
                          Blog Grid
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded">
                          Blog Details
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* CONTACT US */}
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-gray-700 hover:text-purple-600 font-bold px-3 py-2">
                      CONTACT US
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Simple Search */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-700 hover:text-purple-600"
                  onClick={toggleSearch}
                >
                  <Search className="w-5 h-5" />
                </Button>
              </div>

              <Button className="bg-[#684df4] hover:bg-purple-700 text-white px-8 py-3">
                GET STARTED
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700"
                onClick={toggleSearch}
              >
                <Search className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Search Dropdown */}
      {isSearchOpen && (
        <div className="bg-white border-b shadow-lg">
          <div className="container max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Input
                type="text"
                placeholder="Search..."
                className="flex-1 h-12"
                autoFocus
              />
              <Button variant="ghost" onClick={toggleSearch}>
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b shadow-lg">
          <div className="container max-w-6xl mx-auto px-4 py-4">
            <div className="space-y-2">
              {/* HOME */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileDropdown("home")}
                  className="w-full flex items-center justify-between py-3 text-gray-700 font-medium"
                >
                  HOME
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openMobileDropdown === "home" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openMobileDropdown === "home" && (
                  <div className="pb-3 pl-4 space-y-2">
                    <a href="#" className="block py-2 text-sm text-gray-600">
                      Home Page 1
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-600">
                      Home Page 2
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-600">
                      Home Page 3
                    </a>
                  </div>
                )}
              </div>

              {/* ABOUT US */}
              <div className="border-b border-gray-100">
                <a href="#" className="block py-3 text-gray-700 font-medium">
                  ABOUT US
                </a>
              </div>

              {/* SERVICES */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileDropdown("services")}
                  className="w-full flex items-center justify-between py-3 text-gray-700 font-medium"
                >
                  SERVICES
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openMobileDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openMobileDropdown === "services" && (
                  <div className="pb-3 pl-4 space-y-2">
                    <a href="#" className="block py-2 text-sm text-gray-600">
                      Web Development
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-600">
                      Mobile Apps
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-600">
                      UI/UX Design
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-600">
                      Digital Marketing
                    </a>
                  </div>
                )}
              </div>

              {/* PAGES */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileDropdown("pages")}
                  className="w-full flex items-center justify-between py-3 text-gray-700 font-medium"
                >
                  PAGES
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openMobileDropdown === "pages" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openMobileDropdown === "pages" && (
                  <div className="pb-3 pl-4 space-y-2">
                    <a href="#" className="block py-2 text-sm text-gray-600">
                      Portfolio
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-600">
                      Team
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-600">
                      FAQ
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-600">
                      Pricing
                    </a>
                  </div>
                )}
              </div>

              {/* BLOG */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileDropdown("blog")}
                  className="w-full flex items-center justify-between py-3 text-gray-700 font-medium"
                >
                  BLOG
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openMobileDropdown === "blog" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openMobileDropdown === "blog" && (
                  <div className="pb-3 pl-4 space-y-2">
                    <a href="#" className="block py-2 text-sm text-gray-600">
                      Blog List
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-600">
                      Blog Grid
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-600">
                      Blog Details
                    </a>
                  </div>
                )}
              </div>

              {/* CONTACT US */}
              <div className="border-b border-gray-100">
                <a href="#" className="block py-3 text-gray-700 font-medium">
                  CONTACT US
                </a>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Button className="w-full bg-[#684df4] hover:bg-purple-700 text-white py-3">
                  GET STARTED
                </Button>
              </div>

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-sm text-gray-600">Follow Us :</span>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-50 text-purple-600"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-50 text-purple-600"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-50 text-purple-600"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-50 text-purple-600"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
