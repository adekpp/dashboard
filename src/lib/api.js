import axios from "axios";
import { ref } from "vue";

const getListings = async () => {
  try {
    const { meta, data } = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=4",
      {
        headers: {
          "X-CMC_PRO_API_KEY": import.meta.env.VITE_API_KEY,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const getMetaData = async (id) => {
  try {
    const { meta, data } = await axios.get(
      "https://pro-api.coinmarketcap.com/v2/cryptocurrency/info",
      {
        params: {
          id: id.join(","),
        },
        headers: {
          "X-CMC_PRO_API_KEY": import.meta.env.VITE_API_KEY,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useCrypto = async () => {
  let data = ref([]);
  const id = [];

  const listings = await getListings();
  if (listings.data) {
    listings.data.forEach((crypto) => id.push(crypto.id));
  }
  const meta = await getMetaData(id);
  const keys = Object.keys(meta.data);
  const metaData = keys.map((key) => meta.data[key]);

  data.value = listings.data.concat(metaData).reduce((result, current) => {
    const existing = result.find((obj) => obj.name === current.name);
    if (existing) {
      Object.assign(existing, current);
    } else {
      result.push(current);
    }
    return result;
  }, []);

  return data;
};
