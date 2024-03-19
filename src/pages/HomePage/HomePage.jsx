import Header from 'components/Header';
import StatusFilter from 'components/StatusFilter';
import TodoSection from 'components/TodoSection';

// const getInitialContacts = initialTasks => {
//   const storageContacts = localStorage.getItem('todos');
//   const parsedContacts = JSON.parse(storageContacts);
//   if (storageContacts) {
//     return parsedContacts;
//   }
//   localStorage.setItem('todos', JSON.stringify(initialTasks))
//   return initialTasks;
// };

function HomePage() {
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
