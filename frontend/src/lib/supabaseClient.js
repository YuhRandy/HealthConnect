import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://reotwpaclkvlldhznusb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlb3R3cGFjbGt2bGxkaHpudXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MjI1ODIsImV4cCI6MjA1ODk5ODU4Mn0.KlwpGZCZC4Hh_qYZ_Jml9abCUJ-OxIIjlumsSMD1sLo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
