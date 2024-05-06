const { Telegraf } = require('telegraf');
const express = require('express');

const Token = "6691992182:AAEbF3OOq7fNEmRGeU6piHLQwMrQpaSc9RI";
const bot = new Telegraf(Token);

bot.start((ctx) => {
    ctx.reply("Welcome to Bhaktione");
    ctx.reply(`What You Want to start With
                1. Strotas
                2. Panchang
                3. Hinduism Stories`);
});

bot.help((ctx) => {
    ctx.reply("How can I help you?");
});

bot.hears('strotas', (ctx) => {
    ctx.reply("https://youtube.com/playlist?list=PLEK6TOzUNTb7mkwAqCtIZ0hAYoaxrg5vN&si=rl6Y-Bj68bwrUjdx");
});

bot.hears('panchang', (ctx) => {
    ctx.reply("https://youtube.com/playlist?list=PLEK6TOzUNTb6gru1GkNLQQiNEl-Y6o_pK&si=NnUs3gNkbHB2AcO6");
});

bot.hears('hinduism', (ctx) => {
    ctx.reply("https://youtube.com/playlist?list=PLEK6TOzUNTb6LOCawZLiAUJHfxpufGK9C&si=6sLw-URTEowcn0yR");
});

const app = express();
const PORT = process.env.PORT || 3001; // You can set the port number here

app.get('/', (req, res) => {
    res.send('Telegram bot is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

bot.launch();
