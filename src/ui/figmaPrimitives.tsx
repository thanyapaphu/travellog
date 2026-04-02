import type { ReactNode } from 'react'

export function FigmaScreen({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100svh] bg-[#fce1e2]">
      <div className="mx-auto flex min-h-[100svh] w-full max-w-[402px] items-center justify-center px-4">
        {children}
      </div>
    </div>
  )
}

export function FigmaStack({
  children,
  gap = 32,
}: {
  children: ReactNode
  gap?: number
}) {
  return (
    <div className="flex w-[335.713px] flex-col items-center" style={{ gap }}>
      {children}
    </div>
  )
}

export function FigmaCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full items-start">
      <div className="h-[551px] w-[305.184px] overflow-hidden rounded-bl-[20.012px] rounded-br-[20.012px] rounded-tl-[20.012px] bg-[#fff7f7] shadow-[0px_5.003px_14.259px_0px_rgba(0,0,0,0.15)]">
        {children}
      </div>
      <div className="flex w-[30.529px] flex-col">
        <RightTab active label="Tokyo" />
        <RightTab label="Hakuba" />
        <RightTab label="Karuizawa" />
      </div>
    </div>
  )
}

export function FigmaCardWithTabs({
  activeTab,
  allInactive = false,
  children,
}: {
  activeTab: 'Tokyo' | 'Hakuba' | 'Karuizawa'
  allInactive?: boolean
  children: ReactNode
}) {
  return (
    <div className="flex w-full items-start">
      <div className="h-[551px] w-[305.184px] overflow-hidden rounded-bl-[20.012px] rounded-br-[20.012px] rounded-tl-[20.012px] bg-[#fff7f7] shadow-[0px_5.003px_14.259px_0px_rgba(0,0,0,0.15)]">
        {children}
      </div>
      <div className="flex w-[30.529px] flex-col">
        <RightTab active={!allInactive && activeTab === 'Tokyo'} label="Tokyo" />
        <RightTab active={!allInactive && activeTab === 'Hakuba'} label="Hakuba" />
        <RightTab active={!allInactive && activeTab === 'Karuizawa'} label="Karuizawa" />
      </div>
    </div>
  )
}

export function RightTab({
  label,
  active = false,
}: {
  label: string
  active?: boolean
}) {
  return (
    <div className="flex h-[100.06px] w-full items-center justify-center" style={{ containerType: 'size' }}>
      <div className="h-[100cqw] flex-none rotate-90">
        <div
          className={[
            'relative flex h-full w-[100.06px] items-center justify-center rounded-tl-[10.006px] rounded-tr-[10.006px] p-[6.509px]',
            'bg-[#fff7f7]',
          ].join(' ')}
        >
          <div
            className={[
              'text-[15.009px] font-bold',
              active ? 'text-[#d42d78]' : 'text-[rgba(212,45,120,0.2)]',
            ].join(' ')}
          >
            {label}
          </div>
          {!active && (
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_2.502px_0px_4.503px_0px_rgba(0,0,0,0.08)]" />
          )}
        </div>
      </div>
    </div>
  )
}

export function FigmaButton({
  children,
  className = '',
  onClick,
  disabled,
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        'flex h-[44px] items-center justify-center rounded-[999px] bg-[#d42d78] px-[16px] py-[10px] transition-all duration-[600ms] ease-out',
        'text-[15.009px] font-bold text-white',
        'hover:bg-black active:scale-[0.99] disabled:opacity-50',
        className,
      ].join(' ')}
    >
      {children}
    </button>
  )
}

export function FigmaButtonSecondary({
  children,
  className = '',
  onClick,
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex h-[44px] items-center justify-center rounded-[999px] bg-[rgba(212,45,120,0.2)] px-[16px] py-[10px] transition-all duration-[600ms] ease-out',
        'text-[15.009px] font-bold text-[#d42d78]',
        'hover:bg-[#fcb6d6] active:scale-[0.99]',
        className,
      ].join(' ')}
    >
      {children}
    </button>
  )
}

