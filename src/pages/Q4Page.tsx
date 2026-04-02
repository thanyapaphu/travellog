import { useNavigate } from 'react-router-dom'
import { useTrip } from '../trip/store'
import type { Q4Place } from '../trip/types'
import { FigmaButton } from '../ui/figmaPrimitives'
import { FigmaDropdown, FigmaFeelBox, FigmaYesNo } from '../ui/FigmaQuestionControls'
import { FigmaQuestionLayout } from '../ui/FigmaQuestionLayout'

const placeOptions: Array<{ label: string; value: Q4Place }> = [
  { label: 'Tsugaike Ski Resort', value: 'Tsugaike' },
  { label: 'Earthboat Hakuba', value: 'Earthboat' },
]

export function Q4Page() {
  const navigate = useNavigate()
  const { state, actions } = useTrip()
  const canNext =
    !!state.q4.place &&
    state.q4.feel.trim().length > 0 &&
    (state.q4.goBack === 'yes' || state.q4.goBack === 'no')

  return (
    <FigmaQuestionLayout titleFallback="Hakuba">
      <div className="flex w-full flex-col gap-[24px]">
        <div className="flex w-full flex-col gap-[8px]">
          <div className="text-[15.806px] font-bold text-[#d42d78]">
            Favorite place in “Hakuba”?
          </div>
          <FigmaDropdown<Q4Place>
            value={state.q4.place}
            options={placeOptions}
            onChange={(p) => actions.setQ4Place(p)}
          />
        </div>

        <div className="flex w-full flex-col gap-[8px]">
          <div className="text-[15.806px] font-bold text-[#d42d78]">How did you feel?</div>
          <FigmaFeelBox value={state.q4.feel} onChange={(v) => actions.setQ4Feel(v)} />
        </div>

        <div className="flex w-full flex-col gap-[8px]">
          <div className="text-[15.806px] font-bold text-[#d42d78]">
            Would you go back again?
          </div>
          <FigmaYesNo value={state.q4.goBack} onChange={(v) => actions.setQ4GoBack(v)} />
        </div>

        <FigmaButton
          className="w-full"
          disabled={!canNext}
          onClick={() => navigate('/answer2')}
        >
          Next
        </FigmaButton>
      </div>
    </FigmaQuestionLayout>
  )
}

