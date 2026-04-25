const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_KEY = "YOUR_ANON_KEY";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Example: Load festival data
async function loadFestival() {
    const { data, error } = await supabase
        .from('festival')
        .select('*');

    console.log(data);
}