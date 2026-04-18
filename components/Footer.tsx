import Link from "next/link";
import { getLangContent, type Lang } from "@/lib/site-data";

export default function Footer({ lang }: { lang: Lang }) {
  const content = getLangContent(lang).footer;

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-social">
          <a href="https://www.instagram.com/xogaapp" aria-label="Instagram" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            Instagram
          </a>
          <a href="#" aria-label="TikTok">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M14 4c1.2 1.7 2.7 2.7 4.5 2.9V10c-1.9 0-3.6-.6-4.5-1.5V16a4 4 0 1 1-4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            TikTok
          </a>
        </div>
        <div className="footer-brand">
          <span className="footer-text">XOGA</span>
        </div>
        <div className="footer-links">
          <Link href={`/${lang}/contact`}>{content.contact}</Link>
          <Link href={`/${lang}/legal#privacy-policy`}>{content.privacy}</Link>
          <Link href={`/${lang}/legal#legal-notice`}>{content.legal}</Link>
          <Link href={`/${lang}/legal#cookie-policy`}>{content.cookies}</Link>
        </div>
      </div>
      <div className="footer-legal">{content.rights}</div>
    </footer>
  );
}
