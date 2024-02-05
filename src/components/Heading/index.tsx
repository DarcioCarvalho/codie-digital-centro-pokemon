import { ReactNode } from "react";
import { HeadingComponent } from "./styles";

interface HeadingProps {
  children: ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return <HeadingComponent>{children}</HeadingComponent>;
}