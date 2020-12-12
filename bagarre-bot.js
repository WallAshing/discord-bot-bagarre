const Discord = require('discord.js');
const client = new Discord.Client();
const token = "Nzg3MDE3MjA3MTA4MzM3Njc0.X9O05A.0zJxiYkzWSYH74q2cVFhYoPNK90";
const { MessageEmbed } = require('discord.js');

const win = "https://cdn.discordapp.com/attachments/427551918009745433/787013587385319485/ESysW-WUUAE4iEA.png";
const lose = "https://cdn.discordapp.com/attachments/427551918009745433/787013550060601384/EjvEwh_WAAAzr9r.png";
const bagarre = "https://cdn.discordapp.com/attachments/427551918009745433/787013569610514442/EjvDa-CWkAc5haA.png"



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
    let thisMention = '<@' + thisUserID + '> '; // mentionne la personne qui a écris le message
    let command = message.content.toLowerCase(); // convertis les caractère en minuscule
    


    if (message.author.bot) return;

    if (command === prefix + 'help'){
        message.channel.send('`Les commandes sont !help pour afficher cette réponse`');
        // message.delete();
    }

    if (command === prefix + "bagarre"){
        let random = Math.floor(Math.random() * 2); // 0 ou 1 aléatoire
        // console.log(random);
        if (random == 1){
            message.channel.send(winEmbed); // embed message pour la win
            message.channel.send('Tu as gagné ' + thisMention + '!'); // Résultat de la bagarre + mention
        }
        else{
            message.channel.send(loseEmbed); // embed message pour la lose
            message.channel.send('Tu as perdu ' + thisMention + '!'); // Résultat de la bagarre + mention
        };
    }

    if (separatedText[0] === prefix + 'test'){
        if (separatedText[1] != undefined){
            let separatedId = separatedText[1].split("!");
            if (separatedId[0] === "<@"){
                let random = Math.floor(Math.random() * 2); // 0 ou 1 aléatoire
                let player = thisMention;
                let opponent = separatedText[1];

                if (random == 1){
                    const fightEmbed = new MessageEmbed()
                        .setColor(winColor)
                        .setTitle('LA BAGARRE')
                        .setImage(bagarre)
                        .addFields(
                            { name: ':x:', value: player, inline: true },
                            { name: 'Résultat', value: "-------------", inline: true },
                            { name: ':trophy:', value: opponent, inline: true }
                        )
                    message.channel.send(fightEmbed);
                }
                else{
                    const fightEmbed = new MessageEmbed()
                        .setColor(winColor)
                        .setTitle('LA BAGARRE')
                        .setImage(bagarre)
                        .addFields(
                            { name: ':x:', value: opponent, inline: true },
                            { name: 'Résultat', value: "-------------", inline: true },
                            { name: ':trophy:', value: player, inline: true }
                        )
                    message.channel.send(fightEmbed);
                };
                
            }
            else{
                message.channel.send("T'as mal écris bg")
            };
        }
        else{
            let random = Math.floor(Math.random() * 2); // 0 ou 1 aléatoire
            // console.log(random);
            if (random == 1){
                message.channel.send(winEmbed); // embed message pour la win
                message.channel.send('Tu as gagné ' + thisMention + '!'); // Résultat de la bagarre + mention
            }
            else{
                message.channel.send(loseEmbed); // embed message pour la lose
                message.channel.send('Tu as perdu ' + thisMention + '!'); // Résultat de la bagarre + mention
            };
        }
    }
});

client.login(token);