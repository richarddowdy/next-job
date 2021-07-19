import axios from "axios";
import { TOKEN_STORAGE_ID } from "./pages/_app";

export const BASE_API_URL = process.env.BASE_API_URL || "http://localhost:3000/api"; // i'll set BASE_API_URL in produciton env

class API {
  static async request(endpoint, params = {}, verb = "get") {
    let _token = localStorage.getItem(TOKEN_STORAGE_ID);

    console.debug("API Call:", endpoint, params, verb);

    let q;

    if (verb === "get") {
      q = axios.get(`${BASE_API_URL}/${endpoint}`, {
        params: { _token, ...params },
      });
    } else if (verb === "post") {
      q = axios.post(`${BASE_API_URL}/${endpoint}`, { _token, ...params });
    } else if (verb === "patch") {
      q = axios.patch(`${BASE_API_URL}/${endpoint}`, { _token, ...params });
    }

    try {
      return (await q).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompanies(search) {
    let res = await this.request("companies", { search });
    return res.companies;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getJobs(search) {
    let res = await this.request("jobs", { search });
    return res.jobs;
  }

  static async applyToJob(id) {
    let res = await this.request(`jobs/${id}/apply`, {}, "post");
    return res.message;
  }

  static async login(data) {
    let res = await this.request(`login`, data, "post");
    // console.log("LOGGING IN", res);
    return res.token;
  }

  static async register(data) {
    let res = await this.request(`users`, data, "post");
    // console.log("REGISTERING NEW USER", res);
    return res.token;
  }

  static async getCurrentUser(username, getComapnyHandles = false) {
    if (getComapnyHandles) {
      const companyHandles = await this.request(`companies`, { onlyHandles: true });
      const userRes = await this.request(`users/${username}`);
      res = { ...userRes.user, companyHandles: companyHandles.companies };
      console.log(res);
      return res;
    }
    let res = await this.request(`users/${username}`);
    // console.log("RETRIEVING CURRENT USER", res.user);
    return res.user;
  }

  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}

export default API;

// // TODO - Use in top level component -- _app.js
// useEffect(() => {
//   async function getCurrentUser() {
//     try {
//       let { username } = decode(token);
//       let currentUser = await JoblyApi.getCurrentUser(username);
//       setCurrentUser(currentUser);
//     } catch (err) {
//       setCurrentUser(null);
//     }
//     setInfoLoaded(true);
//   }
//   setInfoLoaded(false);
//   getCurrentUser();
// }, [token]);

// const handleLogOut = () => {
//   setCurrentUser(null);
//   setToken(null);
// };
