import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex gap-3 mt-3">
      <Link
        href="https://www.facebook.com/profile.php?id=61573588782509"
        className="w-8 h-8 flex items-center justify-center rounded border border-[#2F2F2F] text-[#7B7B7B] hover:text-white hover:border-[#767676] transition-colors"
      >
        <Facebook className="w-4 h-4" />
      </Link>
      <Link
        href="https://www.instagram.com/usman__baig_34/?next=%2F"
        className="w-8 h-8 flex items-center justify-center rounded border border-[#2F2F2F] text-[#7B7B7B] hover:text-white hover:border-[#767676] transition-colors"
      >
        <Instagram className="w-4 h-4" />
      </Link>
      <Link
        href="https://github.com/Mirza-Usman-247"
        className="w-8 h-8 flex items-center justify-center rounded border border-[#2F2F2F] text-[#7B7B7B] hover:text-white hover:border-[#767676] transition-colors"
      >
        <Github className="w-4 h-4" />
      </Link>
      <Link
        href="https://x.com/usmanbaig2008"
        className="w-8 h-8 flex items-center justify-center rounded border border-[#2F2F2F] text-[#7B7B7B] hover:text-white hover:border-[#767676] transition-colors"
      >
        <Twitter className="w-4 h-4" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/usman-baig-b9b16b2b1/"
        className="w-8 h-8 flex items-center justify-center rounded border border-[#2F2F2F] text-[#7B7B7B] hover:text-white hover:border-[#767676] transition-colors"
      >
        <Linkedin className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default SocialMedia;
