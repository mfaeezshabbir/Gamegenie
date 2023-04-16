import Header from "./Header/Header";
import Nav from "./Nav";

function Layout({ children, activePage }) {
  return (
    <div>
      <Header activePage={activePage} />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
