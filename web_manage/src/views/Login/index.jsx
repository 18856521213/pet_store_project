import React from 'react';
import { useNavigate } from "react-router-dom"
import backImg from "../../assets/img/bageimg.jpg"
import moduleStyle from "./index.module.css"
import { Input, Space, Button, Form} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
export default function Login() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const checkLogin = () => {
    form.validateFields().then(res => {
      sessionStorage.setItem("token", "11111");
      setTimeout(() => {
        navigate("/dataPanel")
      }, 2000)
    }).catch(err => {
      console.log(err)
    })
  }
  const registerHandle = () => {
    navigate("/register")
  }
  return (
    <div className={moduleStyle.box}>
      <div className={moduleStyle.content_left}>
        <img src={backImg} alt="背景图片" />
      </div>
      <div className={moduleStyle.content_right}>
        <div className={moduleStyle.content}>
          <h1>验证登录账号</h1>
          <div className={moduleStyle.form_box}>
            <Space direction="vertical">
              <Form form={form} autoComplete="off">
                <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
                >
                  <Input placeholder="请输入用户名" prefix={<UserOutlined className="site-form-item-icon" />}/>
                </Form.Item>
                <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入用户密码' }]}
                >
                 <Input.Password placeholder="请输入密码" prefix={<LockOutlined className="site-form-item-icon" />} />
                </Form.Item>
              </Form>
              <p>请使用正确用户名登录，如无法正常登录，请查看用户手册</p>
              <Button type='primary' block onClick={checkLogin}>验证</Button>
              <Button block onClick={registerHandle}>注册账号</Button>
            </Space>
          </div>
        </div>
      </div>
    </div>
  )
}
