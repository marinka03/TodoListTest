import style from './TaskList.module.css';
import Task from '../Task';

function TaskList() {
  const tasks = JSON.parse(localStorage.getItem('todos')) // Тимчасове рішення
  return (
    <ul className={style.list}>
      {tasks?.map((task, id) => (
        <li className={style.listItem} key={id}>
          <Task task={task} id={id} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
