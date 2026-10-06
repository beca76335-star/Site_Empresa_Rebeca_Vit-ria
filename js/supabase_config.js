// Configurações do Supabase
// Oriente os alunos a preencherem com os dados do próprio projeto no Supabase
const SUPABASE_URL = "https://wmhhoddevtehpdgznhkh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtaGhvZGRldnRlaHBkZ3puaGtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyMDQ1MTIsImV4cCI6MjEwNjc4MDUxMn0.EEEZDCWhe-wwDeIyhxQrqHlvkR6LBIhpHwzvfvsoh2c";

// Inicializa o cliente Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);