import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isValidLang } from "@/lib/i18n";

export default async function LangLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLang(lang)) {
    notFound();
  }

  return (
    <>
      <div id="top" />
      {children}
    </>
  );
}
