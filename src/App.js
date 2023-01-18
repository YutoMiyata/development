import './App.css';
import {useState} from "react";

const App = () => {
  // state
  const [todoText,setTodoText] = useState("");
  const [incompleteTodoText,setIncompleteTodoText] = useState([]);
  const [completeTodoText,setCompleteTodoText] = useState([])

  // function
  const onChangeTodoText = (e) => {setTodoText(e.target.value)
  }

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodoText,todoText];
    setIncompleteTodoText(newTodos);
    setTodoText("");
  }
  
  const onClickComplete = (index) => {
    const newInCompleteTodos = [...incompleteTodoText];
    newInCompleteTodos.splice(index,1)
    setIncompleteTodoText(newInCompleteTodos);

    const newCompleteTodos = [...completeTodoText,incompleteTodoText[index]]
    setCompleteTodoText(newCompleteTodos)
  }

  const onClickDelete = (index) => {
    const newToDos = [...incompleteTodoText];
    newToDos.splice(index,1);
    setIncompleteTodoText(newToDos);
  }

  const OnclickBack = (index) => {
    const completeToDos = [...completeTodoText];
    completeToDos.splice(index,1);
    setCompleteTodoText(completeToDos);

    const inCompleteToDos = [...incompleteTodoText,completeTodoText[index]];
    setIncompleteTodoText(inCompleteToDos);

  }

  return (
    <div className="App">
      {/* 書き込み */}
      <div className="input-area">
          <input 
          value={todoText}
          placeholder="ToDoを書き込んで!"
          onChange={onChangeTodoText} />
          <button onClick={onClickAdd}>追加</button>
      </div>

      {/* 未完了のtoDo */}
      <div className="incomplete-area">
        <p className="title">--未完了のtoDo--</p>
        <ul>
            {incompleteTodoText.map((incompleteText,index) => {
              return(
                <>
                <li>
                  <div key={incompleteText} className="incomplete-text">
                    <p>{incompleteText}</p>
                    <button onClick={() => onClickComplete(index)}>完了</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                  </div>
                </li>
                </>
              )

            })}
        </ul>
      </div>

      {/* 完了のToDo */}
      <div className="complete-area">
        <p className="title">--完了のtoDo--</p>
        <ul>
            {completeTodoText.map((completeText,index) =>{
              return(
                <>
                  <li>
                    <div className="complete-text">
                      <p>{completeText}</p>
                      <button onClick={() => OnclickBack(index)}>戻る</button>
                    </div>
                  </li>
                </>
              )
            })
          }
          </ul>
      </div>

    </div>
  );
}

export default App;
