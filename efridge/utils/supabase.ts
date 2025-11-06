import 'expo-sqlite/localStorage/install';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = https://zuulaapphpehbnazoyjz.supabase.co;
const supabaseAnonKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1dWxhYXBwaHBlaGJuYXpveWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2Nzg1OTgsImV4cCI6MjA3NzI1NDU5OH0.lRNKq8-25UBzbWNdV0ZXGSdMIdI5s84Vu_F4NRwOFDA;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: localStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
