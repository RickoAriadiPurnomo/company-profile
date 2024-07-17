import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="shadow bg-slate-200 static bottom-0">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-6">
        <div className="flex flex-col items-center gap-y-4 md:flex-row sm:max-xl:justify-around xl:justify-between">
          <Link
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <div className="flex gap-x-3 items-center align-center">
              <Image width={150} height={90} src="/logo.png" alt="Logo" />
            </div>
          </Link>

          <span className="block text-sm md:text-md text-black sm:text-center tracking-wider">
            © 2024{" "}
            <Link href="#" className="hover:underline">
              DreamHouse
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
