require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    prefix: process.env.PREFIX || "$", // bot prefix
    ownerID: process.env.OWNERID || "468195201333067777", //your discord id
    SpotifyID: process.env.SPOTIFYID || "a4ce599c1af34046b95edc132845e2ec", 
    SpotifySecret: process.env.SPOTIFYSECRET || "8e62242e943e45e08793a3da2e7ee0cc", 
    mongourl: process.env.MONGO_URI || "", // MongoDb URL
    embedColor: process.env.COlOR || "#303236", // embed colour
    logs: process.env.LOGS || "770616890690895894", // channel id for guild create and delete logs

    nodes: [
        {
            host: process.env.NODE_HOST || "localhost",
            identifier: process.env.NODE_ID || "local",
            port: parseInt(process.env.NODE_PORT || "80"),
            password: process.env.NODE_PASSWORD || "coders",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
      
          }
  ],

}

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
