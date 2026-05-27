"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "All Products",
      path: "/products",
    },
    {
      name: "Manage",
      path: "/manageProducts",
    },
    {
      name: "Add Product",
      path: "/products/add",
    },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>
            <Link href="/">
              {" "}
              <h3 className="font-bold text-xl lg:text-2xl">PH E-Commerce</h3>
            </Link>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
