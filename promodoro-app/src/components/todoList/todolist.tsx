import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import * as S from "./todoListStyle";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>(
    () => {
      const storedTodos = localStorage.getItem("todos");
      return storedTodos ? JSON.parse(storedTodos) : [];
    }
  );

  const [newTodo, setNewTodo] = useState<string>("");
  const [todoNum, setTodoNum] = useState<number>(() => {
    const storedTodoNum = localStorage.getItem("todoNum");
    return storedTodoNum ? parseInt(storedTodoNum, 10) : 0;
  });

  const addTodo = () => {
    if (newTodo.trim() === "") {
      alert("You can't add an empty todo");
      return;
    }

    if (todoNum >= 5) {
      const confirmed = window.confirm(
        "You have 5 todos already. Do you want to clear the list?"
      );
      if (confirmed) {
        localStorage.removeItem("todos");
        setTodos([]);
        localStorage.removeItem("todoNum");
        setTodoNum(0);
      }
      return;
    }

    const updatedTodos = [...todos, { text: newTodo, completed: false }];
    setTodos(updatedTodos);
    setNewTodo("");
    setTodoNum(todoNum + 1);
  };

  const createInput = () => {
    const parentElement = document.querySelector(".listWrapper");
    if (parentElement) {
      const inputElement = parentElement.querySelector("input");
      if (inputElement) {
        inputElement.focus();
      } else {
        const newInputElement = document.createElement("input");
        newInputElement.placeholder = "Enter a new todo";
        newInputElement.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            handleEnter(newInputElement.value);
          }
        });
        parentElement.appendChild(newInputElement);
        newInputElement.focus();
      }
    }
  };

  const handleEnter = (value: string) => {
    if (value.trim() !== "") {
      createTodo(value);
      const parentElement = document.querySelector(".listWrapper");
      if (parentElement) {
        const inputElement = parentElement.querySelector("input");
        if (inputElement) {
          parentElement.removeChild(inputElement);
        }
      }
    }
  };
  const createTodo = (value: string) => {
    const updatedTodos = [...todos, { text: value, completed: false }];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleTodoCompletion = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
    setTimeout(() => {
      removeTodo(index);
    }, 3000);
  };

  const removeTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setTodoNum(todoNum - 1);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    localStorage.setItem("todoNum", (todoNum - 1).toString());
  };

  const deleteAllChildren = () => {
    const isWillingToDelete = confirm("Are you shore you want to delete all your tasks");
    if(isWillingToDelete){
      const parentElement = document.querySelector(".listWrapper");
      if (!parentElement) return; // Exit if parent element is null
    
      while (parentElement?.firstChild) {
        parentElement?.removeChild(parentElement?.firstChild);
        localStorage.clear();
      }
    }
  };
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <div>
      <S.menuWrap>
        <S.text textSize={1.3}>Tasks</S.text>
        <DeleteIcon sx={{"&:hover":{cursor:"pointer"}}} onClick={deleteAllChildren}/>
      </S.menuWrap>
      <S.List className="listWrapper">
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodoCompletion(index)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </S.List>
      <S.wrap>
        <S.InputBtn onClick={createInput}>➕ Add Task</S.InputBtn>
      </S.wrap>
    </div>
  );
};

export default TodoList;
