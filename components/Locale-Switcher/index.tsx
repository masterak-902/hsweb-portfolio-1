"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/i18n-config";
import { useState, useEffect } from "react";
import styles from "./index.module.css";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState<Locale>("ja");

  useEffect(() => {
    const segments = pathName?.split("/");
    if (segments && i18n.locales.includes(segments[1] as Locale)) {
      setCurrentLocale(segments[1] as Locale);
    }
  }, [pathName]);

  const toggleLocale = () => {
    const newLocale: Locale = currentLocale === "en" ? "ja" : "en";
    const redirectedPathName = (locale: Locale) => {
      if (!pathName) return "/";
      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    };
    router.push(redirectedPathName(newLocale));
    setCurrentLocale(newLocale);
  };

  return (
    <div>
      <button className={`${styles.switcher} ${styles.active}`} onClick={toggleLocale}>
        {currentLocale === "ja" ? "English" : "日本語"}
      </button>
    </div>
  );
}
