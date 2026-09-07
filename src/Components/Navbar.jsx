"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown, FiPhone } from "react-icons/fi";
import Button from "@/components/ui/Button";

const servicesMenu = [
  { href: "/services#web", label: "Web Development" },
  { href: "/services#mobile", label: "Mobile App Development" },
  { href: "/services#ai", label: "AI Development" },
  { href: "/services#uiux", label: "UI/UX Design" },
  { href: "/services#marketing", label: "Social Media Marketing" },
  { href: "/services#custom", label: "Custom Software Development" },
];

const companyMenu = [
  { href: "/company", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/careers", label: "Careers" },
];

const flatLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
    setMobileGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href) => {
    const path = href.split("#")[0];
    if (path === "/") return pathname === "/";
    return pathname === path || pathname === `${path}/`;
  };

  const linkBase = "text-sm font-medium transition-colors duration-200";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-gray-200 bg-white/95 backdrop-blur-md shadow-sm"
          : "border-transparent bg-white"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center transition-all duration-300 ${
            scrolled ? "h-[76px]" : "h-20"
          }`}
        >
          <Link
            href="/"
            className="flex items-center"
            aria-label="The Revolution Technologies home"
          >
            <Image
              src="/images/logo12.png"
              alt="The Revolution Technologies"
              width={2060}
              height={1096}
              priority
              className="h-12 w-auto object-contain md:h-14"
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className={`${linkBase} ${
              isActive("/")
                ? "text-primary-900"
                : "text-gray-700 hover:text-primary-900"
            }`}
          >
            Home
          </Link>

          <Dropdown
            label="Services"
            items={servicesMenu}
            pathname={pathname}
            rootHref="/services"
          />

          <Link
            href="/portfolio"
            className={`${linkBase} ${
              isActive("/portfolio")
                ? "text-primary-900"
                : "text-gray-700 hover:text-primary-900"
            }`}
          >
            Portfolio
          </Link>

          <Dropdown label="Company" items={companyMenu} pathname={pathname} />

          <Link
            href="/faq"
            className={`${linkBase} ${
              isActive("/faq")
                ? "text-primary-900"
                : "text-gray-700 hover:text-primary-900"
            }`}
          >
            FAQ
          </Link>
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+92516112452"
            className="hidden items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-900 xl:flex"
          >
            <FiPhone className="h-4 w-4 text-primary-700" />
            051-611-2452
          </a>
          <Button href="/contact" size="sm" icon={false}>
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="rounded-lg p-2 text-gray-800 transition-colors hover:bg-gray-100 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-gray-200 bg-white px-4 pb-8 pt-3 lg:hidden">
          <MobileLink href="/" label="Home" pathname={pathname} />

          <MobileGroup
            label="Services"
            items={[
              { href: "/services", label: "All Services" },
              ...servicesMenu,
            ]}
            open={mobileGroup === "services"}
            onToggle={() =>
              setMobileGroup((g) => (g === "services" ? null : "services"))
            }
          />

          <MobileLink href="/portfolio" label="Portfolio" pathname={pathname} />

          <MobileGroup
            label="Company"
            items={companyMenu}
            open={mobileGroup === "company"}
            onToggle={() =>
              setMobileGroup((g) => (g === "company" ? null : "company"))
            }
          />

          <MobileLink href="/faq" label="FAQ" pathname={pathname} />

          <div className="mt-5 border-t border-gray-100 pt-5">
            <a
              href="tel:+92516112452"
              className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-700"
            >
              <FiPhone className="h-4 w-4 text-primary-700" />
              051-611-2452
            </a>
            <Button href="/contact" className="w-full" icon={false}>
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Dropdown({ label, items, pathname, rootHref }) {
  const groupActive = items.some((i) => {
    const path = i.href.split("#")[0];
    return pathname === path || pathname === `${path}/`;
  });

  return (
    <div className="group relative">
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
          groupActive
            ? "text-primary-900"
            : "text-gray-700 group-hover:text-primary-900"
        }`}
      >
        {label}
        <FiChevronDown className="h-4 w-4 transition-all duration-200 group-hover:rotate-180 group-hover:text-primary-900" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
          {rootHref && (
            <Link
              href={rootHref}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-primary-900 hover:bg-primary-50"
            >
              All {label}
            </Link>
          )}
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileLink({ href, label, pathname }) {
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`block rounded-lg px-3 py-3 text-base font-semibold transition-colors ${
        active
          ? "bg-primary-50 text-primary-900"
          : "text-gray-800 hover:bg-gray-50"
      }`}
    >
      {label}
    </Link>
  );
}

function MobileGroup({ label, items, open, onToggle }) {
  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-gray-800 transition-colors hover:bg-gray-50"
      >
        {label}
        <FiChevronDown
          className={`h-5 w-5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="ml-3 border-l border-gray-200 pl-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-sm text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
