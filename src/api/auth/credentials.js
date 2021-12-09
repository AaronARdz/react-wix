// eslint-disable-next-line import/no-anonymous-default-export
import API from '../baseAPI';

const refreshToken = async () => {
  return API.get(`test`);
}

export default refreshToken;