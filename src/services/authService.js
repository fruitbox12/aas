import jwtDecode from "jwt-decode";
import axios from "src/utils/axios";
import { onboard } from "../services/web3Service";
import jwt from "jsonwebtoken";

const JWT_SECRET = "devias-top-secret-key";
const JWT_EXPIRES_IN = "2 days";

const db = {
  user: {
    avatar: "/static/images/avatars/avatar_3.png",
    bio: "Sales Manager",
    firstName: "Katarina",
    lastName: "Smith",
  },
};

class AuthService {
  setAxiosInterceptors = ({ onLogout }) => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          this.setSession(null);

          if (onLogout) {
            onLogout();
          }
        }

        return Promise.reject(error);
      }
    );
  };

  handleAuthentication() {
    // const accessToken = this.getAccessToken();

    // if (!accessToken) {
    //   return;
    // }

    // if (this.isValidToken(accessToken)) {
    //   this.setSession(accessToken);
    // } else {
    //   this.setSession(null);
    // }
    const accessToken = JSON.parse(this.getAccessToken());
    // console.log(accessToken)
    if (!accessToken) {
      return;
    }

    this.setSession(accessToken);
  }

  loginWithEmailAndPassword = (email, password) =>
    new Promise((resolve, reject) => {
      axios
        .post("/api/account/login", { email, password })
        .then((response) => {
          if (response.data.user) {
            this.setSession(response.data.accessToken);
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

  loginWithMetaMask = () =>
    new Promise((resolve, reject) => {
      const userWallet = onboard.getState();
      const payload = { ...db.user, ...userWallet };

      const accessToken = jwt.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
      });

      try {
        this.setSession(accessToken);
        resolve(payload);
      } catch (error) {
        console.log(error);
        reject(error);
      }

      // note: web3 is injecting a session, we need to take it and save it to the store.
      // something like the below. axios.post is pulling a mock account so it's not really doing anything
      // user.session = web3.session token

      // axios.post('/api/account/login',{})
      //   .then((response) => {
      //     if (response.data.user) {
      //       this.setSession(response.data.accessToken);
      //       resolve(response.data.user);
      //     } else {
      //       reject(response.data.error);
      //     }
      //   })
      //   .catch((error) => {
      //     reject(error);
      //   });
    });

  loginInWithToken = () =>
    new Promise((resolve, reject) => {
      try {
        // const { Authorization } = axios.defaults.headers.common;
        // const accessToken = Authorization.split(' ')[1];

        // const user = jwt.verify(accessToken, JWT_SECRET);
        // console.log(user)

        const user = JSON.parse(this.getAccessToken());

        resolve(user);
      } catch (error) {
        reject("Missing or invalid authorization token");
      }

      // axios.get('/api/account/me')
      //   .then((response) => {
      //     // console.log(response)
      //     if (response.data.user) {
      //       resolve(response.data.user);
      //     } else {
      //       reject(response.data.error);
      //     }
      //   })
      //   .catch((error) => {
      //     reject(error);
      //   });
    });

  logout = () => {
    this.setSession(null);
  };

  setSession = (accessToken) => {
    if (accessToken) {
      // localStorage.setItem('accessToken', accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem("accessToken");
      delete axios.defaults.headers.common.Authorization;
    }
  };

  getAccessToken = () => localStorage.getItem("accessToken");

  isValidToken = (accessToken) => {
    if (!accessToken) {
      return false;
    }

    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  };

  isAuthenticated = () => !!this.getAccessToken();
}

const authService = new AuthService();

export default authService;
