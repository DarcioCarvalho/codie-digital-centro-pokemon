import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldSetComponent } from "./styles";

interface FieldSetProps extends DetailedHTMLProps<HTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement> { }

export function FieldSet({ children, ...rest }: FieldSetProps) {
  return <FieldSetComponent {...rest}> {children} </FieldSetComponent>
}