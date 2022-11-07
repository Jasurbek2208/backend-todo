import React, { createContext, useEffect, useState } from "react";
import { myAxios } from "../service/axios";

export const MyContext = createContext();

export default function Context({ children }) {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const [auth, setAuth] = useState({
    token: null,
    loading: false,
    isAuth: false,
    user: null,
  });

  //
  useEffect(() => {
    userMe();
  }, []);

  async function authWatcher(res) {
    setAuth((p) => ({ ...p, isAuth: true, ...res }));
    localStorage.setItem("TOKEN", res.token);
  }

  async function userRegister() {
    setAuth((p) => ({ ...p, loading: true }));

    try {
      const res = await myAxios.post("/auth/register", {
        name: user.name,
        password: user.password,
      });
      authWatcher(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setAuth((p) => ({ ...p, loading: false }));
      setUser({
        name: "",
        password: "",
      });
    }
  }

  async function userLogin() {
    setAuth((p) => ({ ...p, loading: true }));
    try {
      const res = await myAxios.post("/auth/login", user);
      authWatcher(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setAuth((p) => ({ ...p, loading: false }));
      setUser({
        name: "",
        password: "",
      });
    }
  }

  async function userMe() {
    setAuth((p) => ({ ...p, loading: true }));
    try {
      const res = await myAxios.get("/auth/userme");
      setAuth((p) => ({ ...p, isAuth: true, ...res.data }));
    } catch (error) {
      localStorage.removeItem("TOKEN");
    } finally {
      setAuth((p) => ({ ...p, loading: false }));
    }
  }

  return (
    <MyContext.Provider
      value={{
        state: {
          auth: { auth, setAuth },
          user: { user, setUser },
        },
        func: {
          userRegister,
          userLogin,
        },
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
