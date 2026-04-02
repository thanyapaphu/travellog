import { createClient } from '@supabase/supabase-js'
import type { TripState } from '../trip/types'

const supabaseUrl =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined) ??
  'https://mkozkqhjeltdvkwzrjql.supabase.co'
const supabaseAnonKey =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ??
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rb3prcWhqZWx0ZHZrd3pyanFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMzQ4MjIsImV4cCI6MjA5MDcxMDgyMn0.-EcxgTP7sVkVzv3FHu7cCj6r579SgHO8_uUYTAfTNiA'

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

const SESSION_KEY = 'travel-log:session-id'

export function getOrCreateSessionId() {
  const existing = localStorage.getItem(SESSION_KEY)
  if (existing) return existing
  const generated = crypto.randomUUID()
  localStorage.setItem(SESSION_KEY, generated)
  return generated
}

export async function submitTripAnswers(state: TripState) {
  if (!supabase) {
    throw new Error('Missing Supabase environment configuration')
  }

  const { error } = await supabase.from('trip_answers').insert({
    session_id: getOrCreateSessionId(),
    name: state.name || null,
    q2_place: state.q2.place || null,
    q2_feel: state.q2.feel || null,
    q2_go_back: state.q2.goBack || null,
    q3_place: state.q3.place || null,
    q3_feel: state.q3.feel || null,
    q3_go_back: state.q3.goBack || null,
    q4_place: state.q4.place || null,
    q4_feel: state.q4.feel || null,
    q4_go_back: state.q4.goBack || null,
    user_agent: navigator.userAgent,
  })

  if (error) throw error
}
