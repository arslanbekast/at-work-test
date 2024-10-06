import { SVGProps, memo } from 'react'
export const CloseIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" {...props}>
    <path
      fill="#595959"
      d="M18.743 10.494a.875.875 0 0 0-1.237-1.237L14 12.763l-3.506-3.506a.875.875 0 1 0-1.238 1.237L12.762 14l-3.506 3.506a.875.875 0 1 0 1.238 1.238L14 15.238l3.506 3.506a.875.875 0 1 0 1.237-1.238L15.237 14l3.506-3.506Z"
    />
  </svg>
))
