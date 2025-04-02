'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav>
            <Link
                href="/"
                className={pathname === "/" ? "font-bold mr-4" : "mr-4"}
            >
                Home
            </Link>
            <Link
                href="/about"
                className={pathname === "/about" ? "font-bold mr-4" : "mr-4"}
            >
                About
            </Link>
            <Link
                href="/products/1"
                className={pathname === "/products/1" ? "font-bold mr-4" : "mr-4"}
            >
                Products 1
            </Link>
        </nav>
    );
}