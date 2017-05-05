/**
 * Created by luthfi on 25/04/17.
 */
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://cdn.contentful.com/spaces/uco8bc3c0jg3/',
  headers: {
    Authorization: 'Bearer 285047eb96c9fb125d2b40eee7818800129831b299619db47d33a2deccf4f809'
  }
})

const client = {
  getPosts (params = {}) {
    params.content_type = '2wKn6yEnZewu2SCCkus4as'
    return api.get('entries', {
      params
    })
  },
  getCategories (params = {}) {
    params.content_type = '5KMiN6YPvi42icqAUQMCQe'
    return api.get('entries', {
      params
    })
  },
  getEntry (id) {
    return api.get(`entries/${id}`)
  }
}

export default client
