import type { ReactNode } from 'react'

export function Layout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-[100svh] px-4">
      <div className="mx-auto flex w-full max-w-[402px] flex-col items-center justify-center gap-8 py-10">
        {children}
      </div>
    </div>
  )
}

