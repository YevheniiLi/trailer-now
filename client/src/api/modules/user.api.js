import privateClient from "../client/private.client";
// import publicClient from "../client/public.client";
import "whatwg-fetch";

const userEndpoints = {
  signin: "/user/signin",
  signup: "/user/signup",
  getInfo: "/user/info",
  passwordUpdate: "/user/update-password",
};

const userApi = {
  signin: async ({ username, password }) => {
    try {
      const response = await fetch(userEndpoints.signin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      return { data };
    } catch (err) {
      return { error: err };
    }
  },

  signup: async ({ username, password, confirmPassword, displayName }) => {
    try {
      const response = await fetch(userEndpoints.signup, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          confirmPassword,
          displayName,
        }),
      });
      const data = await response.json();
      return { data };
    } catch (err) {
      return { error: err };
    }
  },

  getInfo: async () => {
    try {
      const response = await fetch(privateClient + userEndpoints.getInfo, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return { data };
    } catch (err) {
      return { error: err };
    }
  },

  passwordUpdate: async ({ password, newPassword, confirmPassword }) => {
    try {
      const response = await fetch(privateClient + userEndpoints.passwordUpdate, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          newPassword,
          confirmPassword,
        }),
      });
      const data = await response.json();
      return { data };
    } catch (err) {
      return { error: err };
    }
  },
};

export default userApi;
