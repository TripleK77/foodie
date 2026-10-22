
import React, { useState } from "react";
import { Menu } from "./Content";

interface Props {
  menus: Menu[];
  setMenus: React.Dispatch<React.SetStateAction<Menu[]>>;
}

export function NewMenu({ menus, setMenus }: Props) {
  const defaultMenu = {
    id: 0,
    name: "",
    price: 0,
    isAvailable: true,
  };

  const [newMenu, setNewMenu] = useState<Menu>(defaultMenu);

  const handleCreateMenu = () => {
    const updatedMenus = [
      ...menus,
      {
        ...newMenu,
        id: Date.now(),
      },
    ];

    setMenus(updatedMenus);
    localStorage.setItem("menus", JSON.stringify(updatedMenus));
    setNewMenu(defaultMenu);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 250,
      }}
    >
      <input
        type="text"
        placeholder="Name"
        value={newMenu.name}
        style={{ height: 30, marginBottom: 10 }}
        onChange={(evt) =>
          setNewMenu({
            ...newMenu,
            name: evt.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Price"
        value={newMenu.price || ""}
        style={{ height: 30, marginBottom: 10 }}
        onChange={(evt) =>
          setNewMenu({
            ...newMenu,
            price: Number(evt.target.value),
          })
        }
      />

      <div>
        <input
          type="checkbox"
          checked={newMenu.isAvailable}
          onChange={(evt) => {
            console.log(evt.target.checked);
            setNewMenu({
              ...newMenu,
              isAvailable: evt.target.checked,
            });
          }}
        />
        <span>Available</span>
      </div>

      <button
        style={{
          marginTop: 10,
          width: "fit-content",
        }}
        onClick={handleCreateMenu}
      >
        Create
      </button>
    </div>
  );
}
