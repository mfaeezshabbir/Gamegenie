import Header from "./Header/Header";

function Layout({ children, activePage }) {
  return (
    <div>
      <Header activePage={activePage} />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
