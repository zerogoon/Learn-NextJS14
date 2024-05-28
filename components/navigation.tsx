"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

export default function Navigation() {
    const path = usePathname();
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about-us">About</Link>
                </li>
            </ul>
        </nav>
    );
}
