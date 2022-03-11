module.exports = {
    name: 'help',
    description: 'comandos',
    execute(message) {
        message.channel.send(`
            !! COMANDOS !! \n\n ?pl - Traduz a frase para Pedro Language \n ?pt - Pesquisa a gíria enviada no dicionário informal \n ?h - Envia o pedro eu te odeio
        `);
    }
};