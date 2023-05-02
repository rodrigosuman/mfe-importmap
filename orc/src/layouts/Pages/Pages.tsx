import { NavLink, Outlet } from "react-router-dom";
import { AppRoutes } from "../../constants/appRoutes.constants";

const PagesLayout: React.FC = () => {
  return (
    <>
      <nav>
        <NavLink to={AppRoutes.HOME}>Home</NavLink>
        <NavLink to={AppRoutes.HOTEIS}>Hotéis</NavLink>
        <NavLink to={AppRoutes.PRODUTOS}>Produtos</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default PagesLayout;
