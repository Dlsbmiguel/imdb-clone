import Spinner from "@/components/Spinner";
import { FC } from "react";

interface loadingProps {}

const Loading: FC<loadingProps> = ({}) => {
  return (
    <div className="relative">
      <Spinner />
    </div>
  );
};

export default Loading;
