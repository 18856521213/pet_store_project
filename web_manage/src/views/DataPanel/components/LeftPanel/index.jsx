import React, {useEffect, useState} from 'react';
import { Table } from 'antd';
export default function RightPanel() {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    setTableData([
      {key: 1, productName: "狗粮1", saleNum: "999", price: "999", totalSales: "4564584"},
      {key: 2, productName: "狗粮2", saleNum: "998", price: "9994", totalSales: "4564584"},
      {key: 3, productName: "狗粮3", saleNum: "997", price: "5999", totalSales: "4564584"},
      {key: 4, productName: "狗粮4", saleNum: "996", price: "88999", totalSales: "4564584"},
      {key: 5, productName: "狗粮5", saleNum: "995", price: "23999", totalSales: "4564584"},
      {key: 6, productName: "狗粮6", saleNum: "994", price: "448999", totalSales: "4564584"},
      {key: 7, productName: "狗粮7", saleNum: "993", price: "452999", totalSales: "4564584"},
    ])
  }, [])
  //当前星期内商品销售数量前十
  const columns = [
    {
      title: '商品名称',
      dataIndex: 'productName',
      defaultSortOrder: 'descend'
    },
    {
      title: '已售数量',
      dataIndex: 'saleNum',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.saleNum - b.saleNum,
    },
    {
      title: '商品单价',
      dataIndex: 'price',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: '商品销售总额',
      dataIndex: 'totalSales',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.totalSales - b.totalSales,
    },
  ];
  const isShowTitle = (val) => {
    console.log(val);
    return (
      <h1 style={{fontSize: '16px', fontWeight: "900"}}>本星期内商品销售数量前十</h1>
    )
  }
  return (
    <>
      <Table showSorterTooltip={false} pagination={false} columns={columns} dataSource={tableData}/>
    </>
  )
}
