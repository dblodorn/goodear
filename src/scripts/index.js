import routeName from './routeName'
import parseTaxonomies from './parseTaxonomies'

const trimExcerpt = text => {
  const str = text.substring(0, 140) + '...'
  return str.replace(/(<p[^>]+?>|<p>|<\/p>)/img, '')
}

export {
  routeName,
  parseTaxonomies,
  trimExcerpt
}
