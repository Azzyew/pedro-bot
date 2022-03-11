module.exports = {
    name: 'pl',
    description: 'pedro language',
    async execute(message) {
        let originalSentence = message.content.substring(message.content.indexOf(" "), message.content.length + 3);
        let translated =  originalSentence.replace( /[aeiou]/ig, '' );

        message.channel.send(translated);
    }
}