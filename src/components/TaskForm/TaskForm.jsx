import { useDispatch } from 'react-redux';
import Button from '../Button';
import style from './TaskForm.module.css';
import { AddTask } from '../../redux/tasksSlice';

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const task = {
      name: form.elements.name.value,
      description: form.elements.description.value,
    };
    dispatch(AddTask(task));
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.field}
        type="text"
        name="name"
        placeholder="Enter task name..."
      />
      <textarea
        className={style.field}
        id="description"
        name="description"
        rows="2"
        cols="33"
        placeholder="Enter task description..."
      ></textarea>
      <Button type="submit" className={style.btn}>
        Add task
      </Button>
    </form>
  );
};

export default TaskForm;