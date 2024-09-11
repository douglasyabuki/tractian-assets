import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <section className="layout">
      <Outlet />
    </section>
  );
};
