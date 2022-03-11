module.exports = {
    name: 'pt',
    description: 'traduzir gíria',
    async execute(message) {
        const slang = message.content.substring(message.content.indexOf(" ") + 1, message.content.length + 3);

        const fetch = require('node-fetch')

        fetch(`https://www.dicionarioinformal.com.br/${slang}/`, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "sec-gpc": "1",
                "upgrade-insecure-requests": "1",
                "cookie": "purecookieDismiss=1",
                "Referer": `https://www.dicionarioinformal.com.br/${slang}/`,
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
        }).then(res => {
            res.text().then(text => {
                const firstSeparator = '"og:description" content="';
                const lastSeparator = 'og:url';
                const stringLeftoverLength = 23;
                const firstCrop = text.substring(text.indexOf(firstSeparator) + firstSeparator.length);
                const lastCrop = firstCrop.substring(0, firstCrop.indexOf(lastSeparator));
                const definition = firstCrop.substring(0, lastCrop.length - stringLeftoverLength);

                message.channel.send(definition);
            })
        })
    }
}