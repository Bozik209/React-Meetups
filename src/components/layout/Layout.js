import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

const Layout = (prpos) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{prpos.children}</main>
    </div>
  );
};

export default Layout;
