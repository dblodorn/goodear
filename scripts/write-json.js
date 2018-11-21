const fs = require('fs-extra');
const fetch = require('isomorphic-fetch');
const getDirname = require('path').dirname;
const config = require('./../src/config.json');

console.log(getDirname);

const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch(config.wp_endpoint, {
      method: 'GET'
    })
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

const dataHandler = (payload) => {
  // console.log(payload)
  fs.writeFile(`${getDirname}/data.json`, JSON.stringify(payload), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
  });
}

fetchData()
  .then(response => response.json())
  .then((payload) => dataHandler(payload))
