import Add from "./Add";

export default function ToDoList({
  list,
  setList,
  addedList,
  value,
  setValue,
  deleteList,
}) {
  return (
    <div className="todolist">
      <Add addList={addedList} value={value} setValue={setValue} />
      {list.map((lis) => (
        <div className="lists" key={lis.key}>
          {lis.text}
          <div>
            <button className="remove" onClick={() => deleteList(lis.key)}>
              🚮
            </button>{" "}
            <button>📆</button>
          </div>
        </div>
      ))}
    </div>
  );
}
