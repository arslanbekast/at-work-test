import { SVGProps, memo } from 'react'
export const ArrowLeftIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      stroke="#161616"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.25 12H.75M6 17.25.75 12 6 6.75"
    />
  </svg>
))
