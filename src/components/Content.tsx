import { MenuItem } from "./MenuItem";
import { NewMenu } from "./NewMenu";
import { useState } from "react";

export interface Menu {
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;
}

export function Content() {
    // Read from localStorage if already saved, otherwise empty array
    const [menus, setMenus] = useState<Menu[]>(() => {
        const savedMenus = localStorage.getItem("menus");
        return savedMenus ? JSON.parse(savedMenus) : [];
    });

    return (
        <div
            style={{
                width: "100%",
                padding: 10,
                backgroundColor: "#F1FAEE",
                minHeight: "100vh",
                boxSizing: "border-box",
            }}
        >
            <h1>Menu</h1>

            <div>
                {/* Pass both menus and setMenus here */}
                <NewMenu menus={menus} setMenus={setMenus} />

                <div
                    style={{
                        marginTop: 30,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 10,
                    }}
                >
                    {menus.map((menu, index) => {
                        return (
                            <MenuItem
                                key={index}
                                menu={menu}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}