import { ReactNode } from "react";
import { SubHeadingComponent } from "./styles";

interface SubHeadingProps {
  children: ReactNode;
}

export function SubHeading({ children }: SubHeadingProps) {
  return <SubHeadingComponent> {children} </SubHeadingComponent>;
}