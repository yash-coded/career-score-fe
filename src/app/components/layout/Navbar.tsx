import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center shadow-md bg-white">
      <div className="logo relative w-32 h-10">
        <div className="relative w-full h-full">
          <Image
            src="/images/logo-vector1.svg"
            alt="Logo part 1"
            fill
            className="object-contain"
          />
          <Image
            src="/images/logo-vector2.svg"
            alt="Logo part 2"
            fill
            className="object-contain"
          />
          <Image
            src="/images/logo-vector3.svg"
            alt="Logo part 3"
            fill
            className="object-contain"
          />
          <Image
            src="/images/logo-vector4.svg"
            alt="Logo part 4"
            fill
            className="object-contain"
          />
          <Image
            src="/images/logo-vector5.svg"
            alt="Logo part 5"
            fill
            className="object-contain"
          />
          <Image
            src="/images/logo-vector6.svg"
            alt="Logo part 6"
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
