'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    SignInButton, UserButton, SignedIn,
    SignedOut
} from "@clerk/nextjs";

export const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav className="flex items-center justify-center p-4">
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
                href="/mock-users"
                className={pathname === "/mock-users" ? "font-bold mr-4" : "mr-4"}
            >
                Dashboard
            </Link>

            <Link
                href="/products/1"
                className={pathname === "/products/1" ? "font-bold mr-4" : "mr-4"}
            >
                Products 1
            </Link>
            <SignedOut>
                <SignInButton
                    mode="modal"
                />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    );
}