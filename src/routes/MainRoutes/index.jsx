import React from "react";
import { useRoutes, Outlet } from "react-router-dom";
import PageRoutes from "./Pages";

export default function MainRoutes(props) {
    const routes = useRoutes([{ path: "", element: <PageRoutes /> }, [Outlet]]);
    return <div className="">{routes}</div>;
}
