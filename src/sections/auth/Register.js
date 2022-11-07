import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//
import AuthCard from "../../components/AuthCard";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { MyContext } from "../../context/Context";

export default function Register() {
  const {
    state: {
      user: { user, setUser },
    },
    func: { userRegister },
  } = useContext(MyContext);

  return (
    <>
      <AuthCard>
        <div className="input__wrapper d-flex flex-column gap-4">
          <h1 className="text-center fw-bolder text-uppercase">Register</h1>
          <Input
            type="text"
            label="Username"
            placeholder="Username yoki ism kiriting..."
            value={user.name}
            onChange={(e) => {
              setUser((p) => ({ ...p, name: e.target.value }));
            }}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Parol kiriting..."
            value={user.password}
            onChange={(e) => {
              setUser((p) => ({ ...p, password: e.target.value }));
            }}
          />
          <Button
            type="button"
            btnValue="Register"
            bgColor="#017fe6"
            color="#fcfcfc"
            onClick={ userRegister}
          />
        </div>
        <div className="link__wrapper mt-1 text-sm-end">
          <p className="m-0">Ro'yxatdan o'tganmisiz ?</p>
          <Link to={"/login"}>
            {" "}
            <p className="">Login</p>{" "}
          </Link>
        </div>
      </AuthCard>
    </>
  );
}
