import TaskForm from 'components/TaskForm';
import style from './TodoSection.module.css';
import TaskList from 'components/TaskList';

function TodoSection() {
  return (
    <section className={style.section}>
      <TaskForm />
      <TaskList />
    </section>
  );
}

export default TodoSection;
