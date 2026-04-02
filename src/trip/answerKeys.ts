import type { GoBackAnswer, Q2Place, Q3Place, Q4Place } from './types'

export function answerKeyQ2(place: Q2Place | '', goBack: GoBackAnswer | '') {
  if (!place || !goBack) return ''
  if (place === 'Yoroniku Ebisu' && goBack === 'yes') return 'answer2-yoroniku-yes'
  if (place === 'Yoroniku Ebisu' && goBack === 'no') return 'answer2-tokyo-no'
  if (place === 'Tokyo Tower' && goBack === 'yes') return 'answer2-tokyo-yes'
  if (place === 'Tokyo Tower' && goBack === 'no') return 'answer2-tokyo-no'
  return ''
}

export function answerKeyQ3(place: Q3Place | '', goBack: GoBackAnswer | '') {
  if (!place || !goBack) return ''
  if (place === 'Sanu 2nd Home' && goBack === 'yes') return 'answer3-sanu-yes'
  if (place === 'Sanu 2nd Home' && goBack === 'no') return 'answer3-sanu-no'
  if (place === 'Mikuriya' && goBack === 'yes') return 'answer3-mikuriya-yes'
  if (place === 'Mikuriya' && goBack === 'no') return 'answer3-mikuriya-no'
  return ''
}

export function answerKeyQ4(place: Q4Place | '', goBack: GoBackAnswer | '') {
  if (!place || !goBack) return ''
  if (place === 'Tsugaike' && goBack === 'yes') return 'answer4-tsugaike-yes'
  if (place === 'Tsugaike' && goBack === 'no') return 'answer4-tsugaike-no'
  if (place === 'Earthboat' && goBack === 'yes') return 'answer4-earthboat-yes'
  if (place === 'Earthboat' && goBack === 'no') return 'answer4-earthboat-no'
  return ''
}

