import React from "react";
import styled from "styled-components";
import { myAxios } from "../service/axios";

//
import Button from "./Button";
import Input from "./Input";

export default function Modal({
  setIsOpen,
  setTodos,
  todos,
  getAllTodos,
  delLoad,
}) {
  async function putTodo() {
    try {
      const res = await myAxios.put("/api/todo", {
        id: todos._id,
        name: todos.name,
        color: todos.color,
      });
      getAllTodos();
    } catch (error) {
      getAllTodos();
    }
  }

  return (
    <StyledModal>
      <main className="modal-main">
        <h1>Edit todo</h1>
        <Input
          type="text"
          value={todos.name}
          onChange={(e) => {
            setTodos((p) => ({ ...p, name: e.target.value }));
          }}
        />
        <input
          type="color"
          className="inpColor form-carousel-control-next-icon mt-3"
          onChange={(e) => {
            setTodos((p) => ({ ...p, color: e.target.value }));
          }}
        />
        <div className="btn-wrapper text-end">
          <Button
            type="button"
            bgColor="#ffd000"
            color="#000"
            width="30%"
            btnValue="Edit"
            btnDis={delLoad ? "btn disabled" : ""}
            onClick={() => {
              putTodo();
              setIsOpen(false);
            }}
          />
          <Button
            type="button"
            bgColor="#ff0000"
            color="#fff"
            width="50%"
            btnValue="Close"
            btnDis={delLoad ? "btn disabled" : ""}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
      </main>
    </StyledModal>
  );
}

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffffbc;

  .modal-main {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    min-width: 318px;
    min-height: 240px;
    padding: 30px 26px;

    box-shadow: 5px 8px 10px 0px #a3a3a3;
    background-color: #fcfcfc;
    transform: translate(-50%, -50%);

    h1 {
      color: blue;
      font-weight: 700;
      margin-bottom: 22px;
    }

    .btn-wrapper {
      width: 100%;
      height: 90px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
    }

    .inpColor {
      cursor: pointer;
    }
  }
`;
