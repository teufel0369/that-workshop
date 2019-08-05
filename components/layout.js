import 'bootstrap/dist/css/bootstrap.css'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
};

export default Layout;