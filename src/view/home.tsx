import style from "../components/test/index.module.scss";
import {Button, Space} from "antd";
import {UpCircleOutlined} from "@ant-design/icons";

function Home() {
    return (

        <div className={style.box}>
            <Space wrap>
                <Button type="primary">这里是home</Button>
            </Space>
            <UpCircleOutlined style={{fontSize:"40px" ,color:"blue"}}/>
        </div>
    );
}
export default Home;
