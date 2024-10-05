import { SVGProps, memo } from 'react'
export const FavoriteIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      stroke="#161616"
      strokeWidth={1.2}
      d="M11.543 7.855 12 8.39l.457-.536a3.233 3.233 0 0 1 2.423-1.127c1.64 0 2.92 1.28 2.92 2.92 0 1.012-.45 1.978-1.364 3.096-.922 1.127-2.251 2.333-3.911 3.839l-.527.479-.522-.473h-.001c-1.66-1.508-2.99-2.717-3.91-3.844C6.65 11.626 6.2 10.66 6.2 9.648c0-1.64 1.28-2.92 2.92-2.92.932 0 1.836.437 2.423 1.127Z"
    />
  </svg>
))
