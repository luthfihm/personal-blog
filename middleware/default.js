/**
 * Created by luthfi on 05/05/17.
 */
import client from '~/utilities/client'

async function loadCategories (store) {
  let { data } = await client.getCategories()
  let categories = data.items
  store.commit('addCategories', categories)
}
export default function ({ store }) {
  loadCategories(store)
}
