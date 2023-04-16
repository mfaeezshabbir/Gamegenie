import Nav from "./Nav";

function Layout({ children, activePage }) {
  return (
    <div>
      <Nav activePage={activePage} />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
