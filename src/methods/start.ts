import {Context} from "telegraf"
import {nError} from "../funcs"

export default async (ctx: Context) => (async () => {
  await ctx.reply(`
    Hi ${ctx.from?.first_name}!

    I\`m a bot :)
  `.replace(/^ */mg, ''))
})().catch((error) => nError(error, ctx))
