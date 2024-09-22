import React from "react"
import PathConstants from "./pathconstants"

  // Lazy so we dont load all the components at once, instead only load when the link is clicked
const Home = React.lazy(() => import("../home.jsx"));
const LoginRegister = React.lazy(() => import("../loginregister.jsx"));
const Orders = React.lazy(() => import("../orders.jsx"));
const Vehicles = React.lazy(() => import("../vehicles.jsx"));

const Routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.LOGINREGISTER, element: <LoginRegister /> },
    { path: PathConstants.VEHICLES, element: <Vehicles /> },
    { path: PathConstants.ORDERS, element: <Orders /> },
]

export default Routes