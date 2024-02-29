import Header from 'components/Header';
import StatusFilter from 'components/StatusFilter';
import TodoSection from 'components/TodoSection';
import { useLocation } from 'react-router-dom';

function HomePage() {
  const path = useLocation();
  console.dir(path);
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
