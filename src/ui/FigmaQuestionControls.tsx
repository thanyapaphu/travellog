import { useEffect, useRef, useState } from 'react'
import type { GoBackAnswer } from '../trip/types'
import { FIGMA_ASSETS } from './FigmaAssets'

export function FigmaDropdown<T extends string>({
  value,
  options,
  onChange,
}: {
  value: T | ''
  options: Array<{ value: T; label: string }>
  onChange: (v: T) => void
}) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const selected = options.find((opt) => opt.value === value)
  const visibleLabel = selected?.label ?? 'Choose...'
  const menuOptions = options.filter((opt) => opt.value !== value)

  useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [])

  return (
    <div ref={rootRef} className="relative w-full">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        className={[
          'flex w-full items-center justify-between bg-white px-[16px] py-[10px] text-[16px] font-bold text-black transition-colors duration-200 ease-in-out hover:bg-[#FFF4F5]',
          open ? 'rounded-tl-[8px] rounded-tr-[8px]' : 'rounded-[8px]',
        ].join(' ')}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="truncate text-left">{visibleLabel}</span>
        <img
          src={FIGMA_ASSETS.icons.downArrow}
          alt=""
          className={[
            'size-[16px] shrink-0 transition-transform duration-300 ease-in-out',
            open ? 'scale-y-100' : '-scale-y-100',
          ].join(' ')}
        />
      </button>

      {menuOptions.length > 0 && (
        <div
          role="listbox"
          className={[
            'overflow-hidden rounded-bl-[8px] rounded-br-[8px] bg-white transition-all duration-300 ease-in-out',
            open
              ? 'max-h-[240px] translate-y-0 opacity-100'
              : 'pointer-events-none max-h-0 -translate-y-1 opacity-0',
          ].join(' ')}
        >
          {menuOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className="flex w-full items-center bg-white px-[16px] py-[10px] text-left text-[16px] font-bold text-black transition-colors duration-200 ease-in-out hover:bg-[#FFF4F5]"
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function FigmaFeelBox({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="h-[246px] w-full rounded-[8px] bg-white">
      <textarea
        className="h-full w-full resize-none bg-transparent px-[16px] py-[10px] text-[16px] font-bold text-black outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export function FigmaYesNo({
  value,
  onChange,
}: {
  value: GoBackAnswer | ''
  onChange: (v: GoBackAnswer) => void
}) {
  const yesChecked = value === 'yes'
  const noChecked = value === 'no'
  return (
    <div className="flex w-full items-center gap-[8px]">
      <button
        type="button"
        className="flex h-[44px] w-[171px] items-center gap-[8px] py-[10px] transition-all duration-200 ease-in-out hover:opacity-90 active:scale-[0.99]"
        onClick={() => onChange('yes')}
      >
        <span className="inline-flex size-[24px] items-center justify-center" aria-hidden="true">
          <span
            className={[
              'inline-block size-[20px] border-2 border-[#d42d78]',
              yesChecked ? 'bg-[#d42d78]' : 'bg-transparent',
            ].join(' ')}
          />
        </span>
        <div className="text-[15.009px] font-bold text-[#d42d78]">Yesss 100%</div>
      </button>
      <button
        type="button"
        className="flex h-[44px] w-[171px] items-center gap-[8px] py-[10px] transition-all duration-200 ease-in-out hover:opacity-90 active:scale-[0.99]"
        onClick={() => onChange('no')}
      >
        <span className="inline-flex size-[24px] items-center justify-center" aria-hidden="true">
          <span
            className={[
              'inline-block size-[20px] border-2 border-[#d42d78]',
              noChecked ? 'bg-[#d42d78]' : 'bg-transparent',
            ].join(' ')}
          />
        </span>
        <div className="text-[15.009px] font-bold text-[#d42d78]">Nope, I’m done</div>
      </button>
    </div>
  )
}

