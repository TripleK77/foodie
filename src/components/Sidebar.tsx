// Sidebar.tsx
import { Link } from "react-router-dom";

export function Sidebar() {
  const navItems = [
    { label: "Orders", path: "/" },
    { label: "Menus", path: "/menus" },
    { label: "Menu Categories", path: "/menu-categories" },
    { label: "Addons", path: "/addons" },
    { label: "Addon Categories", path: "/addon-categories" },
    { label: "Tables", path: "/tables" },
    { label: "Locations", path: "/locations" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <aside style={{ width: "220px", padding: "16px", borderRight: "1px solid #ddd" }}>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {navItems.map((item) => (
          <li key={item.path} style={{ marginBottom: "12px" }}>
            <Link
              to={item.path}
              style={{
                textDecoration: "none",
                color: "#1d3557",
                fontWeight: 500,
                display: "block",
                padding: "8px",
                borderRadius: "4px",
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}