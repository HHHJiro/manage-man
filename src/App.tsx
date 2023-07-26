// import { useState } from 'react'
import {useRoutes, Link} from "react-router-dom"
import routers from "./router";

function App() {
    // const [count, setCount] = useState(0)
    const outlet = useRoutes(routers);

    return (

        <div className="App">

            <Link to="/home">home</Link>
            <br/>
            <Link to="/about">about</Link>
            //占位符 用于显示路由组件 类似于窗口
            {outlet}
        </div>


    )
}

export default App
