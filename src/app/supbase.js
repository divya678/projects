// lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://aryzrvchgvkmsdwvmtwu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyeXpydmNoZ3ZrbXNkd3ZtdHd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwMzg2MDgsImV4cCI6MjA2NzYxNDYwOH0.0qF0K7whVTbT0mt8UNNtJCwZOTs0U67Cb7C8n4jdq_s";

export const supabase = createClient(supabaseUrl, supabaseKey);
