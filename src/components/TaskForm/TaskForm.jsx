import Button from '../Button';
import style from './TaskForm.module.css';

const TaskForm = () => {

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const task = {
      name: form.elements.name.value,
      description: form.elements.description.value,
    };
    const prevValueStorage = JSON.parse(localStorage.getItem('todos'));
    localStorage.setItem('todos', JSON.stringify([...prevValueStorage, task]));
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
