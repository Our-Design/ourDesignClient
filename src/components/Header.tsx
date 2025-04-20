import Link from "next/link";
import NavLinksComponent from "./NavLinksComponent";
import { cookies } from "next/headers";
import Image from "next/image";

const Header = async () => {
  const isAuthorized = (await cookies()).get("accessToken")?.value;

  return (
    <nav className="fixed z-1 w-full backdrop-blur supports-[backdrop-filter]:bg-secondary/40 flex py-4 justify-between items-center px-8">
      <Link
        // onClick={() => scrollToSection(0)}
        href="/"
        className="font-bold flex items-end gap-2 text-3xl cursor-pointer"
      >
        <Image src="/ourDesignLogo.png" alt="logo" width={27} height={27} />
        <span>OurDesign</span>
      </Link>

      <NavLinksComponent isAuthorized={isAuthorized || ""} />
    </nav>
  );
};

export default Header;
