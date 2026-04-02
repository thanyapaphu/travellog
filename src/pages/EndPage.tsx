import { useNavigate } from 'react-router-dom'
import { useTrip } from '../trip/store'
import { FIGMA_ASSETS } from '../ui/FigmaAssets'
import { FigmaButton, FigmaButtonSecondary, FigmaCardWithTabs, FigmaScreen, FigmaStack } from '../ui/figmaPrimitives'

export function EndPage() {
  const navigate = useNavigate()
  const { actions } = useTrip()

  return (
    <FigmaScreen>
      <FigmaStack>
        <FigmaCardWithTabs activeTab="Tokyo" allInactive>
          <div className="relative h-full">
            <div className="absolute left-[41px] top-[231px] h-[89.127px] w-[223.651px]">
              <img src={FIGMA_ASSETS.end.centerStamp} alt="" className="size-full" />
            </div>
            <div className="absolute left-1/2 top-[525.35px] -translate-x-1/2 text-[10.853px] font-bold text-[#d42d78]">
              Until Next Time ...
            </div>
          </div>
        </FigmaCardWithTabs>

        <div className="flex w-full items-center justify-center gap-[8px]">
          <FigmaButtonSecondary className="w-full" onClick={() => navigate(-1)}>
            Back
          </FigmaButtonSecondary>
          <FigmaButton
            className="w-full"
            onClick={() => {
              window.open('https://www.google.com/travel/flights', '_blank', 'noopener,noreferrer')
            }}
          >
            Book now!
          </FigmaButton>
        </div>
        <button
          type="button"
          className="text-[15.009px] font-bold text-[#d42d78] transition-all duration-200 ease-in-out hover:underline"
          onClick={() => {
            actions.reset()
            navigate('/')
          }}
        >
          Back to home page
        </button>
      </FigmaStack>
    </FigmaScreen>
  )
}

