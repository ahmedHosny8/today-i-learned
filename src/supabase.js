import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oqmrzfptvekggkydruyg.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xbXJ6ZnB0dmVrZ2dreWRydXlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIwNDEwMjYsImV4cCI6MTk4NzYxNzAyNn0.A0RRno266mfpfMsnwDdl68RIM8cKFC_drnhNY36x2FI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
