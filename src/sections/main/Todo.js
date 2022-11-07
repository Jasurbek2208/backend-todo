import React, { useEffect, useState } from "react";
import { myAxios } from "../../service/axios";

//
import "bootstrap/dist/css/bootstrap.css";

//
import Input from "../../components/Input";
import Button from "../../components/Button";
import TodosCard from "../../components/TodosCard";
import Modal from "../../components/Modal";

export default function Todo() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState({});
  //
  const [inpValue, setInpValue] = useState("");
  //
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  //for Delete
  const [delLoad, isDelLoad] = useState(false);

  useEffect(() => {
    getAllTodos();
  }, []);

  async function getAllTodos() {
    setIsLoading(true);

    try {
      const res = await myAxios.get("/api/todo");
      setUsers(res.data.data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
      setInpValue("");
      isDelLoad(false);
    }
  }

  async function addTodo() {
    try {
      const res = await myAxios.post("/api/todo", { name: inpValue });
    } catch (error) { }
    getAllTodos();
  }

  async function getDelete(id) {
    isDelLoad(true);

    try {
      const res = await myAxios.delete("/api/todo/" + id);
      setUsers(users.filter((i) => (id === i.id ? false : true)));
    } catch (error) {
      setError(true);
    } finally {
      isDelLoad(false);
      getAllTodos();
    }
  }

  return (
    <div>
      <div className="container">
        <h1
          className="my-4 mb-5"
          style={{
            color: "blue",
          }}
        >
          Todos
        </h1>
        <header>
          <div className="row">
            <div className="col-9">
              <Input
                type="text"
                placeholder="write your todo..."
                value={inpValue}
                onChange={(e) => setInpValue(e.target.value)}
              />
            </div>
            <div className="col-3">
              <Button
                type="button"
                btnValue="Add"
                bgColor="#ffd000"
                color="#fff"
                btnDis={delLoad ? "btn disabled" : ""}
                onClick={(e) => {
                  addTodo(inpValue);
                  isDelLoad((p) => !p);
                }}
              />
            </div>
          </div>
        </header>
        <main className="mt-5 d-flex flex-column gap-5">
          {isLoading ? (
            <h1
              style={{
                textAlign: "center",
              }}
            >
              Loading...
            </h1>
          ) : error ? (
            <p>404 Page Not Found</p>
          ) : (
            users.map((i, idx) => (
              <TodosCard
                key={idx}
                todo={i}
                todos={todos}
                setTodos={setTodos}
                getAllTodos={getAllTodos}
                delLoad={delLoad}
                onClick={() => setIsOpen(true)}
                getDelete={() => getDelete(i._id)}
              />
            ))
          )}
        </main>
      </div>
      {isOpen ? (
        <Modal
          delLoad={delLoad}
          todos={todos}
          setTodos={setTodos}
          setIsOpen={setIsOpen}
          getAllTodos={getAllTodos}
        />
      ) : null}
    </div>
  );
}
