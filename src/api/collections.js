import API from './baseAPI';

const getCollections = async (token) => {
  return API.post(`/collections/all`, {
    token
  });
}

const getCollectionByID = async (token, id) => {
  return API.post(`/collection`, {
    token,
    id
  });
}

const createCollection = async (token, name) => {
  return API.post(`/collection/create`, {
    token,
    name
  });
}

/**
 * Add products to collection
 * @param {string} token - Access token
 * @param {Object} body - 
 * @param {string} body.id - collection id
 * @param {string[]} body.name - collection name
 */
const updateCollection = async (token, body) => {
  return API.post(`/collection/update`, {
    token,
    body
  });
}

/**
 * Add products to collection
 * @param {string} token - Access token
 * @param {Object} body - 
 * @param {string} body.id - collection id
 * @param {string[]} body.productIds - list of product Ids to add
 */
const addProducts = async (token, body) => {
  return API.post(`/collection/addProducts`, {
    token,
    body
  });
}

/**
 * Remove products from collection
 * @param {string} token - Access token
 * @param {Object} body - 
 * @param {string} body.id - collection id
 * @param {string[]} body.productIds - list of product Ids to add
 */
const removeProducts = async (token, body) => {
  return API.post(`/collection/removeProducts`, {
    token,
    body
  });
}
const collections = {
  getCollections,
  getCollectionByID,
  createCollection,
  updateCollection,
  addProducts,
  removeProducts
}

export default collections;