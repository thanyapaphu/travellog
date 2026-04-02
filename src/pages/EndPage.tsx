import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { submitTripAnswers } from '../lib/supabase'
import { useTrip } from '../trip/store'
import { FIGMA_ASSETS } from '../ui/FigmaAssets'
import { FigmaButton, FigmaButtonSecondary, FigmaCardWithTabs, FigmaScreen, FigmaStack } from '../ui/figmaPrimitives'

export function EndPage() {
  const navigate = useNavigate()
  const { state, actions } = useTrip()
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const submissionKey = useMemo(() => JSON.stringify(state), [state])

  useEffect(() => {
    let cancelled = false
    const submittedKey = localStorage.getItem('travel-log:last-submission-key')
    if (submittedKey === submissionKey) {
      setSaveState('saved')
      return
    }

    async function submit() {
      try {
        setSaveState('saving')
        await submitTripAnswers(state)
        if (!cancelled) {
          localStorage.setItem('travel-log:last-submission-key', submissionKey)
          setSaveState('saved')
        }
      } catch {
        if (!cancelled) setSaveState('error')
      }
    }

    void submit()

    return () => {
      cancelled = true
    }
  }, [state, submissionKey])

  function downloadAnswers() {
    const lines = [
      `Name: ${state.name || '-'}`,
      '',
      'Q2 - Tokyo',
      `Favorite place: ${state.q2.place || '-'}`,
      `How did you feel: ${state.q2.feel || '-'}`,
      `Would you go back again: ${state.q2.goBack || '-'}`,
      '',
      'Q3 - Karuizawa',
      `Favorite place: ${state.q3.place || '-'}`,
      `How did you feel: ${state.q3.feel || '-'}`,
      `Would you go back again: ${state.q3.goBack || '-'}`,
      '',
      'Q4 - Hakuba',
      `Favorite place: ${state.q4.place || '-'}`,
      `How did you feel: ${state.q4.feel || '-'}`,
      `Would you go back again: ${state.q4.goBack || '-'}`,
    ]

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `travel-log-answers-${Date.now()}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

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
        <FigmaButtonSecondary className="w-full" onClick={downloadAnswers}>
          Download my answers
        </FigmaButtonSecondary>
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
        <div className="text-[12px] font-bold text-[#d42d78]">
          {saveState === 'saving' && 'Saving your answers...'}
          {saveState === 'saved' && 'Answers recorded successfully.'}
          {saveState === 'error' && 'Could not record answers. Please try again.'}
        </div>
      </FigmaStack>
    </FigmaScreen>
  )
}

