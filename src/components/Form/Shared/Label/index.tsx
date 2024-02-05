import { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import { LabelComponent } from "./styles";

interface LabelProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> { }

export function Label({ children, ...rest }: LabelProps) {
  return <LabelComponent {...rest}> {children} </LabelComponent>
}