import fetch from 'isomorphic-fetch'

export default () => {
  return new Promise((resolve, reject) => {
    fetch((process.env.NODE_ENV === 'development')
      ? 'https://dmbk.network/gems/wp-json/api/v1/data/' 
      : `data.${__webpack_hash__}.json`,
      { method: 'GET' })
        .then(res => resolve(res))
        .catch(err => reject(err))
  })
}