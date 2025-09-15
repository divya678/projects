// lib/api/home.ts
import { supabase } from './supbase';

export const fetchHomeDetails = async () => {
  const { data, error } = await supabase
    .from('Home')
    .select('*');

  if (error) {
    console.error('Error fetching Home data:', error.message);
    return null;
  }
console.log('Fetched Home data:', data);
  return data;
};
