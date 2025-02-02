"use server";

import { UsersImagesSelect } from "@/db/schema";
import { getMyLogo } from "@/services/get-my-logo";
import { Download, ImagePlus } from "lucide-react";
import Image from "next/image";
import { FormLandingPage } from "./forms/form-landing-page";
import { Button } from "./ui/button";

const LogoItem = ({ logo }: { logo: UsersImagesSelect }) => {
  return (
    <div className="flex flex-col place-items-center gap-2">
      <Image
        src={logo.image}
        width={0}
        height={0}
        alt={logo.name}
        className="size-56 rounded-lg"
      />
      <Button asChild>
        <a href={logo.image} download={`${logo.name}.png`}>
          <Download /> Download
        </a>
      </Button>
      <h3 className="font-semibold text-lg mt-4">{logo.name}</h3>
      <p>{logo.description}</p>
    </div>
  );
};

const EmptyState = () => {
  return (
    <div className="flex flex-col place-items-center mx-auto gap-6 py-24">
      <h2 className="font-bold text-3xl">
        You don&apos;t have any generated logo
      </h2>
      <ImagePlus className="size-40" />
      <div className="space-y-2">
        <label>Generate a new logo</label>
        <FormLandingPage />
      </div>
    </div>
  );
};

export const LogoList = async () => {
  const logos = await getMyLogo();
  return (
    <>
      {logos.length !== 0 && (
        <>
          <h2 className="font-bold text-3xl">Your Recent Logo</h2>
          <div className="grid grid-cols-4 gap-4 mt-8">
            {logos.map((logo) => (
              <LogoItem logo={logo} key={logo.id} />
            ))}
          </div>
        </>
      )}
      {logos.length === 0 && <EmptyState />}
    </>
  );
};
