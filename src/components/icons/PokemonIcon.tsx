import { SVGAttributes } from "react";

export function PokemonIcon({ ...rest }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="34"
      fill="none"
      viewBox="0 0 37 34"
      {...rest}
    >
      <circle cx="19" cy="17" r="17" fill="#fff"></circle>
      <path stroke="#E40F0F" strokeWidth="2" d="M0 17L37 17"></path>
      <circle cx="19.5" cy="17.5" r="6.5" fill="#E40F0F"></circle>
      <circle cx="19.5" cy="17.5" r="4.5" fill="#fff"></circle>
    </svg>
  );
}