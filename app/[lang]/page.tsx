import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function IndexPage({ params: { lang } }:{ params: { lang: Locale }; }){
    // Any型を要修正
    const dictionary: { [key: string]: any } = await getDictionary(lang);
    return (
        <section className="w-[1024px] mx-auto mt-32 px-8 mb-8">
            <div>
                <p>Current locale: {lang}</p>
                <p>This text is rendered on the server:{dictionary["server-component"].welcome}</p>
            </div>
        </section>
    );
}