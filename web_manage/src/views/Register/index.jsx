import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import moduleStyle from "./index.module.css"
import { Input, Space, Button, Form, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import registryImg from "../../assets/img/registry.jpg"
export default function Register() {
  const [authLoading, setAuthLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const goLoginHandle = () => {
    form.validateFields().then(res => {
      navigate("/login")
    }).catch(err => {
      console.log(err)
    })
  }
  const clickAuthCodeHandle = (value, event) => {
    setAuthLoading(true);
    setTimeout(() => {
      setAuthLoading(false);
      form.setFieldValue("authCode", "5s31");
      form.validateFields();
    }, 3000)
  };
  const agreeHandle = () => {
    form.validateFields().then(res => {
      message.success("注册成功，前去登录页");
      setTimeout(() => {
        navigate("/login")
      }, 1500)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className={moduleStyle.box}>
      <div className={moduleStyle.content}>
        <h1>欢迎注册宠物店账号</h1>
        <div className={moduleStyle.content_box}>
          <div className={moduleStyle.content_left}>
            <img src={registryImg} alt="背景图片" />
          </div>
          <div className={moduleStyle.content_right}>
            <Space direction="vertical">
              <Form form={form} autoComplete="off">
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
                >
                  <Input placeholder="请输入用户名" prefix={<UserOutlined className="site-form-item-icon" />}/>
                </Form.Item>
                <Form.Item
                name="authCode"
                rules={[{ required: true, message: '请获取验证码' }]}
                >
                  <Input.Search placeholder="请输入验证码" onSearch={clickAuthCodeHandle} loading={authLoading} enterButton="获取验证码" />
                </Form.Item>
                <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入用户密码' }]}
                >
                  <Input.Password placeholder="请输入密码" prefix={<LockOutlined className="site-form-item-icon" />} />
                </Form.Item>
                <Form.Item
                name="rePassword"
                rules={[{ required: true, message: '请再次输入密码' }]}
                >
                  <Input.Password placeholder="请再次确认密码" prefix={<LockOutlined className="site-form-item-icon" />} />
                </Form.Item>
              </Form>
              <p>点击同意，表示已同意用户协议</p>
              <Button type='primary' block onClick={agreeHandle}>同意</Button>
              <Space>
                欢迎使用，宠物医院软件
                <Button type="link" onClick={goLoginHandle}>去登录</Button>
              </Space>
            </Space>
          </div>
        </div>
      </div>
    </div>
  )
}
