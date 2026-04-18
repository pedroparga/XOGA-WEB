"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { getLangContent, type Lang } from "@/lib/site-data";

function switchLang(pathname: string, lang: Lang) {
  const nextLang = lang === "es" ? "en" : "es";
  return pathname.replace(/^\/(es|en)/, `/${nextLang}`);
}

export default function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const content = getLangContent(lang);
  const [isTop, setIsTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const enterTop = 20;
    const exitTop = 60;
    let current: boolean | null = null;
    let ticking = false;

    const applyState = () => {
      const y = window.scrollY;
      const next = current === null ? y < enterTop : current ? y < exitTop : y < enterTop;
      if (next !== current) {
        setIsTop(next);
        current = next;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(applyState);
    };

    applyState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 600) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const alternateHref = useMemo(() => switchLang(pathname, lang), [lang, pathname]);

  return (
    <header className={`topbar${isTop ? " is-top" : ""}${menuOpen ? " menu-open" : ""}`}>
      <div className="topbar-inner">
        <Link className="brand" href={`/${lang}`}>
          <Image alt="XOGA" className="brand-mark" height={38} priority src="/imagenes/brand-mark.webp" width={38} />
          <span className="brand-text">XOGA</span>
        </Link>
        <nav className={`nav${menuOpen ? " is-open" : ""}`} id="main-nav">
          {content.navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="topbar-actions">
          <div className="lang-switch" aria-label={content.languageSwitcherLabel}>
            {lang === "es" ? (
              <>
                <span className="lang-link is-active">ES</span>
                <span className="lang-sep">|</span>
                <Link className="lang-link" href={alternateHref}>
                  EN
                </Link>
              </>
            ) : (
              <>
                <Link className="lang-link" href={alternateHref}>
                  ES
                </Link>
                <span className="lang-sep">|</span>
                <span className="lang-link is-active">EN</span>
              </>
            )}
          </div>
          <button
            aria-controls="main-nav"
            aria-expanded={menuOpen}
            aria-label={content.menuLabel}
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
