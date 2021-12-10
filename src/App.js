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
    const ele = document.getElementById('input-todo');
    if (ele.dataset.id !== '') {
      const id = ele.dataset.id;
      const data = todoList.map((x) => 
        x.id === id ? {...x, name: inputText} : x
      )
      setTodoList(data);
    } else {
      setTodoList([
          { id: v4(), name: inputText, isComplete: false },
          ...todoList,
      ]);
    }
    ele.dataset.id = '';
    setInputText('');
  },[inputText, todoList]);

  const onClickChecked = useCallback((id) => {
    const data = todoList.map((x) => 
      x.id === id ? { ...x, isComplete: true } : x
    )
    setTodoList(data);
  },[todoList]);

  const onClickEditTodo = useCallback((id, e) => {
    const text = todoList.filter((x) => 
      x.id === id ? x : ''
    )
    const ele = document.getElementById('input-todo');
    ele.dataset.id = text[0].id;
    setInputText(text[0].name);
  },[todoList]);

  const onClickRemoveTodo = useCallback((id, e) => {
    const data = todoList.filter((x) => 
      x.id !== id
    )
    setTodoList(data);
  },[todoList]);



  return (
    <>
      <p>Đây là app Todo</p>
      <input id="input-todo" data-id="" name="text-todo" placeholder="Nhập công việc cần làm..." value={inputText} onChange={onChangeInput} />
      <button className={!inputText ? 'disable' : ""} onClick={onBtnClick}>Add</button>
      <TodoList 
        todoList={todoList} 
        onClickChecked={onClickChecked} 
        onClickEditTodo={onClickEditTodo} 
        onClickRemoveTodo={onClickRemoveTodo}
      />
    </>
  );
}

