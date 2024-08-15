
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
