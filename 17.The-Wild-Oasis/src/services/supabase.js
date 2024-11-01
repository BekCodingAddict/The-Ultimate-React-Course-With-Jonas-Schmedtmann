import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jvznlrunrbwguhnanfpn.supabase.co";
const supabaseKey = "Your Supabase Key";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
