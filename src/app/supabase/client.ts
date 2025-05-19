import { createClient } from '@supabase/supabase-js'

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const ANNON_KEY = process.env.NEXT_PUBLIC_ANNON_KEY!

export const supabase = createClient(URL, ANNON_KEY)