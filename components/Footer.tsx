import Link from "next/link";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="px-3 bg-black text-gray-400">
      <div className="mx-auto py-12">
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
            <Link href="/" className="block text-white hover:text-gray-300">
              SIGN UP FOR EMAIL
            </Link>
            <Link href="/" className="block text-white hover:text-gray-300">
              Send Us Feedback
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-bold mb-4">GET HELP</h3>
            <Link href="/help-center" className="block hover:text-gray-300">
              Delivery
            </Link>
            <Link href="/help-center" className="block hover:text-gray-300">
              Returns
            </Link>
            <Link href="/help-center" className="block hover:text-gray-300">
              Payment Options
            </Link>
            <Link href="/help-center" className="block hover:text-gray-300">
              Contact Us On Nike.com Inquiries
            </Link>
            <Link href="/help-center" className="block hover:text-gray-300">
              Contact Us On All Other Inquiries
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-bold mb-4">ABOUT NIKE</h3>
            <Link href="/" className="block hover:text-gray-300">
              News
            </Link>
            <Link href="/" className="block hover:text-gray-300">
              Careers
            </Link>
            <Link href="/" className="block hover:text-gray-300">
              Investors
            </Link>
            <Link href="/" className="block hover:text-gray-300">
              Sustainability
            </Link>
          </div>
          <div className="flex gap-4 lg:justify-end justify-center h-10 lg:px-6">
            <SocialMedia />
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
