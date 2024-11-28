import { SVGProps } from "react";

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="nome" d="M0 0h24v24H0z"></path>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  );
};
