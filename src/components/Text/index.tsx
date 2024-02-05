import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { TextComponent } from "./styles";

interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children: ReactNode;
  type?: "default" | "error";
}

export function Text({ children, type = "default", ...rest }: TextProps) {
  return <TextComponent $type={type} {...rest}>{children}</TextComponent>
}