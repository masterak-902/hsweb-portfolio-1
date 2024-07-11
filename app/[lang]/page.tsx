import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

export default async function Home( { params: { lang } }:{ params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="w-7xl mx-auto mt-32 px-8 mb-8">
      <div>
        <h2 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">This is the main page.</h2>
        <p className="custom-text">{dictionary["server-component"]?.a}</p>
        <p className="custom-text">{dictionary["server-component"]?.b}</p>
        <p className="custom-text">{dictionary["server-component"]?.c}</p>
        <p className="custom-text">{dictionary["server-component"]?.d}</p>
        <p className="custom-text">{dictionary["server-component"]?.e}</p>
        <p className="custom-text">{dictionary["server-component"]?.f}</p>
        <p className="custom-text">{dictionary["server-component"]?.g}</p>
        <p className="custom-text">{dictionary["server-component"]?.h}</p>
        <p className="custom-text">{dictionary["server-component"]?.i}</p>
        <p className="custom-text">{dictionary["server-component"]?.j}</p>
      </div>
    </main>
  );
}
