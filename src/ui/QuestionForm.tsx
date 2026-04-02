type Option<T extends string> = { label: string; value: T }

const arrowImg =
  'https://www.figma.com/api/mcp/asset/1cbb21ff-d944-4586-a817-1f2e9af2d37a'

function CheckboxIcon({ checked }: { checked: boolean }) {
  return (
    <span className="tl-checkbox-icon" aria-hidden="true">
      <span
        className={[
          'inline-flex size-6 items-center justify-center',
          checked ? 'text-[#d42d78]' : 'text-[#d42d78]',
        ].join(' ')}
      >
        <span
          className={[
            'inline-block size-5 border-2 border-[#d42d78]',
            checked ? 'bg-[#d42d78]' : 'bg-transparent',
          ].join(' ')}
        />
      </span>
    </span>
  )
}

export function QuestionForm<TPlace extends string>({
  bigTitle,
  placeLabel,
  placeValue,
  placeOptions,
  onPlaceChange,
  feelValue,
  onFeelChange,
  goBackValue,
  onGoBackChange,
  onNext,
}: {
  bigTitle: string
  placeLabel: string
  placeValue: TPlace | ''
  placeOptions: Array<Option<TPlace>>
  onPlaceChange: (place: TPlace) => void
  feelValue: string
  onFeelChange: (feel: string) => void
  goBackValue: 'yes' | 'no' | ''
  onGoBackChange: (goBack: 'yes' | 'no') => void
  onNext: () => void
}) {
  const canNext =
    !!placeValue &&
    feelValue.trim().length > 0 &&
    (goBackValue === 'yes' || goBackValue === 'no')

  return (
    <div className="w-[350px] max-w-full">
      <div className="text-center text-[64px] font-bold leading-none text-[#d42d78]">
        {bigTitle}
      </div>

      <div className="mt-8">
        <div className="tl-label">{placeLabel}</div>
        <div className="relative mt-2">
          <select
            aria-label={placeLabel}
            className="tl-input appearance-none pr-10"
            value={placeValue}
            onChange={(e) => onPlaceChange(e.target.value as TPlace)}
          >
            <option value="" disabled>
              Choose…
            </option>
            {placeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <img
            src={arrowImg}
            alt=""
            className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2"
          />
        </div>
      </div>

      <div className="mt-5">
        <div className="tl-label">How did you feel?</div>
        <textarea
          className="tl-textarea mt-2 h-[246px]"
          value={feelValue}
          placeholder=""
          onChange={(e) => onFeelChange(e.target.value)}
        />
      </div>

      <div className="mt-5">
        <div className="tl-label">Would you go back again?</div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <button
            type="button"
            className="tl-checkbox-btn"
            onClick={() => onGoBackChange('yes')}
          >
            <CheckboxIcon checked={goBackValue === 'yes'} />
            <span className="text-[15px] font-bold text-[#d42d78]">Yesss 100%</span>
          </button>
          <button
            type="button"
            className="tl-checkbox-btn"
            onClick={() => onGoBackChange('no')}
          >
            <CheckboxIcon checked={goBackValue === 'no'} />
            <span className="text-[15px] font-bold text-[#d42d78]">Nope, I’m done</span>
          </button>
        </div>
      </div>

      <button
        className="tl-button mt-7 w-full"
        disabled={!canNext}
        type="button"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  )
}

