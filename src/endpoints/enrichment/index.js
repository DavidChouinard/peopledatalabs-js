import { check, errorHandler } from '../../errors';

const axios = require('axios');

export default (basePath, apiKey, params, type) => new Promise((resolve, reject) => {
  check(params, basePath, apiKey, null, 'enrichment').then(() => {
    axios.get(`${basePath}/${type}/enrich`, {
      params: {
        api_key: apiKey,
        ...params,
      },
    })
      .then((data) => {
        if (data?.data?.status === 200) {
          resolve(data.data);
        }
      })
      .catch((error) => {
        reject(errorHandler(error));
      });
  }).catch((error) => {
    reject(error.message);
  });
});
