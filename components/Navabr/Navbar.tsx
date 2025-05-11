"use client";
import { motion } from "framer-motion";
import RightNavbar from "./RightNavbar/RightNavbar";
import LeftNavbar from "./LeftNavbar/LeftNavbar";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import { useState } from "react";

function Navbar() {

  const [isMobileMenuOpen , setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <header className="bg-white border-b border-b-gray-700 dark:bg-[#011627]">
          <div className="lg:container p-3 lg:mx-auto flex w-full items-center justify-between lg:px-16">
            <LeftNavbar />
            <RightNavbar onOpen={openMobileMenu}/>
          </div>
        </header>
      </motion.div>
      <MobileSidebar isOpenMobileMenu={isMobileMenuOpen} onClose={closeMobileMenu}/>
    </>
  );
}

export default Navbar;
