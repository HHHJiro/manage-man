import React, {lazy} from "react";
import {Navigate} from "react-router-dom"
const Home = lazy(() => import("../view/home"));
const About = lazy(() => import("../view/about"));

//路由配置
//懒加载模式需要给他一个loading 组件

const withSuspense = (e: React.JSX.Element) => {
    return (
        <React.Suspense fallback={<div>loading...</div>}>
            {e}
        </React.Suspense>
    )
}
const routers = [
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        path: "/home",
        element: withSuspense(<Home/>)
    },
    {
        path: "/about",
        element: withSuspense(<About/>)

    }
]

export default routers
