import { useNavigate } from 'react-router-dom'
import { FIGMA_ASSETS } from '../ui/FigmaAssets'
import { FigmaButton, FigmaCardWithTabs, FigmaScreen, FigmaStack } from '../ui/figmaPrimitives'

export function HomePage() {
  const navigate = useNavigate()

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
          </div>
        </FigmaCardWithTabs>

        <FigmaButton
          className="w-fit gap-0 px-[32px]"
          onClick={() => navigate('/name')}
        >
          Tap into this trip!
        </FigmaButton>
      </FigmaStack>
    </FigmaScreen>
  )
}

