import Link from "next/link";
import NavLinksComponent from "./NavLinksComponent";
import { cookies } from "next/headers";
import Image from "next/image";

const Header = async () => {
  const isAuthorized = (await cookies()).get("accessToken")?.value;

  return (
    <nav className="fixed z-30 w-full backdrop-blur-md supports-[backdrop-filter]:bg-secondary/60 flex py-3 justify-between items-center px-8 shadow-sm">
      <Link
        href="/"
        className="font-bold flex items-center gap-2 cursor-pointer"
      >
        <Image
          src="/logos/logo.png"
          alt="OurDesign Logo"
          width={44}
          height={44}
          className="object-contain"
        />
      </Link>

      <NavLinksComponent isAuthorized={isAuthorized || ""} />
    </nav>
  );
};

export default Header;
