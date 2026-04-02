export type GoBackAnswer = 'yes' | 'no'

export type QuestionId = 'q2' | 'q3' | 'q4'

export type Q2Place = 'Yoroniku Ebisu' | 'Tokyo Tower'
export type Q3Place = 'Sanu 2nd Home' | 'Mikuriya'
export type Q4Place = 'Tsugaike' | 'Earthboat'

export type QuestionState<TPlace extends string> = {
  place: TPlace | ''
  feel: string
  goBack: GoBackAnswer | ''
}

export type TripState = {
  name: string
  q2: QuestionState<Q2Place>
  q3: QuestionState<Q3Place>
  q4: QuestionState<Q4Place>
}

export const defaultTripState: TripState = {
  name: '',
  q2: { place: '', feel: '', goBack: '' },
  q3: { place: '', feel: '', goBack: '' },
  q4: { place: '', feel: '', goBack: '' },
}

