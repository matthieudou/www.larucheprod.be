const sanityClient = require('@sanity/client')
require('dotenv').config()

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID || process.env.sanityProjectId,
  dataset: process.env.NODE_ENV,
  token: '',
  useCdn: process.env.NODE_ENV === 'production'
})

const generateRoutesFromSlug = (string, slugObjects) => {
  return slugObjects.map(item => `${string}${item.slug}`)
}

const projectsQuery = `
*[_type == 'projects']
`

export const generatedRoutes = () => {
  const promises = [
    client.fetch(projectsQuery)
  ]

  return Promise.all(promises)
    .then(([projectsResponse]) => {
      return [
        ...generateRoutesFromSlug('/projects/', projectsResponse)
      ]
    })
}
