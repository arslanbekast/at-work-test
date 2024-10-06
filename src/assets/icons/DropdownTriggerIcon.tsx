import { SVGProps, memo } from 'react'
export const DropdownTriggerIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={4}
    // height={16}
    viewBox="0 0 4 16"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M0 14c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2ZM0 2c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Zm0 6c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Z"
    />
  </svg>
))
