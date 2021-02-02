const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');

const win = "https://cdn.discordapp.com/attachments/427551918009745433/787013587385319485/ESysW-WUUAE4iEA.png";
const lose = "https://cdn.discordapp.com/attachments/427551918009745433/787013550060601384/EjvEwh_WAAAzr9r.png";



const winColor = "#5bf244";
const loseColor = "#e01919";

const prefix = "?"

let compteurPingu = 0
let compteurJij = 0

const winEmbed = new MessageEmbed()
    .setColor(winColor)
    .setTitle('Tu a gagné')
    .setAuthor('LA BAGARRE')
    .setImage(win)

const loseEmbed = new MessageEmbed()
    .setColor(loseColor)
    .setTitle('Tu as perdu')
    .setAuthor('LA BAGARRE')
    .setImage(lose)

    
client.once('ready', () => {
	console.log('Leggo la baguarre');
});

client.on('message', message => {



    let separatedText = message.content.split(" ");
    let thisGuildID = message.guild.id // id du serveur
    let thisChannelID = message.channel.id; // id du channel
    let thisUserUsername = message.author.username;
    let thisUserID = message.author.id; // id de la personne qui a écrite
    let thisMention = '<@!' + thisUserID + '>'; // mentionne la personne qui a écrit le message
    let command = message.content.toLowerCase(); // convertis les caractère en minuscule
    let adminID = "175577596891889664"
    let thisUserAvatarID = message.author.avatar;


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
                    .setImage(lose)
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
            if(random == 0){
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

    if (command === prefix + 'avatar'){

        const url = 'https://discord.com/api';
        
        if(separatedText[1] != undefined){
            fetch(url + "/" + separatedText[1])
            .then((resp) => resp.json())
            .then(function(data){
                let userID = data.User.id
                let userAvatarID = data.User.avatar
                let userUsername = data.User.username

                const avatarEmbed = new MessageEmbed()
                    .setColor(0x333333)
                    .setAuthor(userUsername)
                    .setImage("https://cdn.discordapp.com/" + userID + "/" + userAvatarID);
                message.channel.send(avatarEmbed);
            })
        }
        else{
            const avatarEmbed = new MessageEmbed()
                .setColor(0x333333)
                .setAuthor(thisUserUsername)
                .setImage("https://cdn.discordapp.com/" + thisUserID + "/" + thisUserAvatarID);
            message.channel.send(avatarEmbed);
        }
    }

});

client.login(process.env.TOKEN);