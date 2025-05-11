import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center shadow-md bg-white">
      <div className="logo relative w-32 h-10">
        <div className="relative w-full h-full">
          <Image
            src="/icon/logo.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/pricing" className="hover:text-primary">
          <div className="py-2 px-4">
            <span className="text-black font-normal text-base">Pricing</span>
          </div>
        </Link>
        <Link href="/resources" className="hover:text-primary">
          <div className="py-2 px-4">
            <span className="text-black font-normal text-base">Resources</span>
          </div>
        </Link>
        <Link href="/about" className="hover:text-primary">
          <div className="py-2 px-4">
            <span className="text-black font-normal text-base">About Us</span>
          </div>
        </Link>
        <Link href="/signin">
          <div className="py-2 px-4 bg-accent rounded-lg">
            <span className="text-black font-normal text-base">Sign in</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
