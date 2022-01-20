import axios from "axios";

const URL_BASE = "https://fakestoreapi.com/";

const GetProductsAPI = async () => {
    const response = await axios.get(URL_BASE + "/products/category/electronics");
    return response.data;
};
export { GetProductsAPI };
