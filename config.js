module.exports = {
    prefix: "/", // The prefix of the bot
    welcomeChannel: "904891486359916576", // The channel ID of where join and leave messages should be sent
    slashCommands: true, // Wether or not the bot should have slash commands
    colors: {
        main: [0, 110, 255],
        error: [231, 76, 60]
    },
    botstatus: {
        enabled: true, // Wether or not the bot should have a status
        status: "online", // The status of the bot (dnd, online, idle, invisible)
        activity_type: "playing", // The type of the activity (watching, listening, playing, streaming)
        activity_text:  "/help",  // The activity text
        activity_url: "https://www.twitch.tv/martin_melgarej" // The stream URL
    },
    inviteRewards: true, // Wether or not invite rewards should be enabled
    rewards: [
        {
            invitesNeeded: 10, // The amount of invites they should have
            roleID: "967633516403765250" // The role ID for the role they should get
        }, //Copy and paste this for each invite reward //Inviter
        {
            invitesNeeded: 50,
            roleID: "905146284325883914" //Vip
        },
       {
            invitesNeeded: 100,
            roleID: "967633854951211058" //U-D
        }
    ],
    welcomeMessage: "{member} Fue invitado por **{inviter}** (que tiene {invites} invites).", // Use {inviter} for who invited the member, {member} for the member, {code} for the invite used, {mention} to mention the inviter, {ID} for the ID of the member, {inviterID} for the inviter's ID, and {invites} for the inviter's invites
    leaveMessage: "{member} dejó el servidor. fue invitado por **${inviter}** (que tiene ${invites} invites).", // Use {inviter} for who invited the member, {member} for the member, {mention} to mention the inviter, {ID} for the ID of the member, {inviterID} for the inviter's ID, and {invites} for the inviter's invites
}