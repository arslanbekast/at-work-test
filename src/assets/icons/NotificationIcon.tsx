import { SVGProps, memo } from 'react'
export const NotificationIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      fill="#161616"
      d="M10.74 6.05a1.36 1.36 0 0 1 2.52 0 4.762 4.762 0 0 1 3.5 4.59v3.194l1.245 1.869a.68.68 0 0 1-.566 1.057h-3.083a2.38 2.38 0 0 1-4.712 0H6.561a.68.68 0 0 1-.566-1.057l1.245-1.869v-3.193a4.762 4.762 0 0 1 3.5-4.591Zm.017 10.71c.13.423.317.68.52.824.172.122.512.187.723.187.211 0 .576-.04.835-.222.327-.232.413-.59.484-.789h-2.562ZM12 6.853c-.902 0-2.064.429-2.701 1.066-.638.638-.996 1.82-.996 2.722v3.4a.68.68 0 0 1-.114.377l-.949 1.285h9.52l-.956-1.285a.681.681 0 0 1-.113-.378v-3.4c0-.901-.359-2.083-.996-2.72-.638-.638-1.793-1.067-2.695-1.067Z"
    />
  </svg>
))
