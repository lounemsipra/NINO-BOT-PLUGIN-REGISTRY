module.exports = {
  commands: [
    {
      name: "عكس_النص",
      aliases: ["عكسالنص"],
      description: "عكس النص",
      execute: async ({ sock, jid, msg, args }) => {
        const value = args.join(" ");
        if (!value) {
          return sock.sendMessage(jid, {
            text: "اكتب النص بعد الأمر.\nمثال: .عكس_النص مرحبا نينو"
          }, { quoted: msg });
        }
        await sock.sendMessage(jid, {
          text: Array.from(value).reverse().join("")
        }, { quoted: msg });
      }
    },
    {
      name: "عد_النص",
      aliases: ["عدالنص"],
      description: "عد الحروف والكلمات",
      execute: async ({ sock, jid, msg, args }) => {
        const value = args.join(" ").trim();
        if (!value) {
          return sock.sendMessage(jid, {
            text: "اكتب النص بعد الأمر.\nمثال: .عد_النص مرحبا بالعالم"
          }, { quoted: msg });
        }
        const chars = Array.from(value).length;
        const words = value.split(/\s+/).filter(Boolean).length;
        await sock.sendMessage(jid, {
          text: `📝 *تحليل النص*\n\n🔤 الحروف والرموز: ${chars}\n📚 الكلمات: ${words}`
        }, { quoted: msg });
      }
    }
  ]
};
