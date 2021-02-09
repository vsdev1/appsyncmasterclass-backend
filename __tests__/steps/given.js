const chance = require('chance').Chance()
const velocityUtil = require('amplify-appsync-simulator/lib/velocity/util')

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

const an_appsync_context = (identity, args, result, source, info, prev) => {
    const util = velocityUtil.create([], new Date(), Object())
    const context = {
      identity,
      args,
      arguments: args,
      result,
      source,
      info,
      prev
    }
    return {
      context,
      ctx: context,
      util,
      utils: util
    }
  }

module.exports = {
    a_random_user,
    an_appsync_context
}