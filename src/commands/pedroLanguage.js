module.exports = {
    name: 'pl',
    description: 'pedro language',
    async execute(message) {
        if(message.content[0] === '?' && message.content[1] === 'p' && message.content[2] === 'l') {
            let originalSentence = message.content.substring(message.content.indexOf(" "), message.content.length + 3);
            let translated =  originalSentence.replace( /[aeiou]/ig, '' );

            message.channel.send(translated);
        } else {
            message.channel.send('Houve um erro, digite ?help para ver os comandos disponíveis!');
        }
    }
}