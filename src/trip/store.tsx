import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react'
import { defaultTripState, type GoBackAnswer, type TripState } from './types'

type Action =
  | { type: 'reset' }
  | { type: 'setName'; name: string }
  | { type: 'setQ2Place'; place: TripState['q2']['place'] }
  | { type: 'setQ2Feel'; feel: string }
  | { type: 'setQ2GoBack'; goBack: GoBackAnswer }
  | { type: 'setQ3Place'; place: TripState['q3']['place'] }
  | { type: 'setQ3Feel'; feel: string }
  | { type: 'setQ3GoBack'; goBack: GoBackAnswer }
  | { type: 'setQ4Place'; place: TripState['q4']['place'] }
  | { type: 'setQ4Feel'; feel: string }
  | { type: 'setQ4GoBack'; goBack: GoBackAnswer }

const STORAGE_KEY = 'travel-log:v1'

function isTripState(value: unknown): value is TripState {
  if (!value || typeof value !== 'object') return false
  return 'name' in value && 'q2' in value && 'q3' in value && 'q4' in value
}

function loadInitialState(): TripState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultTripState
    const parsed: unknown = JSON.parse(raw)
    if (!isTripState(parsed)) return defaultTripState
    return { ...defaultTripState, ...parsed }
  } catch {
    return defaultTripState
  }
}

function reducer(state: TripState, action: Action): TripState {
  switch (action.type) {
    case 'reset':
      return defaultTripState
    case 'setName':
      return { ...state, name: action.name }
    case 'setQ2Place':
      return { ...state, q2: { ...state.q2, place: action.place } }
    case 'setQ2Feel':
      return { ...state, q2: { ...state.q2, feel: action.feel } }
    case 'setQ2GoBack':
      return { ...state, q2: { ...state.q2, goBack: action.goBack } }
    case 'setQ3Place':
      return { ...state, q3: { ...state.q3, place: action.place } }
    case 'setQ3Feel':
      return { ...state, q3: { ...state.q3, feel: action.feel } }
    case 'setQ3GoBack':
      return { ...state, q3: { ...state.q3, goBack: action.goBack } }
    case 'setQ4Place':
      return { ...state, q4: { ...state.q4, place: action.place } }
    case 'setQ4Feel':
      return { ...state, q4: { ...state.q4, feel: action.feel } }
    case 'setQ4GoBack':
      return { ...state, q4: { ...state.q4, goBack: action.goBack } }
    default:
      return state
  }
}

type TripStore = {
  state: TripState
  actions: {
    reset(): void
    setName(name: string): void
    setQ2Place(place: TripState['q2']['place']): void
    setQ2Feel(feel: string): void
    setQ2GoBack(goBack: GoBackAnswer): void
    setQ3Place(place: TripState['q3']['place']): void
    setQ3Feel(feel: string): void
    setQ3GoBack(goBack: GoBackAnswer): void
    setQ4Place(place: TripState['q4']['place']): void
    setQ4Feel(feel: string): void
    setQ4GoBack(goBack: GoBackAnswer): void
  }
}

const TripContext = createContext<TripStore | null>(null)

export function TripProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitialState)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // ignore storage failures (private mode, etc.)
    }
  }, [state])

  const store: TripStore = useMemo(
    () => ({
      state,
      actions: {
        reset: () => dispatch({ type: 'reset' }),
        setName: (name) => dispatch({ type: 'setName', name }),
        setQ2Place: (place) => dispatch({ type: 'setQ2Place', place }),
        setQ2Feel: (feel) => dispatch({ type: 'setQ2Feel', feel }),
        setQ2GoBack: (goBack) => dispatch({ type: 'setQ2GoBack', goBack }),
        setQ3Place: (place) => dispatch({ type: 'setQ3Place', place }),
        setQ3Feel: (feel) => dispatch({ type: 'setQ3Feel', feel }),
        setQ3GoBack: (goBack) => dispatch({ type: 'setQ3GoBack', goBack }),
        setQ4Place: (place) => dispatch({ type: 'setQ4Place', place }),
        setQ4Feel: (feel) => dispatch({ type: 'setQ4Feel', feel }),
        setQ4GoBack: (goBack) => dispatch({ type: 'setQ4GoBack', goBack }),
      },
    }),
    [state],
  )

  return <TripContext.Provider value={store}>{children}</TripContext.Provider>
}

export function useTrip() {
  const ctx = useContext(TripContext)
  if (!ctx) throw new Error('useTrip must be used within TripProvider')
  return ctx
}

