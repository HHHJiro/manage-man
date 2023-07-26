import style from "./index.module.scss"
//直接导入相当于全局引用，不推荐
import { Button, Space } from 'antd';
import {UpCircleOutlined} from '@ant-design/icons';

function Comp() {
    return (

        <div className={style.box}>
            <Space wrap>
                <Button type="primary">Primary</Button>
            </Space>
            <UpCircleOutlined style={{fontSize:"40px" ,color:"blue"}}/>
        </div>
    );
}
export default Comp;
