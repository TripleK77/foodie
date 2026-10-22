// AppRouter.tsx
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { Layout } from "./Layout";
import { Orders } from "./Orders";
import { Addons } from "./Addons";
import { MenuCategories } from "./MenuCategories";
import { Menus } from "./Menus";
import { AddonCategories } from "./AddonCategories";
//import { Locations } from "./Locations";
import { Settings } from "./Settings";

function Tables() {
  return <h1>Tables page</h1>;
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/menu-categories" element={<MenuCategories />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/addon-categories" element={<AddonCategories />} />
          <Route path="/addons" element={<Addons />} />
          <Route path="/tables" element={<Tables />} />
          {/* <Route path="/locations" element={<Locations />} /> */}
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
