"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-md text-sm font-medium ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white shadow mb-6">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-semibold text-blue-600">OneApp</span>
        <div className="flex space-x-4">
          <Link href="/form" className={linkClass("/form")}>
            Formulario
          </Link>
          <Link href="/dashboard" className={linkClass("/dashboard")}>
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
