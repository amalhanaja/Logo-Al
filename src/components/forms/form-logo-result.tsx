import { useContext, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Download, FileX2, LayoutDashboard, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { FormLogoContext } from "./context/form-logo-context";

type State = {
  isLoading: boolean;
  isError: boolean;
  imgSrc: string | null;
};

export const LoadingState = () => {
  return (
    <div className="flex flex-col place-items-center gap-6 py-16">
      <Skeleton className="size-60 sm:size-96 rounded-lg" />
      <p className="font-semibold text-xl">Generating your logo...</p>
    </div>
  );
};

export const ErrorState = ({ onRetry }: { onRetry: () => void }) => {
  return (
    <div className="flex flex-col place-items-center gap-6 py-16">
      <FileX2 className="size-32 rounded-lg" />
      <p className="font-semibold text-xl">Failed generating your logo</p>
      <Button className="font-semibold" onClick={onRetry} size="lg">
        <RotateCcw />
        RETRY
      </Button>
    </div>
  );
};

export const SuccessState = ({ imgSrc }: { imgSrc: string }) => {
  const { values } = useContext(FormLogoContext);
  return (
    <div className="flex flex-col place-items-center gap-6 py-16">
      <h2 className="font-semibold text-xl">
        Here is logo for &quot;{values.name}&quot;
      </h2>
      <Image
        src={imgSrc}
        alt={values.name}
        width={0}
        height={0}
        className="size-60 sm:size-96 rounded-lg"
      />
      <div className="flex flex-col gap-4">
        <Button className="font-semibold" size="lg" asChild>
          <a download={`${values.name}.png`} href={imgSrc}>
            <Download />
            Download
          </a>
        </Button>
        <Button className="font-semibold" variant="outline" size="lg">
          <LayoutDashboard />
          Dashboard
        </Button>
      </div>
    </div>
  );
};

export const FormLogoResult = () => {
  const [state, setState] = useState<State>({
    isLoading: true,
    isError: false,
    imgSrc: null,
  });
  return (
    <Card>
      <CardContent>
        {state.isLoading && <LoadingState />}
        {state.isError && <ErrorState onRetry={() => {}} />}
        {state.imgSrc && <SuccessState imgSrc={state.imgSrc} />}
      </CardContent>
    </Card>
  );
};
