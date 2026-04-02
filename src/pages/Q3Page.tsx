import { useNavigate } from 'react-router-dom'
import { useTrip } from '../trip/store'
import type { Q3Place } from '../trip/types'
import { FigmaButton } from '../ui/figmaPrimitives'
import { FigmaDropdown, FigmaFeelBox, FigmaYesNo } from '../ui/FigmaQuestionControls'
import { FigmaQuestionLayout } from '../ui/FigmaQuestionLayout'

const placeOptions: Array<{ label: string; value: Q3Place }> = [
  { label: 'Sanu 2nd Home', value: 'Sanu 2nd Home' },
  { label: 'Mikuriya', value: 'Mikuriya' },
]

export function Q3Page() {
  const navigate = useNavigate()
  const { state, actions } = useTrip()
  const canNext =
    !!state.q3.place &&
    state.q3.feel.trim().length > 0 &&
    (state.q3.goBack === 'yes' || state.q3.goBack === 'no')

  return (
    <FigmaQuestionLayout titleFallback="Karuizawa">
      <div className="flex w-full flex-col gap-[24px]">
        <div className="flex w-full flex-col gap-[8px]">
          <div className="text-[15.806px] font-bold text-[#d42d78]">
            Favorite place in “Karuizawa”?
          </div>
          <FigmaDropdown<Q3Place>
            value={state.q3.place}
            options={placeOptions}
            onChange={(p) => actions.setQ3Place(p)}
          />
        </div>

        <div className="flex w-full flex-col gap-[8px]">
          <div className="text-[15.806px] font-bold text-[#d42d78]">How did you feel?</div>
          <FigmaFeelBox value={state.q3.feel} onChange={(v) => actions.setQ3Feel(v)} />
        </div>

        <div className="flex w-full flex-col gap-[8px]">
          <div className="text-[15.806px] font-bold text-[#d42d78]">
            Would you go back again?
          </div>
          <FigmaYesNo value={state.q3.goBack} onChange={(v) => actions.setQ3GoBack(v)} />
        </div>

        <FigmaButton className="w-full" disabled={!canNext} onClick={() => navigate('/q4')}>
          Next
        </FigmaButton>
      </div>
    </FigmaQuestionLayout>
  )
}

