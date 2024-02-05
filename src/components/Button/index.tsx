import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { ButtonComponent } from "./styles";
import { Spinner } from "../Spinner";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
  isSubmitting?: boolean;
}
export function Button({ label, isSubmitting = false, ...rest }: ButtonProps) {
  return (
    <ButtonComponent
      disabled={isSubmitting}
      {...rest}
    >
      {isSubmitting && <Spinner size="xs" color="#FFFFFF" />}
      {label}
    </ButtonComponent>
  );
}