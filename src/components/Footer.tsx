import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-primary/10 via-accent/10 to-background py-8 border-t border-accent/20 mt-16">
      <div className="container mx-auto max-w-7xl text-center flex flex-col items-center gap-2">
        <Logo />
        <p className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} PropOut. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
