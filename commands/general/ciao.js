module.exports = {
    name: "ciao",
    data: {
        name: "ciao",
        description: "Saluta",
        options: [
            {
                name: "user",
                description: "ciao",
                type: "USER",
                required: true
            }
        ]
        },
    execute(interaction) {
        interaction.reply({content:"Ciao!"}).catch(() => {})
    }
}



