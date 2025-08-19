import { Loader2 } from "lucide-react";

type LoadingProps = {
  isLoading: boolean;
};

export default function Loading(props: LoadingProps) {
  if (!props.isLoading) return null;
  return (
    <div className="w-screen h-[100dvh] bg-white fixed top-0 left-0 flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  );
}
