import routeName from './routeName'
import parseTaxonomies from './parseTaxonomies'

const trimExcerpt = text => {
  const str = text.substring(0, 140) + '...'
  return str.replace(/(<p[^>]+?>|<p>|<\/p>)/img, '')
}

const randomNum = (min, max) =>
  Math.floor(Math.random() * (+max - +min)) + +min

export {
  routeName,
  parseTaxonomies,
  trimExcerpt,
  randomNum
}
