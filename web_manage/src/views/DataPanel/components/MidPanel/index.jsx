import React, { useEffect } from 'react';
import * as echarts from 'echarts';
export default function MidPanel() {
  //年销售额
  useEffect(() => {
    let myChart = echarts.init(document.getElementById('containerYear'))
    let option = {
      color: ['#5156f8'],
      title: {
        text: '年销售金额图表展示',
        fontSize: 15
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#5156f8'
          }
        }
      },
      legend: {
        data: ['年销售金额']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '年销售金额',
          type: 'line',
          smooth: true,
          showSymbol: true,
          symbol: "circle",
          stack: 'Total',
          lineStyle: {
            width: 0
          },
          label: {
            show: true,
            position: 'top',
            color: "#5156f8"
          },
          areaStyle: {
            opacity: 0.9,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#5156f8'
              },
              {
                offset: 1,
                color: '#fff'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [
            1220, 1320, 1010, 8550, 900, 2300, 2100,
            1220, 1320, 1010, 8550, 900
          ]
        }
      ]
    };
    
    option && myChart.setOption(option);
  }, [])
  //月销售额
  useEffect(() => {
    let myChart = echarts.init(document.getElementById('containerMonth'))
    let option = {
      color: ['#5156f8'],
      title: {
        text: '月销售金额图表展示'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#5156f8'
          }
        }
      },
      legend: {
        data: ['月销售金额']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: [
            '2022-10-01', '2022-10-02', '2022-10-03', '2022-10-04', '2022-10-05', '2022-10-06', '2022-10-07',
            '2022-10-08', '2022-10-09', '2022-10-10', '2022-10-11', '2022-10-12', '2022-10-13', '2022-10-14',
            '2022-10-15', '2022-10-16', '2022-10-17', '2022-10-18', '2022-10-19', '2022-10-20', '2022-10-21',
            '2022-10-22', '2022-10-23', '2022-10-24', '2022-10-25', '2022-10-26', '2022-10-27', '2022-10-28',
            '2022-10-29', '2022-10-30', '2022-10-31'
          ]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '月销售金额',
          type: 'line',
          smooth: true,
          showSymbol: true,
          symbol: "circle",
          stack: 'Total',
          lineStyle: {
            width: 0
          },
          label: {
            show: true,
            position: 'top',
            color: "#5156f8"
          },
          areaStyle: {
            opacity: 0.9,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#5156f8'
              },
              {
                offset: 1,
                color: '#fff'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [
            1220, 1320, 1010, 8550, 900, 2300, 2100,
            1220, 1320, 1010, 8550, 900, 2300, 2100,
            1220, 1320, 1010, 8550, 900, 2300, 2100,
            1220, 1320, 1010, 8550, 900, 2300, 2100,
            1220, 1320, 1010
          ]
        }
      ]
    };
    
    option && myChart.setOption(option);
  }, [])
  //周销售额周期表
  useEffect(() => {
    let myChart = echarts.init(document.getElementById('containerWeek'))
    let option = {
      color: ['#5156f8'],
      title: {
        text: '周销售金额图表展示'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#5156f8'
          }
        }
      },
      legend: {
        data: ['周销售金额']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '周销售金额',
          type: 'line',
          smooth: true,
          showSymbol: true,
          symbol: "circle",
          stack: 'Total',
          lineStyle: {
            width: 0
          },
          label: {
            show: true,
            position: 'top',
            color: "#5156f8"
          },
          areaStyle: {
            opacity: 0.9,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#5156f8'
              },
              {
                offset: 1,
                color: '#fff'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [1, 132, 101, 855, 90, 230, 210]
        }
      ]
    };
    
    option && myChart.setOption(option);
  }, [])
  return (
    <>
      <div id="containerWeek" style={{width: '90%', height: "30%"}}></div>
      <div id="containerMonth" style={{width: '90%', height: "30%"}}></div>
      <div id="containerYear" style={{width: '90%', height: "30%"}}></div>
    </>
  )
}
