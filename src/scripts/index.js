import routeName from './routeName'
import parseTaxonomies from './parseTaxonomies'

const trimExcerpt = text => {
  const str = text.substring(0, 152)
  return str.replace(/(<p[^>]+?>|<p>|<\/p>)/img, '')
}

const randomNum = (min, max) =>
  Math.floor(Math.random() * (+max - +min)) + +min

const removeItem = (arr, item) => {
  console.log(arr, item)
  const index = arr.indexOf(item)
  console.log(index)
  return arr.splice(index)
}

export {
  routeName,
  parseTaxonomies,
  trimExcerpt,
  randomNum,
  removeItem
}
