import { FormLandingPage } from "@/components/forms/form-landing-page";
import Image from "next/image";

export default function Home() {
  const arr = new Array(12).fill("");
  return (
    <main className="mx-auto w-full px-4 max-w-7xl py-24 flex flex-col place-items-center gap-4">
      <h1 className="text-4xl font-black text-primary">AI Logo Maker</h1>
      <h2 className="text-xl font-semibold text-foreground/60">
        Craft logo with AI powered tools
      </h2>
      <p className="text-base">
        Start creating a Logo for your business and ready to use on website,
        print, brand, company
      </p>
      <FormLandingPage />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-24">
        {arr.map((v, i) => (
          <Image
            key={i}
            width={512}
            height={512}
            src={`/images/${i}.png`}
            className="size-40 sm:size-60 xl:size-72 rounded-xl"
            alt={`${i}`}
          />
        ))}
      </div>
    </main>
  );
}
