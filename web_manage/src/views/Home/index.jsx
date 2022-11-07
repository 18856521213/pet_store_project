import React from 'react';
import { useNavigate } from 'react-router-dom';
import moduleStyle from "./index.module.css"
import LayoutBox from "../../components/LayoutBox/"
import { Layout, Menu } from 'antd';
const { Sider, Content } = Layout;
export default function Home() {
  const navigate = useNavigate();
  const items = [
    { label: '数据看板', key: 'dataPanel' }, // 菜单项务必填写 key
    { label: '会员管理', key: 'memberManage' }, // 菜单项务必填写 key
    { label: '菜单项二', key: 'item-2' },
    {
      label: '子菜单',
      key: 'submenu',
      children: [{ label: '子菜单项', key: 'submenu-item-1' }],
    }
  ]
  const menuClickHandle = ({ key, keyPath, domEvent }) => {
    navigate("/" + key)
  }
  return (
    <>
     <Layout>
      <Sider className={moduleStyle.sider_box}>
        <Menu
        onClick={menuClickHandle} 
        mode="inline" 
        items={items} />
      </Sider>
      <Layout>
        <Content>
          <LayoutBox></LayoutBox>
        </Content>
      </Layout>
    </Layout>
    </>
  )
}
