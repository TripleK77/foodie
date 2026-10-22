import { Layout } from "./Layout";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function Settings(){
    return (
        <div>
            <Topbar />
            <div>
            <Sidebar/>
            <h1>Settings page</h1>
            </div>
        </div>
    )
}