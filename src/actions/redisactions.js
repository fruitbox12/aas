import axios from 'axios';

const redisServerApiBaseurl = "https://rj2x1o1o69.execute-api.us-east-2.amazonaws.com/dev";
const oracleEndpoint = redisServerApiBaseurl + "/oracles";

//const chainId = parseInt(Number(window.ethereum.chainId), 10);

export const getAllOracles = async () => {
  const res = await axios.get(oracleEndpoint);
  if (res !== undefined && res.data !== undefined && Array.isArray(res.data)) {
    return res.data;
  } else {
    return undefined;
  }
}

export const saveOracles = oracles => {
  axios.post(redisServerApiBaseurl + "/oracles", oracles).then(res => {
    if (res.result === "success") {
      return true;
    } else {
      return false;
    }
  });
}