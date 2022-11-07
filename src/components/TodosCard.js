import React from "react";
import styled, { css } from "styled-components";
import { myAxios } from "../service/axios";

//
import Button from "./Button";

export default function TodosCard({
  todo,
  onClick,
  setTodos,
  delLoad,
  getDelete,
  getAllTodos,
}) {
  async function todoToggleStatus(id) {
    try {
      const res = await myAxios.get("/api/todo/toggleComplete/" + id);
    } catch (error) {
    } finally {
      getAllTodos();
    }
  }

  return (
    <StyledTodosCard todo={todo}>
      <div
        className="m-0 myChekbox"
        onClick={() => {
          setTodos((p) => ({ ...p, isCompleted: !todo.isCompleted }));
          todoToggleStatus(todo._id);
        }}
      >
        <span></span>
      </div>
      <p className="m-0">{todo.name}</p>
      <div className="d-flex align-items-center gap-3">
        <Button
          btnValue="Edit"
          bgColor="#ffd000"
          btnDis={delLoad ? "btn disabled" : ""}
          onClick={() => {
            onClick();
            setTodos(todo);
          }}
        />
        <Button
          btnValue="Delete"
          bgColor="#ff0000"
          color="#fff"
          btnDis={delLoad ? "btn disabled" : ""}
          onClick={() => getDelete()}
        />
      </div>
    </StyledTodosCard>
  );
}

const StyledTodosCard = styled.div`
  width: 100%;
  min-height: 68px;
  padding: 10px 14px;
  ${({ todo }) => {
    return css`
      background-color: ${todo.color};
    `;
  }};
  border: 1px solid #0052b1a9;
  border-radius: 8px;
  box-shadow: 5px 8px 10px 0px #a3a3a3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  row-gap: 30px;
  flex-wrap: wrap;

  .myChekbox {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #181818;
    box-shadow: 0px 0px 14px 3px #fcfcfc;
    background-color: #fff;
    position: relative;

    & > span {
      position: absolute;
      top: -12px;
      left: 4px;
      width: 16px;
      height: 25px;
      border-bottom: 0px solid #000;
      border-right: 0px solid #000;
      transform: rotate(44deg);
      transition: 0.5s;

      ${({ todo }) => {
        if (todo.isCompleted) {
          return css`
            border-bottom: 3px solid #000;
            border-right: 3px solid #000;
          `;
        }
      }};
    }
  }
`;
