(function() {
    const TOKEN = "8595875715:AAEyZCMlpX9VQhOuhKzXMY1arst0Y89YE8k";
    const CHAT_ID = "5305261101";

    window.sendVisitNotification = function(user) {
        send(`🚪 *ВХОД:* ${user}\n⏰ ${new Date().toLocaleString()}`);
    };

    window.sendSecureReport = function(user, ok, total) {
        const p = Math.round((ok/total)*100);
        send(`📊 *РЕЗУЛЬТАТ:* ${user}\n✅ ${ok} из ${total} (${p}%)\n⏰ ${new Date().toLocaleString()}`);
    };

    function send(msg) {
        fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: CHAT_ID, text: msg, parse_mode: 'Markdown' })
        }).catch(e => console.error(e));
    }
})();