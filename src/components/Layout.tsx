// Layout.tsx
import type { ReactNode } from "react";
import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Topbar />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px" }}>
          {children}
        </main>
      </div>
    </div>
  );
}