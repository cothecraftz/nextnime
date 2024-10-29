import { Children, ReactNode } from "react";
import LoadingSpinner from "./Loading/LoadingSpinner";

type IProps<T> = {
  render: (item: T, index: number) => ReactNode;
  of: Array<T>;
  loading?: boolean;
};

const EachUtils = <T,>({ render, of, loading }: IProps<T>) => {
  if (loading) return <LoadingSpinner />;
  return Children.toArray(of.map((item, index) => render(item, index)));
};

export default EachUtils;
