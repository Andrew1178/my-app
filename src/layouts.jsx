import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import Header from "./header"

export default function Layout(){
    return(
        <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
}