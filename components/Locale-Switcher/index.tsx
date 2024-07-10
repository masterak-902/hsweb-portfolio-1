"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return(
    <form>
    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option ><li><Link href={redirectedPathName("ja")}>Japanese</Link></li></option>
      <option ><Link href={redirectedPathName("en")}>English</Link></option>
    </select>
    </form>
  );

  // return (
  //   <div>
  //     
  //     <ul>
  //       {i18n.locales.map((locale) => {
  //         return (
  //           <li key={locale}>
  //             <Link href={redirectedPathName(locale)}>{locale}</Link>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
}