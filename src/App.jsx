import { useState, useEffect } from "react";
import ToDoList from "./components/Todolist.jsx";
import { nanoid } from "nanoid";

function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("my-key")) || [
      { text: "a", key: nanoid() },
      { text: "b", key: nanoid() },
      { text: "c", key: nanoid() },
      { text: "d", key: nanoid() },
    ]
  );
  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("my-key", JSON.stringify(list));
  }, [list]);

  function addedList() {
    if (value.length > 0) {
      setList([...list, { text: value, key: nanoid() }]);
      setValue("");
    }
  }

  function deleteList(i) {
    const newList = list.filter((lis) => lis.key !== i);
    setList(newList);
  }

  return (
    <div className="container">
      <ToDoList
        list={list}
        setList={setList}
        addedList={addedList}
        value={value}
        setValue={setValue}
        deleteList={deleteList}
        key={list.key}
      />
    </div>
  );
}

export default App;
