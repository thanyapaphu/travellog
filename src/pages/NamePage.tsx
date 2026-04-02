import { useNavigate } from 'react-router-dom'
import { useTrip } from '../trip/store'
import { FIGMA_ASSETS } from '../ui/FigmaAssets'
import { FigmaButton, FigmaCardWithTabs, FigmaScreen, FigmaStack } from '../ui/figmaPrimitives'

export function NamePage() {
  const navigate = useNavigate()
  const { state, actions } = useTrip()

  const canNext = state.name.trim().length > 0

  return (
    <FigmaScreen>
      <FigmaStack>
        <FigmaCardWithTabs activeTab="Tokyo" allInactive>
          <div className="relative h-full">
            <div className="absolute left-1/2 top-[25px] h-[355px] w-[255px] -translate-x-1/2 overflow-hidden bg-[#d42d78]">
              <img
                src={FIGMA_ASSETS.home.cover}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <img
              src={FIGMA_ASSETS.home.title}
              alt=""
              className="absolute left-[41px] top-[403px] h-[89.127px] w-[223.651px] object-contain"
            />
            <div className="absolute left-[25px] top-[505px] h-px w-[255px] bg-[#d42d78]" />
            <div className="absolute left-[25px] top-[515px] text-[15.009px] font-bold text-[#d42d78]">
              Name : {state.name}
            </div>
          </div>
        </FigmaCardWithTabs>

        <div className="flex w-[335.713px] flex-col items-center gap-[24px]">
          <div className="flex w-full flex-col items-center gap-[8px]">
            <div className="w-full text-center text-[15.806px] font-bold text-[#d42d78]">
              Your Name👇🏼
            </div>
            <div className="w-full rounded-[8px] bg-white px-[16px] py-[10px] transition-all duration-200 ease-in-out focus-within:shadow-[0_0_0_2px_rgba(212,45,120,0.25)]">
              <input
                className="w-full bg-transparent text-[16px] font-bold text-black outline-none transition-all duration-200 ease-in-out"
                value={state.name}
                onChange={(e) => actions.setName(e.target.value)}
                autoComplete="given-name"
              />
            </div>
          </div>
          <FigmaButton
            className="w-full"
            disabled={!canNext}
            onClick={() => navigate('/q2')}
          >
            Next
          </FigmaButton>
        </div>
      </FigmaStack>
    </FigmaScreen>
  )
}

