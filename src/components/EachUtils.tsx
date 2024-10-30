import { Children, ReactNode } from "react";
import LoadingCardWrapper from "@/components/Loading/LoadingCardWrapper";

type IProps<T> = {
  render: (item: T, index: number) => ReactNode;
  of: Array<T>;
  loading?: boolean;
};

const EachUtils = <T,>({ render, of, loading }: IProps<T>) => {
  if (loading) return <LoadingCardWrapper />;
  return Children.toArray(of.map((item, index) => render(item, index)));
};

export default EachUtils;
