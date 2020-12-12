const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');

const win = "https://cdn.discordapp.com/attachments/427551918009745433/787013587385319485/ESysW-WUUAE4iEA.png";
const lose = "https://cdn.discordapp.com/attachments/427551918009745433/787013550060601384/EjvEwh_WAAAzr9r.png";



const winColor = "#5bf244";
const loseColor = "#e01919";

const prefix = "!"


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
    let thisChannel = message.channel.name; // nom du channel
    let thisUserID = message.author.id; // id de la personne qui a écrite 
    let thisMention = '<@!' + thisUserID + '>'; // mentionne la personne qui a écris le message
    let command = message.content.toLowerCase(); // convertis les caractère en minuscule
    


    if (message.author.bot) return;

    if (command === prefix + 'help'){
        message.channel.send('`Les commandes sont : \n!help qui affiche cette réponse \n!bagarre pour faire la bagarre contre le bot \n!bagarre @username pour faire la bagarre contre la personne mentionnée`');
        // message.delete();
    }

    if (separatedText[0] === prefix + 'bagarre'){
        if (separatedText[1] != undefined){
            let separatedId = separatedText[1].split("!");
            if (separatedId[0] === "<@"){
                if(separatedText[2] != undefined){
                    let random = Math.floor(Math.random() * 2); // 0 ou 1 aléatoire
                    let player = thisMention;
                    let opponent = separatedText[1];
                    if (player != opponent){
                        if (random == 1){
                            const fightEmbed = new MessageEmbed()
                                .setColor(winColor)
                                .setTitle('LA BAGARRE')
                                .setImage(win)
                                .addFields(
                                    { name: ':trophy:', value: opponent, inline: true },
                                    { name: ':x:', value: player, inline: true }
                                )
                            message.channel.send(fightEmbed);
                        }
                        else{
                            const fightEmbed = new MessageEmbed()
                                .setColor(winColor)
                                .setTitle('LA BAGARRE')
                                .setImage(win)
                                .addFields(
                                    { name: ':trophy:', value: player, inline: true },
                                    { name: ':x:', value: opponent, inline: true }
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
                    let title = separatedText[2];
                    if (player != opponent){
                        if (random == 1){
                            const fightEmbed = new MessageEmbed()
                                .setColor(winColor)
                                .setTitle(title)
                                .setImage(win)
                                .addFields(
                                    { name: ':trophy:', value: opponent, inline: true },
                                    { name: ':x:', value: player, inline: true }
                                )
                            message.channel.send(fightEmbed);
                        }
                        else{
                            const fightEmbed = new MessageEmbed()
                                .setColor(winColor)
                                .setTitle(title)
                                .setImage(win)
                                .addFields(
                                    { name: ':trophy:', value: player, inline: true },
                                    { name: ':x:', value: opponent, inline: true }
                                )
                            message.channel.send(fightEmbed);
                        };
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
                    .addField(':trophy:', thisMention, true)
                    .setImage(win)
                message.channel.send(winEmbed); // embed message pour la win
            }
            if (random == 0){
                const loseEmbed = new MessageEmbed()
                    .setColor(loseColor)
                    .setTitle('Tu a perdu ')
                    .setAuthor('LA BAGARRE')
                    .addField(':x:', thisMention, true)
                    .setImage(lose)
                message.channel.send(loseEmbed); // embed message pour la lose
            };
        }
    }
});

client.login(process.env.TOKEN);