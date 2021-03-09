const Discord = require('discord.js');
const fetch = require('node-fetch')
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');




const win = "https://cdn.discordapp.com/attachments/427551918009745433/787013587385319485/ESysW-WUUAE4iEA.png";
const lose = "https://cdn.discordapp.com/attachments/427551918009745433/787013550060601384/EjvEwh_WAAAzr9r.png";

const winColor = "#5bf244";
const loseColor = "#e01919";

const prefix = "?"

let compteurPingu = 0
let compteurJij = 0

// let result = ""


// function search(id){
//     const url = 'https://discord.com/api/v8/users/'+ id;
    
//         fetch(url)
//         .then((resp) => resp.json())
//         .then(function(data){
//                 result = data.avatar
//         });

//     return result;
// }


client.once('ready', () => {
	console.log('Leggo la baguarre');
    
});

client.on('message', async (message) => {

    let separatedText = message.content.split(" ");
    let thisGuildID = message.guild.id // id du serveur
    let thisChannelID = message.channel.id; // id du channel
    let thisUserUsername = message.author.username;
    let thisUserID = message.author.id; // id de la personne qui a écrite
    let thisMention = '<@!' + thisUserID + '>'; // mentionne la personne qui a écrit le message
    let command = message.content.toLowerCase(); // convertis les caractère en minuscule
    let adminID = "175577596891889664"
    let thisUserAvatarID = message.author.avatar;

    let SoupeTimeAble = true

    const channelEpc = client.channels.cache.get("551093070960263178");



    let hours = 0
    let minutes = 0
    let secondes = 0
    let hours2 = 0
    let minutes2 = 0


    function checkTime(){
        while(hours != 12 && minutes != 45 && secondes > 10 && SoupeTimeAble){
            setTimeout( function time() {
                let start = Date.now()
            
                let time = start % 86400000;
            
                hours = Math.floor(time / 3600000) + 1;
            
                hours2 = hours + ":";
            
                minutes = Math.floor((time % 3600000) / 60000)
                
                minutes2 = minutes + ":"
            
                if (minutes < 10){
                    minutes2 = "0" + minutes2
                };
            
                secondes = Math.floor((time % 3600000) % 60000 / 1000)
                
            }, 1000);
        }
        if (hours == 12 && minutes > 50){
            SoupeTimeAble = true
        }
        channelEpc.send("IT'S SOUPE TIME");
        SoupeTimeAble = false
        
    }

    checkTime();

    if (message.author.bot) return;

    if (command === prefix + 'help'){
        if (thisGuildID == "533329812719403028"){
            message.channel.send('`Les commandes sont : \n?help : affiche cette réponse \n?bagarre : faire la bagarre contre le bot \n?bagarre @username : faire la bagarre contre la personne mentionnée \n?bagarre @username unTitre : expliquer pourquoi faire la bagarre \n?channelId : donne l\'id du channel \n?serverId : donne l\'id du serveur \n?PinguStreak : donne le nombre de fois que Pingu s\'est fait bolosse \n?JijStreak : donne le nombre de fois que Jij s\'est fait bolosse`');
            // message.delete();
        }else{
            message.channel.send('`Les commandes sont : \n?help : affiche cette réponse \n?bagarre : faire la bagarre contre le bot \n?bagarre @username : faire la bagarre contre la personne mentionnée \n?bagarre @username unTitre : expliquer pourquoi faire la bagarre \n?channelId : donne l\'id du channel \n?serverId : donne l\'id du serveur `');
        }
    }

    if (separatedText[0] === prefix + 'bagarre'){
        if (separatedText[1] != undefined){
            let separatedId = separatedText[1].split("@");
            if (separatedId[0] === "<"){
                if(separatedText[2] == undefined){
                    let random = Math.floor(Math.random() * 2); // 0 ou 1 aléatoire
                    let player = thisMention;
                    let opponent = separatedText[1];
                    if (player != opponent){
                        if (random == 1){
                            const fightEmbed = new MessageEmbed()
                                .setColor(loseColor)
                                .setTitle('LA BAGARRE')
                                .setImage(lose)
                                .addFields(
                                    { name: ':trophy: Winner :trophy:', value: opponent, inline: true },
                                    { name: ':x: Loser :x:', value: player, inline: true }
                                )
                            message.channel.send(fightEmbed);
                        }
                        else{
                            const fightEmbed = new MessageEmbed()
                                .setColor(winColor)
                                .setTitle('LA BAGARRE')
                                .setImage(win)
                                .addFields(
                                    { name: ':trophy: Winner :trophy:', value: player, inline: true },
                                    { name: ':x: Loser :x:', value: opponent, inline: true }
                                )
                            message.channel.send(fightEmbed);
                        };
                    }
                    else{
                        message.channel.send("Désolé c'est pas maso friendly, réécris la commande bg");
                    }
                }
                else{
                    let random = Math.floor(Math.random() * 2); // 0 ou 1 aléatoire
                    let player = thisMention;
                    let opponent = separatedText[1];
                    let totuLeContenu = separatedText.slice(2)
                    let title = ""

                    for (let i = 0; i < totuLeContenu.length; i++) {
                        title += totuLeContenu[i] + " ";
                    }

                    title = title.split("<@")
                    
                    if (title.length == 1){
                        if (player != opponent){
                            if (random == 1){
                                const fightEmbed = new MessageEmbed()
                                    .setColor(winColor)
                                    .setTitle(title)
                                    .setImage(win)
                                    .addFields(
                                        { name: ':trophy: Winner :trophy:', value: player, inline: true },
                                        { name: ':x: Loser :x:', value: opponent, inline: true }
                                    )
                                message.channel.send(fightEmbed);
                            }
                            if (random == 0){
                                const fightEmbed = new MessageEmbed()
                                    .setColor(loseColor)
                                    .setTitle(title)
                                    .setImage(lose)
                                    .addFields(
                                        { name: ':trophy: Winner :trophy:', value: opponent, inline: true },
                                        { name: ':x: Loser :x:', value: player, inline: true }
                                    )
                                message.channel.send(fightEmbed);
                            };
                        }
                        else{
                            message.channel.send("Désolé c'est pas maso friendly, réécris la commande bg");
                        }
                    }
                    else{
                        message.channel.send("Met pas de mention dans le titre bg")
                    }
                }   
                
            }
            else{
                message.channel.send("T'as mal écrit bg")
            };
        }
        else{
            let random = Math.floor(Math.random() * 2); // 0 ou 1 aléatoire
            // console.log(random);
            if (random == 1){
                const winEmbed = new MessageEmbed()
                    .setColor(winColor)
                    .setTitle('Tu a gagné ')
                    .setAuthor('LA BAGARRE')
                    .addField(':trophy: Winner :trophy:', thisMention, true)
                    .setImage(win)
                message.channel.send(winEmbed); // embed message pour la win
            }
            if (random == 0){
                const loseEmbed = new MessageEmbed()
                    .setColor(loseColor)
                    .setTitle('Tu a perdu ')
                    .setAuthor('LA BAGARRE')
                    .addField(':x: Loser :x:', thisMention, true)
                    .setImage(lose);
                message.channel.send(loseEmbed); // embed message pour la lose
            };
        }
    }

    if(thisUserID == "355629885106028545"){
        if(thisChannelID == "533329816447877130" || thisChannelID == "536522408685862922" || thisChannelID == "546430191845769227" || thisChannelID == "551070017676902423"){
            let random = Math.floor(Math.random() * 15); // 0 à 15 aléatoire
            if(random == 0){
                message.channel.send("https://cdn.discordapp.com/attachments/644478292145209357/805794675453329408/tg_dondon.png")
                compteurPingu++
            }
        }
    }

    if (thisUserID == "305787132407054337"){
        if(thisChannelID == "533329816447877130" || thisChannelID == "536522408685862922" || thisChannelID == "546430191845769227" || thisChannelID == "551070017676902423"){
            let random = Math.floor(Math.random() * 15); // 0 à 15 aléatoire
            if(random == 13){
                message.channel.send("https://cdn.discordapp.com/attachments/533329816447877130/805797606122586142/tumblr_otf980gBeU1tzhveyo2_1280.png")
                compteurJij++
            }
        }
    }

    if(command === prefix + 'channelid'){
        message.channel.send("Voici l'ID " + thisChannelID)
    }
    
    if(command === prefix + 'serverid'){
        message.channel.send("Voici l'ID " + thisGuildID)
    }

    if(command === prefix + 'pingustreak'){
        message.channel.send(compteurPingu)
    }

    if(command === prefix + 'jijstreak'){
        message.channel.send(compteurJij)
    }

    if (separatedText[0] === prefix + 'avatar'){
        if (!separatedText[1]){
            // let avatar = "https://cdn.discordapp.com/avatars/" + thisUserID + "/" + thisUserAvatarID + ".png?size=1024"
            let avatar = message.author.avatarURL({ dynamic:true, size:1024})
            // message.channel.send(avatar)
            return message.channel.send(avatar)
        }
        if(!message.mentions.users.first()){
            let id = separatedText[1]

            // maybe convertir en string / int ?

            let getUser = async () => {
                let result = await fetch('https://discord.com/api/v8/users/' + id)
                let json = await result.json()
                return json
            }
            let user = await getUser()
        }
        if(message.mentions.users.first()){
            console.log(message.mentions.users)
            console.log(message.mentions.users.first())

            let user = message.mentions.users.first()
            return message.channel.send(user.avatarURL({ dynamic:true, size:1024}))
        }
    }

    if (separatedText[0] === prefix + 'time'){
        message.channel.send("Il est très pécisément: " + hours2 + minutes2 + secondes)
    }

});

client.login(process.env.TOKEN);