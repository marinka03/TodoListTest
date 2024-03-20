import TaskForm from 'components/TaskForm';
import style from './TodoSection.module.css';
import TaskList from 'components/TaskList';
import { useLocation } from 'react-router-dom';
import StatusFilter from 'components/StatusFilter';

function TodoSection() {
  const {pathname} = useLocation();
  return (
    <section className={style.section}>
      <StatusFilter />
      {pathname === '/HomePage/create' && <TaskForm />}
      <TaskList />
    </section>
  );
}

export default TodoSection;
