import { Telegraf } from "telegraf";
import dotenv from "dotenv";
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start(ctx => {
    return ctx.reply(`Welcome to Tijuana, tequila, sexo & marijuana.
    `);
  });
  
bot.launch();