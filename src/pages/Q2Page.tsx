import { useNavigate } from 'react-router-dom'
import { useTrip } from '../trip/store'
import type { Q2Place } from '../trip/types'
import { FIGMA_ASSETS } from '../ui/FigmaAssets'
import { FigmaButton } from '../ui/figmaPrimitives'
import { FigmaDropdown, FigmaFeelBox, FigmaYesNo } from '../ui/FigmaQuestionControls'
import { FigmaQuestionLayout } from '../ui/FigmaQuestionLayout'

const placeOptions: Array<{ label: string; value: Q2Place }> = [
  { label: 'Yoroniku Ebisu', value: 'Yoroniku Ebisu' },
  { label: 'Tokyo Tower', value: 'Tokyo Tower' },
]

export function Q2Page() {
  const navigate = useNavigate()
  const { state, actions } = useTrip()
  const canNext =
    !!state.q2.place &&
    state.q2.feel.trim().length > 0 &&
    (state.q2.goBack === 'yes' || state.q2.goBack === 'no')

  return (
    <FigmaQuestionLayout titleImg={FIGMA_ASSETS.titles.tokyo} titleFallback="Tokyo">
      <div className="flex w-full flex-col gap-[24px]">
        <div className="flex w-full flex-col gap-[8px]">
          <div className="text-[15.806px] font-bold text-[#d42d78]">
            Favorite place in “Tokyo”?
          </div>
          <FigmaDropdown<Q2Place>
            value={state.q2.place}
            options={placeOptions}
            onChange={(p) => actions.setQ2Place(p)}
          />
        </div>

        <div className="flex w-full flex-col gap-[8px]">
          <div className="text-[15.806px] font-bold text-[#d42d78]">How did you feel?</div>
          <FigmaFeelBox value={state.q2.feel} onChange={(v) => actions.setQ2Feel(v)} />
        </div>

        <div className="flex w-full flex-col gap-[8px]">
          <div className="text-[15.806px] font-bold text-[#d42d78]">
            Would you go back again?
          </div>
          <FigmaYesNo value={state.q2.goBack} onChange={(v) => actions.setQ2GoBack(v)} />
        </div>

        <FigmaButton className="w-full" disabled={!canNext} onClick={() => navigate('/q3')}>
          Next
        </FigmaButton>
      </div>
    </FigmaQuestionLayout>
  )
}

