
const {
    Client,
    GatewayIntentBits,
    Partials,
    Collection,
  } = require("discord.js");
  const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
  const { User, Message, GuildMember, ThreadMember } = { Partials };
  
  const { loadEvents } = require("./Handlers/eventHandler");
  
  const { loadCommands } = require("./Handlers/commandHandler");
  
  const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember],
  });
  
  
  
  //Collections
  client.commands = new Collection();
  
  
  client.config = require("./config.json");
  
  client
    .login(client.config.token)
    .then(() => {
      client.user.setActivity("Baking cookies");
      loadEvents(client);
      loadCommands(client);
    })
    .catch((error) => console.log(error));