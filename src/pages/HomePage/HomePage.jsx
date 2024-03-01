import Header from 'components/Header';
import StatusFilter from 'components/StatusFilter';
import TodoSection from 'components/TodoSection';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import { selectTasks } from '../../redux/selectors';
// import { AllTasks } from '../../redux/tasksSlice';

const getInitialContacts = initialTasks => {
  const storageContacts = localStorage.getItem('todos');
  const parsedContacts = JSON.parse(storageContacts);
  if (storageContacts) {
    return parsedContacts;
  }
  localStorage.setItem('todos', JSON.stringify(initialTasks))
  return initialTasks;
};

function HomePage() {
  const initialTasks = useSelector(selectTasks);
//   const dispatch = useDispatch();
//  const payload = getInitialContacts(initialTasks)
//  console.log({type: "tasks/AllTasks", payload})
  // useEffect(() => {
  //   dispatch({type: "tasks/AllTasks", payload})  // некоректно працює
  // });
 useEffect(()=>{
  getInitialContacts(initialTasks)
 })
  return (
    <>
      <Header />
      <main>
        <StatusFilter />
        <TodoSection />
      </main>
    </>
  );
}

export default HomePage;
