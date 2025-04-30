import React from "react";
// import FloorPlan from "../../components/FloorPlan";
// import NavigationDots from "../../components/NavigationDots";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-effect rounded-full px-8 py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a
              href="#overview"
              className="text-foreground/80 hover:text-primary transition-all hover:scale-105"
            >
              Overview
            </a>
            <a
              href="#investment"
              className="text-foreground/80 hover:text-primary transition-all hover:scale-105"
            >
              Investment
            </a>
            <a
              href="#goals"
              className="text-foreground/80 hover:text-primary transition-all hover:scale-105"
            >
              Goals
            </a>
            <a
              href="#solutions"
              className="text-foreground/80 hover:text-primary transition-all hover:scale-105"
            >
              Solutions
            </a>
            <a
              href="#projections"
              className="text-foreground/80 hover:text-primary transition-all hover:scale-105"
            >
              Projections
            </a>
            <a
              href="#team"
              className="text-foreground/80 hover:text-primary transition-all hover:scale-105"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-all hover:scale-105"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
