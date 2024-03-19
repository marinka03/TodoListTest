import TaskForm from 'components/TaskForm';
import style from './TodoSection.module.css';
import TaskList from 'components/TaskList';
import { useLocation } from 'react-router-dom';

function TodoSection() {
  const {pathname} = useLocation();
  console.log(pathname)
  return (
    <section className={style.section}>
      {pathname === '/HomePage/create' && <TaskForm />}
      <TaskList />
    </section>
  );
}

export default TodoSection;
