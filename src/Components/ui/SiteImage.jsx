import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'

export default function SiteImage({ src, ...props }) {
  return <Image src={assetPath(src)} {...props} />
}
