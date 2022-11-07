import React, { useContext } from "react";
import { Link } from "react-router-dom";

//
import AuthCard from "../../components/AuthCard";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { MyContext } from "../../context/Context";

export default function Login() {
  const {
    state: {
      user: { user, setUser },
    },
    func: { userLogin },
  } = useContext(MyContext);

  return (
    <>
      <AuthCard>
        <div className="input__wrapper d-flex flex-column gap-4">
          <h1 className="text-center fw-bolder text-uppercase">Login</h1>
          <Input
            type="text"
            label="Username"
            placeholder="Username yoki ismingizni kiriting..."
            value={user.name}
            onChange={(e) => {
              setUser((p) => ({ ...p, name: e.target.value }));
            }}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Parolni kiriting..."
            value={user.password}
            onChange={(e) => {
              setUser((p) => ({ ...p, password: e.target.value }));
            }}
          />
          <Button
            type="button"
            btnValue="Login"
            bgColor="#017fe6"
            color="#fcfcfc"
            onClick={userLogin}
          />
        </div>
        <div className="link__wrapper mt-1 text-sm-end">
          <p className="m-0">Ro'yxatdan hali o'tmaganmisiz ?</p>
          <Link to={"/register"}>
            {" "}
            <p className="">Register</p>{" "}
          </Link>
        </div>
      </AuthCard>
    </>
  );
}
