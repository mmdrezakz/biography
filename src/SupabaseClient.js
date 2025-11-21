// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bctltptsbaidokdzyrum.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjdGx0cHRzYmFpZG9rZHp5cnVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2MzE4MTUsImV4cCI6MjA3OTIwNzgxNX0.yigmkkIvGfs2_tHZh86f2J7plUnXCNa3_1k5hc0g64E';

export const supabase = createClient(supabaseUrl, supabaseKey);
