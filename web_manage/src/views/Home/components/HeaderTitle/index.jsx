import React from 'react'
import style from "./index.module.css"
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Space} from 'antd';
export default function HeaderTitle() {
  //基本信息操作按钮
  const baseInfoHandle = () => {
    console.log(222)
  }
  const items = [
    {
      key: "1",
      label: (
        <Button type="link" icon={<UserOutlined />} onClick={baseInfoHandle}>基本信息</Button>
      )
    },
    {
      key: "2",
      label: (
        <Button type="link" danger icon={<LogoutOutlined />}>退出登录</Button>
      )
    }
  ]
  return (
    <div className={style.box}>
      <Dropdown menu={{items}}>
        <Space>
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          <span className={style.user_name}>张三</span>
        </Space>
      </Dropdown>
      {/* <p className={style.user_name}>张三</p> */}
    </div>
  )
}
