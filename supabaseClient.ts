
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vnafhagtuhtlvwghvynz.supabase.co';
const supabaseKey = 'sb_publishable_ncC8g_b1fGdnQbqPpB1low__LiplNFw';

// Создаем клиент с настройками по умолчанию
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});
