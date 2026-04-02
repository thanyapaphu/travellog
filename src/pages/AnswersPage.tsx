import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTrip } from '../trip/store'
import { Layout } from '../ui/Layout'

function mapQ2(place: string, goBack: string) {
  if (place === 'Yoroniku Ebisu' && goBack === 'yes') return 'answer2-yoroniku-yes'
  if (place === 'Yoroniku Ebisu' && goBack === 'no') return 'answer2-tokyo-no'
  if (place === 'Tokyo Tower' && goBack === 'yes') return 'answer2-tokyo-yes'
  if (place === 'Tokyo Tower' && goBack === 'no') return 'answer2-tokyo-no'
  return ''
}

function mapQ3(place: string, goBack: string) {
  if (place === 'Sanu 2nd Home' && goBack === 'yes') return 'answer3-sanu-yes'
  if (place === 'Sanu 2nd Home' && goBack === 'no') return 'answer3-sanu-no'
  if (place === 'Mikuriya' && goBack === 'yes') return 'answer3-mikuriya-yes'
  if (place === 'Mikuriya' && goBack === 'no') return 'answer3-mikuriya-no'
  return ''
}

function mapQ4(place: string, goBack: string) {
  if (place === 'Tsugaike' && goBack === 'yes') return 'answer4-tsugaike-yes'
  if (place === 'Tsugaike' && goBack === 'no') return 'answer4-tsugaike-no'
  if (place === 'Earthboat' && goBack === 'yes') return 'answer4-earthboat-yes'
  if (place === 'Earthboat' && goBack === 'no') return 'answer4-earthboat-no'
  return ''
}

function AnswerCard({
  label,
  answerKey,
  place,
  feel,
  goBack,
}: {
  label: string
  answerKey: string
  place: string
  feel: string
  goBack: string
}) {
  return (
    <div className="tl-card p-5">
      <div className="text-xs font-semibold tracking-wide text-black/50">{label}</div>
      <div className="mt-2 grid gap-2 text-sm text-black/70">
        <div>
          <span className="font-semibold text-black/80">Place:</span> {place || '—'}
        </div>
        <div>
          <span className="font-semibold text-black/80">Feel:</span> {feel || '—'}
        </div>
        <div>
          <span className="font-semibold text-black/80">Go back:</span>{' '}
          {goBack === 'yes' ? 'Yesss 100%' : goBack === 'no' ? 'Nope, I’m done' : '—'}
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4">
        <div className="text-xs font-semibold tracking-wide text-black/50">
          Screen to show
        </div>
        <div className="mt-1 text-lg font-black">{answerKey || '—'}</div>
        <div className="mt-1 text-sm text-black/50">
          (Replace this with the matching Figma illustration asset.)
        </div>
      </div>
    </div>
  )
}

export function AnswersPage() {
  const navigate = useNavigate()
  const { state } = useTrip()

  const answer2 = useMemo(
    () => mapQ2(state.q2.place, state.q2.goBack),
    [state.q2.place, state.q2.goBack],
  )
  const answer3 = useMemo(
    () => mapQ3(state.q3.place, state.q3.goBack),
    [state.q3.place, state.q3.goBack],
  )
  const answer4 = useMemo(
    () => mapQ4(state.q4.place, state.q4.goBack),
    [state.q4.place, state.q4.goBack],
  )

  return (
    <Layout>
      <div className="w-[350px] max-w-full text-center text-[40px] font-bold leading-none text-[#d42d78]">
        Your answers
      </div>
      <AnswerCard
        label="From question2 [2Tokyo-Yoroniku]"
        answerKey={answer2}
        place={state.q2.place}
        feel={state.q2.feel}
        goBack={state.q2.goBack}
      />

      <AnswerCard
        label="From question3 [3Karuizawa-Sanu]"
        answerKey={answer3}
        place={state.q3.place}
        feel={state.q3.feel}
        goBack={state.q3.goBack}
      />

      <AnswerCard
        label="From question4 [4Hakuba-Tsugaike]"
        answerKey={answer4}
        place={state.q4.place}
        feel={state.q4.feel}
        goBack={state.q4.goBack}
      />

      <div className="flex items-center justify-between px-1">
        <button className="tl-button-secondary" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="tl-button" onClick={() => navigate('/end')}>
          End page
        </button>
      </div>
    </Layout>
  )
}

