import Nav from "./Nav";

function Layout({ children, activePage }) {
  return (
    <div>
      < activePage={activePage} />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
