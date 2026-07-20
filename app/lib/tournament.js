// Central tournament setup.
// To trial another event, change this file plus your Vercel env vars:
// SLASH_GOLF_TOURN_ID, SLASH_GOLF_YEAR, TOURNAMENT_STATE_ID.

export const tournamentConfig = {
  majorLabel: '91ST MASTERS TOURNAMENT',
  title: 'MASTERS PICK 3 LIVE',
  venue: 'Augusta National Golf Club',
  location: 'Augusta, Georgia',
  dates: 'April 8–11, 2027',
  prizePool: '$1,800',
  tournamentTimezone: 'America/New_York',
  jackpotRule: 'To win, your picks must include the Masters Champion. If no punter selects them, the prize pool jackpots.',
  heroImage: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=2400&q=85'
};
 
export const poolEntries = [
  {
    player: "Barty",
    picks: ["Bryson DeChambeau", "Tommy Fleetwood", "Cameron Young"]
  },
  {
    player: "Enright",
    picks: ["Bryson DeChambeau", "Scottie Scheffler", "Jon Rahm"]
  },
  {
    player: "Roche SES",
    picks: ["Scottie Scheffler", "Bryson DeChambeau", "Rory McIlroy"]
  },
  {
    player: "Kitch",
    picks: ["Scottie Scheffler", "Xander Schauffele", "Justin Rose"]
  },
  {
    player: "Brom",
    picks: ["Jon Rahm", "Tommy Fleetwood", "Min Woo Lee"]
  },
  {
    player: "Shaw",
    picks: ["Bryson DeChambeau", "Tommy Fleetwood", "Matt Fitzpatrick"]
  },
  {
    player: "Brian Irish",
    picks: ["Matt Fitzpatrick", "Justin Rose", "Ludvig Åberg"]
  },
  {
    player: "Jonesy",
    picks: ["Cameron Young", "Rory McIlroy", "Justin Thomas"]
  },
  {
    player: "Haycock Snr",
    picks: ["Corey Conners", "Ludvig Åberg", "Shane Lowry"]
  },
  {
    player: "Mal J",
    picks: ["Bryson DeChambeau", "Matt Fitzpatrick", "Akshay Bhatia"]
  },
  {
    player: "Doc Campbell",
    picks: ["Scottie Scheffler", "Patrick Reed", "Bryson DeChambeau"]
  },
  {
    player: "T Coleman",
    picks: ["Scottie Scheffler", "Xander Schauffele", "Ludvig Åberg"]
  },
  {
    player: "A Rose",
    picks: ["Bryson DeChambeau", "Xander Schauffele", "Cameron Young"]
  },
  {
    player: "D Haycock",
    picks: ["Justin Rose", "Patrick Reed", "Jacob Bridgeman"]
  },
  {
    player: "P Langley",
    picks: ["Rory McIlroy", "Bryson DeChambeau", "Cameron Young"]
  },
  {
    player: "T Wallace",
    picks: ["Matt Fitzpatrick", "Tommy Fleetwood", "Ludvig Åberg"]
  },
  {
    player: "K Ferg",
    picks: ["Patrick Reed", "J.J. Spaun", "Ludvig Åberg"]
  },
  {
    player: "JB",
    picks: ["Scottie Scheffler", "Jon Rahm", "Tommy Fleetwood"]
  },
  {
    player: "D McCarthy",
    picks: ["Tommy Fleetwood", "Xander Schauffele", "Jacob Bridgeman"]
  },
  {
    player: "Nath Ferg",
    picks: ["Cameron Young", "Matt Fitzpatrick", "Chris Gotterup"]
  },
  {
    player: "Muzza T",
    picks: ["Ryan Fox", "Tyrrell Hatton", "Rory McIlroy"]
  },
  {
    player: "D Donnelly",
    picks: ["Bryson DeChambeau", "Patrick Reed", "Si Woo Kim"]
  },
  {
    player: "Hancock",
    picks: ["Shane Lowry", "Tommy Fleetwood", "Ludvig Åberg"]
  },
  {
    player: "B Ashford",
    picks: ["Bryson DeChambeau", "Ludvig Åberg", "Justin Rose"]
  },
  {
    player: "Bradley C",
    picks: ["Patrick Reed", "Bryson DeChambeau", "Matt Fitzpatrick"]
  },
  {
    player: "Sloanie",
    picks: ["Hideki Matsuyama", "Ludvig Åberg", "Rory McIlroy"]
  },
  {
    player: "R Fowler",
    picks: ["Xander Schauffele", "Rory McIlroy", "Cameron Young"]
  },
  {
    player: "Sparky",
    picks: ["Akshay Bhatia", "Robert MacIntyre", "Tommy Fleetwood"]
  },
  {
    player: "Barley",
    picks: ["Scottie Scheffler", "Ludvig Åberg", "Patrick Reed"]
  },
  {
    player: "Pete Holly",
    picks: ["Gary Woodland", "Bryson DeChambeau", "Tommy Fleetwood"]
  },
  {
    player: "Timmy S",
    picks: ["Justin Rose", "Tommy Fleetwood", "Ludvig Åberg"]
  },
  {
    player: "Mr Grant",
    picks: ["Scottie Scheffler", "Ludvig Åberg", "Matt Fitzpatrick"]
  },
  {
    player: "Greg B",
    picks: ["Rory McIlroy", "Tommy Fleetwood", "Ludvig Åberg"]
  },
  {
    player: "JD Boy",
    picks: ["Scottie Scheffler", "Xander Schauffele", "Ludvig Åberg"]
  },
  {
    player: "Mr Manson",
    picks: ["Akshay Bhatia", "Ludvig Åberg", "Ryan Fox"]
  },

    {
    player: "G Ponting",
    picks: ["Nicolai Højgaard", "Robert MacIntyre", "Si Woo Kim"]
  },
  {
    player: "R McKnight",
    picks: ["Patrick Reed", "Marco Penge", "Jacob Bridgeman"]
  },
  {
    player: "Chalkey",
    picks: ["Cameron Young", "Matt Fitzpatrick", "Patrick Reed"]
  },
  {
    player: "Budgie",
    picks: ["Matt Fitzpatrick", "Sepp Straka", "Jacob Bridgeman"]
  },
  {
    player: "Lamming",
    picks: ["Ludvig Åberg", "Scottie Scheffler", "Viktor Hovland"]
  },
  {
    player: "A Bull",
    picks: ["Collin Morikawa", "Justin Rose", "Bryson DeChambeau"]
  },
  {
    player: "Lynda R",
    picks: ["Ludvig Åberg", "Jon Rahm", "Justin Rose"]
  },
  {
    player: "Cam P",
    picks: ["Justin Rose", "Cameron Young", "Ludvig Åberg"]
  },
  {
    player: "Wazza SB",
    picks: ["Matt Fitzpatrick", "Robert MacIntyre", "Akshay Bhatia"]
  },
  {
    player: "Mac The Knife",
    picks: ["Rory McIlroy", "Matt McCarty", "Jason Day"]
  },
  {
    player: "Crusader",
    picks: ["Scottie Scheffler", "Matt Fitzpatrick", "Bryson DeChambeau"]
  },
  {
    player: "Maccas",
    picks: ["Adam Scott", "Marco Penge", "Patrick Reed"]
  },
  {
    player: "Matt B",
    picks: ["Scottie Scheffler", "Ludvig Åberg", "Jon Rahm"]
  },
  {
    player: "The Wrangler",
    picks: ["Bryson DeChambeau", "Tommy Fleetwood", "Robert MacIntyre"]
  },
  {
    player: "AD",
    picks: ["Bryson DeChambeau", "Jon Rahm", "Xander Schauffele"]
  },
  {
    player: "J Turner",
    picks: ["Jon Rahm", "Xander Schauffele", "Ludvig Åberg"]
  },
  {
    player: "M Sanders",
    picks: ["Jon Rahm", "Matt Fitzpatrick", "Xander Schauffele"]
  },
  {
    player: "Nick Fitz",
    picks: ["Ludvig Åberg", "Cameron Young", "Adam Scott"]
  },
  {
    player: "M Little",
    picks: ["Matt Fitzpatrick", "Ludvig Åberg", "Scottie Scheffler"]
  },
  {
    player: "T Rowe",
    picks: ["Rory McIlroy", "Bryson DeChambeau", "Matt Fitzpatrick"]
  },
  {
    player: "J Tilley",
    picks: ["Hideki Matsuyama", "Justin Rose", "Jacob Bridgeman"]
  },
  {
    player: "Arnie Palmer",
    picks: ["Patrick Reed", "Ludvig Åberg", "Bryson DeChambeau"]
  },
  {
    player: "K. Sanders",
    picks: ["Justin Rose", "Xander Schauffele", "Cameron Young"]
  },
  {
    player: "L Adams",
    picks: ["Tommy Fleetwood", "Brooks Koepka", "Nicolai Højgaard"]
  },
  {
    player: "K McGinness",
    picks: ["Tommy Fleetwood", "Matt Fitzpatrick", "Justin Rose"]
  },
  {
    player: "Baylis",
    picks: ["Scottie Scheffler", "Ludvig Åberg", "Xander Schauffele"]
  },
  {
    player: "D Tucker",
    picks: ["Ludvig Åberg", "Patrick Reed", "Jon Rahm"]
  },
  {
    player: "Kev Martin",
    picks: ["Robert MacIntyre", "Corey Conners", "Ludvig Åberg"]
  },
  {
    player: "P Mac",
    picks: ["Cameron Young", "Xander Schauffele", "Ludvig Åberg"]
  },
  {
    player: "J Barbour",
    picks: ["Bryson DeChambeau", "Cameron Young", "Ludvig Åberg"]
  },
  {
    player: "P Lund",
    picks: ["Cameron Young", "Ludvig Åberg", "Justin Rose"]
  },
  {
    player: "Trump H",
    picks: ["Bryson DeChambeau", "Xander Schauffele", "Chris Gotterup"]
  },
  {
    player: "John Edge",
    picks: ["Xander Schauffele", "Hideki Matsuyama", "Cameron Young"]
  },
  {
    player: "Trent W",
    picks: ["Ludvig Åberg", "Jon Rahm", "Matt Fitzpatrick"]
  },
  {
    player: "Sir Steve",
    picks: ["Jon Rahm", "Scottie Scheffler", "Ludvig Åberg"]
  }
];
