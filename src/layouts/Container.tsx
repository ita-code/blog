import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto mb-auto max-w-3xl px-4 sm:px-6 xl:max-w-3xl xl:px-0">{children}</div>
  )
}
