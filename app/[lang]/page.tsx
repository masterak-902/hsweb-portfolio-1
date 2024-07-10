import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

export default async function Home( { params: { lang } }:{ params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <section className="w-[1024px] mx-auto mt-32 px-8 mb-8">
      <div>
        <p>{dictionary["server-component"]?.a}</p>
        <p>{dictionary["server-component"]?.b}</p>
        <p>{dictionary["server-component"]?.c}</p>
        <p>{dictionary["server-component"]?.d}</p>
        <p>{dictionary["server-component"]?.e}</p>
        <p>{dictionary["server-component"]?.f}</p>
        <p>{dictionary["server-component"]?.g}</p>
        <p>{dictionary["server-component"]?.h}</p>
        <p>{dictionary["server-component"]?.i}</p>
        <p>{dictionary["server-component"]?.j}</p>
      </div>
    </section>
  );
}
