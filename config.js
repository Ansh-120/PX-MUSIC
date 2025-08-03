

module.exports = {
  TOKEN: "MTQwMDgzNDU4NTE1MDg4NjAwOA.GUASfk.j5ZthXvGcStS0UAx1crAdBkZdk66u_tmMW12jI",
  language: "en",
  ownerID: ["1365298793662386190"], 
  mongodbUri : "mongodb+srv://ANSH:<db_password>@cluster0.gex9ets.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/QSdaRTdGhP",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "5.39.63.207",
      port:  8262,
      secure: false
    }
  ]
}
