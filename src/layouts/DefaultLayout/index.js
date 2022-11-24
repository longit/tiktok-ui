import Header from './Header';
import Sidebar from './Sidebar/Sidebar';
import './DeafaultLayout.scss';

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="b__container">
                <Sidebar />
                <div className="b__content">{children}</div>
            </div>
        </div>
    );
}
