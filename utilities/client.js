/**
 * Created by luthfi on 25/04/17.
 */
const contentful = require('contentful')

const client = contentful.createClient({
  space: 'uco8bc3c0jg3',
  accessToken: '285047eb96c9fb125d2b40eee7818800129831b299619db47d33a2deccf4f809'
})

export default client
