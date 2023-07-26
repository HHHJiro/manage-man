// import { useState } from 'react'
import {useRoutes} from "react-router-dom"
import routers from "./router";

function App() {
    // const [count, setCount] = useState(0)
    const outlet = useRoutes(routers);

    return (

        <div >
            {outlet}
        </div>


    )
}

export default App
