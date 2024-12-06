import React from "react";
import { WavesIcon, FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator"; // Adjust import path as needed
import Link from "next/link";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-3">
            <WavesIcon className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">Ocean Body</span>
          </div>
          {/* Navigation Links */}
          <nav className="flex space-x-6 text-sm">
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
            <Link href="/comparisons" className="hover:text-blue-400">
              Comparisons
            </Link>
            <Link href="/learn" className="hover:text-blue-400">
              Learn More
            </Link>
            <Link href="/act" className="hover:text-blue-400">
              Take Action
            </Link>
          </nav>
        </div>

        {/* Separator */}
        <Separator className="my-6 bg-gray-700" />

        {/* Middle Section: Social Media and Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-blue-400">
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-blue-400">
              <InstagramIcon className="h-5 w-5" />
            </Link>
          </div>

          {/* Newsletter Signup */}
          <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Separator */}
        <Separator className="my-6 bg-gray-700" />

        {/* Bottom Section */}
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ocean Body. All rights reserved.</p>
          <p>
            Made with ❤️ by{" "}
            <Link href="https://yourwebsite.com" target="_blank" className="hover:text-blue-400">
              Your Company
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
