Masters Pick 3 Live app

Suggested Vercel environment variables:
ADMIN_SECRET=masters-private-save-key
TOURNAMENT_STATE_ID=2026-masters
SLASH_GOLF_ORG_ID=1
SLASH_GOLF_YEAR=2026
SLASH_GOLF_TOURN_ID=014
SLASH_GOLF_API_HOST=live-golf-data.p.rapidapi.com
SLASH_GOLF_API_KEY=your RapidAPI key
SUPABASE_URL=your Supabase URL
SUPABASE_SERVICE_ROLE_KEY=your Supabase service role key

Snapshot URL:
https://your-site.vercel.app/api/admin/save-round-snapshot?secret=masters-private-save-key

Note: The default Masters RapidAPI tournId has been set to 014. If RapidAPI returns no leaderboard, verify the Masters tournId in RapidAPI and update SLASH_GOLF_TOURN_ID in Vercel.
