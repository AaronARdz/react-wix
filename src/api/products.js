import API from './baseAPI';

const getAllProducts = async (token) => {
  return API.post(`/products/all`, {
    token
  });
}

const getProduct = async (token,id) => {
  return API.post(`product/`, {
    token,
    id
  });
}

const createProduct = async (token,product) => {
  return API.post(`product/create`, {
    token,
    product
  });
}

const products = {
  getAllProducts,
  getProduct,
  createProduct
}

export default products;