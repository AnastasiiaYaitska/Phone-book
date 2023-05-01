import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/AppBar/AppBar';
import Footer from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
