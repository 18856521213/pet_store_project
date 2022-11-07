import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Space,
  Table,
  Tag
} from "antd"
import { SearchOutlined } from '@ant-design/icons';
const { Column } = Table;
export default function MemberManage() {
  const [componentSize, setComponentSize] = useState('default');
  const [filterForm] = Form.useForm();
  const [tableData, setTableData] = useState([])
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const searchHandle = () => {
    filterForm.validateFields().then(res => {
      console.log(res)
    })
  }
  const filterFinishHandle = (value) => {
    console.log(value)
  }
  const resetHandle = () => {
    console.log(filterForm)
    // filterForm.setFieldsValue({memberName: "", memerNumer: "", idCard: "", nickName: ""});
    filterForm.resetFields()
  }
  return (
    <>
      <Form
        form={filterForm}
        layout="inline"
        initialValues={{
          size: componentSize,
        }}
        onFinish={filterFinishHandle}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="用户名" name="memberName">
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item label="会员号" name="memerNumer">
          <Input placeholder="请输入会员号" />
        </Form.Item>
        <Form.Item label="身份证号" name="idCard">
          <Input placeholder="请输入身份证号" />
        </Form.Item>
        <Form.Item label="昵称" name="nickName">
          <Input placeholder="请输入昵称" />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" icon={<SearchOutlined />} onClick={searchHandle}>搜索</Button>
            <Button onClick={resetHandle}>重置</Button>
          </Space>
        </Form.Item>
      </Form>
      <div style={{paddingTop: "20px"}}>
        <Table dataSource={tableData} sticky={true}>
          <Column title="用户名" dataIndex="userName" key="age" />
          <Column title="用户密码" dataIndex="userPassword" key="address" />
          <Column title="昵称" dataIndex="nickName" key="address" />
          <Column title="用户等级" dataIndex="level" key="address" />
          <Column title="标签" dataIndex="labelInfo" key="address" />
          <Column title="邮箱" dataIndex="email" key="address" />
          <Column title="性别" dataIndex="sex" key="address" />
          <Column title="手机号码" dataIndex="iphoneNumber" key="address" />
          <Column title="卡内余额" dataIndex="balance" key="address" />
          <Column title="出生年月日" dataIndex="bronTime" key="address" />
          <Column title="家庭住址" dataIndex="customerAddress" key="address" />
          <Column title="会员号" dataIndex="memberNo" key="address" />
          <Column title="身份证号" dataIndex="idCard" key="address" />
          <Column title="年龄" dataIndex="customerAge" key="address" />
          <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={(tags) => (
              <>
                {tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
            )}
          />
        </Table>
      </div>
    </>
  )
}
