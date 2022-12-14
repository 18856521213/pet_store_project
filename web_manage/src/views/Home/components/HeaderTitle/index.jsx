import React from 'react'
import {useNavigate} from "react-router-dom"
import style from "./index.module.css"
import { UserOutlined, LogoutOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Space, Modal } from 'antd';
export default function HeaderTitle() {
  const navigate = useNavigate();
  //基本信息操作按钮
  const baseInfoHandle = () => {
    console.log(222)
  }
  const onOkHandle = () => {
    navigate("/login")
  }
  const logoutHandle = () => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Bla bla ...',
      okText: '确认',
      cancelText: '取消',
      onOk: {onOkHandle},
    });
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
        <Button type="link" danger icon={<LogoutOutlined />} onClick={logoutHandle}>退出登录</Button>
      )
    }
  ]
  return (
    <>
      <div className={style.box}>
        <Dropdown menu={{items}}>
          <Space>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span className={style.user_name}>张三</span>
          </Space>
        </Dropdown>
      </div>
    </>
  )
}
