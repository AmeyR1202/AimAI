import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=" text-gray-400 px-7 md:px-18 lg:px-34 pt-16 pb-10 mt-7">
      <div className="flex flex-col md:flex-row md:justify-between gap-12 border-b border-gray-700 pb-10">
        {/* Left: Logo + Description */}
        <div className="max-w-md">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="AimAI Logo"
              width={180}
              height={50}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-gray-500">
            Empowering your AI journey. We build next-gen tools for the future,
            blending creativity and technology to solve tomorrow’s problems
            today.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-white transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Right: Links */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="hover:text-white transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/blogs"
                  className="hover:text-white transition-colors"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-white transition-colors"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="hover:text-white transition-colors"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="hover:text-white transition-colors"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>+1-234-567-890</li>
              <li>contact@aimai.com</li>
              <li>123 AI Street, Silicon Valley</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center pt-8 text-sm text-gray-600">
        © {year} AimAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
