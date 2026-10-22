
import type { Menu } from "./Content";

interface Props {
    menu: Menu;
}

export function MenuItem({ menu }: Props) {
    const { name, price, isAvailable } = menu;

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E63946",
                width: 150,
                height: 120,
                flexDirection: "column",
                borderRadius: 5,
                color: "#F1FAEE",
                textAlign: "center",
                boxSizing: "border-box",
                padding: 10,
            }}
        >
            <div>{name}</div>

            <div style={{ fontSize: 14 }}>
                {price} kyat
            </div>

            <div style={{ fontSize: 14 }}>
                {isAvailable
                    ? "Available"
                    : "Not Available"}
            </div>
        </div>
    );
}
