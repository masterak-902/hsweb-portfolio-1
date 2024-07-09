import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "@/components/Locale-Switcher";

export default async function Home( { params: { lang } }:{ params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <section className="w-[1024px] mx-auto mt-32 px-8 mb-8">
    <div>
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
      <p>Welcome Message: {dictionary["server-component"]?.a}</p>
      <p>Text: {dictionary["server-component"]?.b}</p>
      <p>language: {dictionary["server-component"]?.c}</p>
      <p>Rust language Document page: {dictionary["server-component"]?.d}</p>
    </div>
  </section>
  );
}
