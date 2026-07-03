Masters Pick 3 Live — updated package

This build keeps the Masters-specific tournament setup and branding, but updates the app with the latest tested major-pool logic:
- READY / LIVE / BREAK / SUSPENDED / PLAYOFF / COMPLETE badge flow
- MC conversion after Round 2
- WD handling
- blank-pick protection
- covered-by / elimination logic
- snapshot arrows using current_ranks / previous_ranks
- no-store live fetches

Visual updates:
- upgraded Amen Corner / 12th-hole style background SVG
- old-school white Masters scoreboard style leaderboards
- larger, easier-to-read table and pool text

Before deploying, set Vercel env vars for the Masters:
SLASH_GOLF_TOURN_ID
SLASH_GOLF_YEAR
SLASH_GOLF_ORG_ID
SLASH_GOLF_API_KEY
SLASH_GOLF_API_HOST
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
ADMIN_SECRET
TOURNAMENT_STATE_ID
