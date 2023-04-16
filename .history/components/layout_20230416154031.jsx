import Nav from "./Nav";

function Layout({ children, activePage }) {
  return (
    <div>
      <H activePage={activePage} />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
