import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-10 pb-6 w-full mt-auto rounded-t-[20px]">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-base leading-[1.75]">Company</h3>
            <div className="text-sm leading-[2]">
              <Link href="/about" className="block hover:underline">
                About Us
              </Link>
              <Link href="/contact" className="block hover:underline">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-base leading-[1.75]">Tools</h3>
            <div className="text-sm leading-[2]">
              <Link href="/pricing" className="block hover:underline">
                Pricing
              </Link>
              <Link href="/how-it-works" className="block hover:underline">
                How it Works
              </Link>
              <Link href="/resources" className="block hover:underline">
                Resources
              </Link>
            </div>
          </div>

          {/* Logo Placeholder - In real implementation, we'd add the logo SVGs */}
          <div className="flex items-center justify-center md:justify-end">
            {/* Logo would go here */}
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/20 mt-10 gap-4">
          <div className="text-sm">© {currentYear} CareerScore, Inc</div>
          <div className="flex gap-8 text-sm">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
