import { LinkProps as NextLinkProps } from 'next/link';
import { LinkComponent } from "./styles";

interface LinkProps extends NextLinkProps {
  label: string;
  size?: "sm" | "md";
  color?: "white" | "black";
}

export function Link({ label, size = "md", color = "black", as, ...rest }: LinkProps) {
  return <LinkComponent $size={size} $textColor={color} {...rest}> {label} </LinkComponent>
}