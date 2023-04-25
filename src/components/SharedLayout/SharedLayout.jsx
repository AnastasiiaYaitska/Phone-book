import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
