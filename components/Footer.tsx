import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 ">
            <Link
              href="/stores"
              className="block text-white hover:text-gray-300"
            >
              <h1>FIND A STORE</h1>
            </Link>
            <Link
              href="/membership"
              className="block text-white hover:text-gray-300"
            >
              BECOME A MEMBER
            </Link>
            <Link
              href="/signup"
              className="block text-white hover:text-gray-300"
            >
              SIGN UP FOR EMAIL
            </Link>
            <Link
              href="/feedback"
              className="block text-white hover:text-gray-300"
            >
              Send Us Feedback
            </Link>
            <Link
              href="/student-discounts"
              className="block text-white hover:text-gray-300"
            >
              STUDENT DISCOUNTS
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-bold mb-4">GET HELP</h3>
            <Link href="/order-status" className="block hover:text-gray-300">
              Order Status
            </Link>
            <Link href="/delivery" className="block hover:text-gray-300">
              Delivery
            </Link>
            <Link href="/returns" className="block hover:text-gray-300">
              Returns
            </Link>
            <Link href="/payment-options" className="block hover:text-gray-300">
              Payment Options
            </Link>
            <Link href="/contact" className="block hover:text-gray-300">
              Contact Us On Nike.com Inquiries
            </Link>
            <Link href="/contact-other" className="block hover:text-gray-300">
              Contact Us On All Other Inquiries
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-bold mb-4">ABOUT NIKE</h3>
            <Link href="/news" className="block hover:text-gray-300">
              News
            </Link>
            <Link href="/careers" className="block hover:text-gray-300">
              Careers
            </Link>
            <Link href="/investors" className="block hover:text-gray-300">
              Investors
            </Link>
            <Link href="/sustainability" className="block hover:text-gray-300">
              Sustainability
            </Link>
          </div>
          <div className="flex gap-4 lg:justify-end justify-center h-10 lg:px-6">
            <Link
              href=""
              className="bg-gray-500 w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-600 transition-colors"
            >
              <CiTwitter className="w-6 h-6 text-black " />
            </Link>
            <Link
              href=""
              className="bg-gray-500 w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-600 transition-colors"
            >
              <CiFacebook className="w-6 h-6 text-black " />
            </Link>
            <Link
              href="e"
              className="bg-gray-500 w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-600 transition-colors"
            >
              <CiYoutube className="w-6 h-6 text-black " />
            </Link>
            <Link
              href=""
              className="bg-gray-500 w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-600 transition-colors"
            >
              <FaInstagram className="w-6 h-6 text-black " />
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm">
            <span>© 2023 Nike, Inc. All Rights Reserved</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/guides" className="hover:text-gray-300">
              Guides
            </Link>
            <Link href="/terms-of-sale" className="hover:text-gray-300">
              Terms of Sale
            </Link>
            <Link href="/terms-of-use" className="hover:text-gray-300">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="hover:text-gray-300">
              Nike Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
