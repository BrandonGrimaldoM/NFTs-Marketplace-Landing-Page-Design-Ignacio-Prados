import Image from "next/image";
import Link from "next/link";

export default function Navegation() {
  return (
    <header className="relative">
      <nav className="w-full h-36 flex justify-between items-center 2xl:p-20 p-5 absolute">
        <Link href="/">
          <Image width={286} height={61} src="/images/logo.png" alt="logo" />
        </Link>
        <div className="flex items-center 2xl:gap-20 lg:gap-5 max-lg:hidden">
          <ul className="flex 2xl:gap-20 lg:gap-5 text-xl font-semibold">
            <Link href="#">
              <li>Marketplace</li>
            </Link>
            <Link href="#">
              <li>Collection</li>
            </Link>
            <Link href="#">
              <li>Community</li>
            </Link>
            <Link href="#">
              <li>Create</li>
            </Link>
          </ul>
          <button className="bg-[#7049C3] rounded-[60px] py-4 px-6  max-lg:hidden">
            <p className="text-xl font-semibold">Connect Wallet</p>
          </button>
        </div>
      </nav>
    </header>
  );
}
