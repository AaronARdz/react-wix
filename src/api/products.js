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

const products = {
  getAllProducts,
  getProduct
}

export default products;