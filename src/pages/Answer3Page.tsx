import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { answerKeyQ3 } from '../trip/answerKeys'
import { useTrip } from '../trip/store'
import { IllustrationMikuriya, IllustrationSanu } from '../ui/AnswerIllustrations'
import { FigmaButton, FigmaButtonSecondary, FigmaCardWithTabs, FigmaScreen, FigmaStack } from '../ui/figmaPrimitives'

export function Answer3Page() {
  const navigate = useNavigate()
  const { state } = useTrip()

  const key = useMemo(
    () => answerKeyQ3(state.q3.place, state.q3.goBack),
    [state.q3.place, state.q3.goBack],
  )

  return (
    <FigmaScreen>
      <FigmaStack>
        <FigmaCardWithTabs activeTab="Karuizawa">
          <div className="relative h-full bg-white">
            <div className="absolute left-[17px] top-[24px] flex w-[272px] flex-col items-start gap-[11px]">
              <div className="text-[11.415px] font-bold text-black">
                Your favorite place in Karuizawa
              </div>
              {state.q3.place === 'Sanu 2nd Home' ? (
                <IllustrationSanu />
              ) : (
                <IllustrationMikuriya />
              )}
              <div className="h-[167px] w-full text-[11.415px] font-bold text-black">
                <div>Note :</div>
                <div className="mt-2 whitespace-pre-wrap text-[11.415px] font-bold text-black">
                  {state.q3.feel}
                </div>
              </div>
              <div className="w-full whitespace-pre-wrap text-[11.415px] font-bold text-black">
                Would you go back again?
                {'\n\n'}
                {state.q3.goBack === 'yes'
                  ? 'Yessss, Take me back!!'
                  : state.q3.goBack === 'no'
                    ? "Nah, I’m done. No more."
                    : ''}
              </div>
            </div>
          </div>
        </FigmaCardWithTabs>

        <div className="flex w-full items-center justify-center gap-[8px]">
          <FigmaButtonSecondary className="w-full" onClick={() => navigate(-1)}>
            Back
          </FigmaButtonSecondary>
          <FigmaButton className="w-full" onClick={() => navigate('/answer4')}>
            Next
          </FigmaButton>
        </div>

        <div className="sr-only">{key}</div>
      </FigmaStack>
    </FigmaScreen>
  )
}

