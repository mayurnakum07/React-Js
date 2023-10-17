import React, { useCallback, useContext, useReducer, useState } from "react";
import { createContext } from "react";
import Context from "./context";

const ThemeContext = createContext();
export default function App() {
  const [theme, setTheme] = useState("light");
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todos"]);
  }, [todos]);
  console.log(theme);
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <Button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Toggle Button
      </Button>{" "}
      <br /> <br />
      <Counter />
      <br /> <br />
      <Context todos={todos} addTodo={addTodo} />
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "increment_age": {
      return {
        age: state.age + 1,
        name: state.name,
      };
    }
    case "decrement_age": {
      return {
        age: state.age - 1,
        name: state.name,
      };
    }
    case "change_name": {
      return {
        age: state.age,
        name: action.nextName,
      };
    }

    default: {
      throw Error("Unkhown Action please see and change the age.");
    }
  }
}

const Obj = { name: "Jorn Doe", age: 21 };

function Counter() {
  const [state, dispatch] = useReducer(reducer, Obj);
  console.log("Age", state.age);
  console.log("name", state.name);

  const handleName = (e) => {
    dispatch({
      type: "change_name",
      nextName: e.target.value,
    });
  };

  const handleage = () => {
    dispatch({
      type: "increment_age",
    });
  };

  return (
    <>
      <input value={state.name} onChange={handleName} />
      <button onClick={handleage}>Increment age</button>
      <h2>
        Hello "{state.name}". You Are {state.age}.
      </h2>
    </>
  );
}

function Form() {
  return (
    <>
      <Panel title="Walcome To React">
        <Button>Sign Up</Button>
        <Button>Log In</Button>
      </Panel>
    </>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
