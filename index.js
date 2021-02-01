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
    let thisChannelID = message.channel.id; // id du channel
    let thisUserID = message.author.id; // id de la personne qui a écrite 
    let thisMention = '<@!' + thisUserID + '>'; // mentionne la personne qui a écris le message
    let command = message.content.toLowerCase(); // convertis les caractère en minuscule
    


    if (message.author.bot) return;

    if (command === prefix + 'help'){
        message.channel.send('`Les commandes sont : \n?help : affiche cette réponse \n?bagarre : faire la bagarre contre le bot \n?bagarre @username : faire la bagarre contre la personne mentionnée \n?bagarre @username unTitre : expliquer pourquoi faire la bagarre `');
        // message.delete();
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
                        message.channel.send("Désolé c'est pas mazo friendly, réécris la commande bg");
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
                            message.channel.send("Désolé c'est pas mazo friendly, réécris la commande bg");
                        }
                    }
                    else{
                        message.channel.send("Mets pas de mentions dans le titre bg")
                    }
                }   
                
            }
            else{
                message.channel.send("T'as mal écris bg")
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
            let random = Math.floor(Math.random() * 10); // 0 à 9 aléatoire
            if(random == 0){
                message.channel.send("https://cdn.discordapp.com/attachments/644478292145209357/805794675453329408/tg_dondon.png")
                compteurPingu++
            }
        }
    }

    if (thisUserID == "305787132407054337"){
        if(thisChannelID == "533329816447877130" || thisChannelID == "536522408685862922" || thisChannelID == "546430191845769227" || thisChannelID == "551070017676902423"){
            let random = Math.floor(Math.random() * 10); // 0 à 9 aléatoire
            if(random == 0){
                message.channel.send("https://cdn.discordapp.com/attachments/533329816447877130/805797606122586142/tumblr_otf980gBeU1tzhveyo2_1280.png")
                compteurJij++
            }
        }
    }

    if(separatedText[0] === prefix + 'channelId'){
        message.channel.send("Voici l'ID " + thisChannelID)
    }

    if(separatedText[0] === prefix + 'PinguStreak'){
        message.channel.send(compteurPingu)
    }

    if(separatedText[0] === prefix + 'JijStreak'){
        message.channel.send(compteurJij)
    }



});







client.login(process.env.TOKEN);