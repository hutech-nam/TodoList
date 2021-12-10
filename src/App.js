import TodoList from './component/TodoList';
import { useCallback, useState } from 'react';
import { v4 } from 'uuid';


export default function App() {

  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState('');

  const onChangeInput = useCallback((e) => {
      setInputText(e.target.value);
  },[]);

  const onBtnClick = useCallback((e) => {
    setTodoList([
        { id: v4(), name: inputText, isComplete: false },
        ...todoList,
    ]);
    setInputText('');
  },[inputText, todoList]);

  const onClickChecked = useCallback((id) => {
    const data = todoList.map((x) => 
      x.id === id ? { ...x, isComplete: true } : x
    )
    setTodoList(data);
  },[todoList]);



  return (
    <>
      <p>Đây là app Todo</p>
      <input name="text-todo" placeholder="Nhập công việc cần làm..." value={inputText} onChange={onChangeInput} />
      <button className={!inputText ? 'disable' : ""} onClick={onBtnClick}>Add</button>
      <TodoList todoList={todoList} onClickChecked={onClickChecked} />
    </>
  );
}

