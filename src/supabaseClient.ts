import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pcefsxxiayucafzjwjdn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjZWZzeHhpYXl1Y2Fmemp3amRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMDk1OTYsImV4cCI6MjA2MDU4NTU5Nn0.F79hgZV_gqrCh--nh6WU1h6m8zEIUkEu-AkfMtO12Oo";

export const supabase = createClient(supabaseUrl, supabaseKey);
