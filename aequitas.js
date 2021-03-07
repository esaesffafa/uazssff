const db = require("quick.db");
const Discord = require("discord.js");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login(process.env.token);
const fetch = require("node-fetch");
const fs = require("fs");
require("express")().listen(1343);

client.on("ready", () => {
console.log(`
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
         ${client.user.username}
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞`);

client.user.setPresence({
activity: {
name: "Aequitas Uptime 7/24",
type: "WATCHING",
url: "URL"
}});});

setInterval(() => {
var links = db.get("linkler");
if (!links) return;
var linkA = links.map(c => c.url);
linkA.forEach(link => {
try {
fetch(link);
} catch (e) {
console.log("" + e);
}
});
}, 60000);

let aequitasembed = new Discord.MessageEmbed()
.setColor('#FFFFFE')

client.on("ready", () => {
  if (!Array.isArray(db.get("linkler"))) {
    db.set("linkler", []);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == ".uptime") {
    var link = spl[1];
    fetch(link)
      .then(() => {
        if (
          db
            .get("linkler")
            .map(z => z.url)
            .includes(link)
        )
        return message.channel.send(aequitasembed
        .setDescription("❗ | Proje şuanda zaten uptime ediliyor."));
        message.channel.send(aequitasembed
        .setDescription("✅ | Projeniz Sistemimize Başarıyla Eklendi!"));
        db.push("linkler", { url: link, owner: message.author.id });
      })
      .catch(e => {
        return message.channel.send(aequitasembed
        .setDescription("❗ | Lütfen Bir Link Giriniz, \n Glitch Projenize Girin, Sol Yukardaki Show Butonuna Tıklayıp İn A Window Butonuna Basın, Çıkan Sayfanın Linkini Kopyalayıp \`.uptime\` komutunu kullanın."));
      });
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == ".göster") {
    var link = spl[1];
    message.channel.send(aequitasembed
    .setDescription(`${db.get("linkler").length} Tane Proje Anlık Olarak Aktif Tutuluyor!`));
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == ".yardım") {
    var link = spl[1];
    message.channel.send(aequitasembed
    .setThumbnail(client.user.avatarURL)
    .setDescription(`
◽ \`.uptime <link>\`: Botunuzu 7/24 aktif eder.
◽ \`.göster\` Kaç botun uptime edildiğini gösterir.
`))

  }
});
