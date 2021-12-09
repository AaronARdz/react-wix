import API from './baseAPI';

const getInventory = async (token) => {
  return API.post(`/inventory/all`, {
    token
  });
}

const inventory = {
  getInventory
}

export default inventory;