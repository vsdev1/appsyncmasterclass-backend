const chance = require('chance').Chance()

const a_random_user = () => {
    const firstName = chance.first({nationality: 'en'})
    const lasttName = chance.last({nationality: 'en'})
    const suffix = chance.string({length: 4, pool: 'abcdefghijklmnopqrstuvwxyz'})
    const name = `${firstName} ${lasttName} ${suffix}`
    const password = chance.string({length: 8})
    const email = `${firstName}-${lasttName}-${suffix}@appsyncmasterclass.com`

    return {
        name, 
        password, 
        email
    }
}

module.exports = {
    a_random_user
}