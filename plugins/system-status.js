const os = require("os");

module.exports = {
  commands: [{
    name: "حالة_النظام",
    aliases: ["حالةالنظام"],
    description: "عرض حالة تشغيل البوت",
    execute: async ({ sock, jid, msg }) => {
      const mem = process.memoryUsage();
      const mb = n => (n / 1048576).toFixed(1);
      let seconds = Math.floor(process.uptime());
      const days = Math.floor(seconds / 86400);
      seconds %= 86400;
      const hours = Math.floor(seconds / 3600);
      seconds %= 3600;
      const minutes = Math.floor(seconds / 60);
      seconds %= 60;

      const text =
        "🖥️ *حالة NINO-BOT*\n\n" +
        "🟢 الحالة: يعمل\n" +
        `⏱️ مدة التشغيل: ${days} يوم، ${hours} ساعة، ${minutes} دقيقة، ${seconds} ثانية\n` +
        `🟩 Node.js: ${process.version}\n` +
        `💾 ذاكرة العملية: ${mb(mem.rss)} MB\n` +
        `🧠 Heap مستخدم: ${mb(mem.heapUsed)} MB\n` +
        `⚙️ المعالجات المنطقية: ${os.cpus().length}`;

      await sock.sendMessage(jid, { text }, { quoted: msg });
    }
  }]
};
