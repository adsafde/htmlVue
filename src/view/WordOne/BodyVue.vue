<template>
  <section class="counts section-bg">
    <div class="container">
      <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
      <div id="main" style="width: 100%;height:300px"></div>
    </div>
  </section>
  <script type="text/javascript">
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 指定图表的配置项和数据
    var option = {
      tooltip: {
        trigger: "axis"
      },
      legend: {
        top: "0%",
        data: ["虾米音乐", "酷我音乐", "酷狗音乐", "网易云音乐", "QQ音乐"],
        selected: {
          '酷我音乐': false,
          '酷狗音乐': false,
          '虾米音乐': false,
          'QQ音乐': false,
        },
        textStyle: {
          color: "black",
          fontSize: "12"
        }
      },

      grid: {
        left: "10",
        top: "30",
        right: "10",
        bottom: "10",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          // x轴更换数据
          data: [
            "2019.10",
            "2019.12",
            "2020.02",
            "2020.04",
            "2020.06",
            "2020.08",
            "2020.10",
            "   "

          ],
          // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
          axisLabel: {
            textStyle: {
              color: "#00ffff",
              fontSize: 12
            }
          },
          // x轴线的颜色为   rgba(255,255,255,.2)
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.2)"
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisTick: {show: false},
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
          axisLabel: {
            textStyle: {
              color: "#00ffff",
              fontSize: 12
            }
          },
          // 修改分割线的颜色
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "虾米音乐",
          type: "line",
          smooth: true,
          // 单独修改当前线条的样式
          lineStyle: {
            color: "#0184d5",
            width: "2"
          },
          // 填充颜色设置
          areaStyle: {
            color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                  }
                ],
                false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          },
          // 设置拐点
          symbol: "circle",
          // 拐点大小
          symbolSize: 8,
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          },
          data: [200000, 210000, 205000, 215000, 213000, 216000, 212000]
        },
        {
          name: "酷我音乐",
          type: "line",
          smooth: true,
          lineStyle: {
            normal: {
              color: "#00ffff",
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 216, 135, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 216, 135, 0.1)"
                    }
                  ],
                  false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          // 设置拐点 小圆点
          symbol: "circle",
          // 拐点大小
          symbolSize: 5,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
          data: [250000, 232000, 191000, 234000, 290000, 330000, 310000]
        }, {
          name: "酷狗音乐",
          type: "line",
          smooth: true,
          lineStyle: {
            normal: {
              color: "#006ced",
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 216, 135, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 216, 135, 0.1)"
                    }
                  ],
                  false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          // 设置拐点 小圆点
          symbol: "circle",
          // 拐点大小
          symbolSize: 5,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: "#006ced",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
          data: [450000, 432000, 401000, 454000, 490000, 530000, 510000]
        }, {
          name: "网易云音乐",
          type: "line",
          smooth: true,
          lineStyle: {
            normal: {
              color: "#ffa800",
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 216, 135, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 216, 135, 0.1)"
                    }
                  ],
                  false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          // 设置拐点 小圆点
          symbol: "circle",
          // 拐点大小
          symbolSize: 5,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: "#ffa800",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
          data: [620000, 632000, 601000, 634000, 690000, 730000, 720000]
        }, {
          name: "QQ音乐",
          type: "line",
          smooth: true,
          lineStyle: {
            normal: {
              color: "#ff3000",
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 216, 135, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 216, 135, 0.1)"
                    }
                  ],
                  false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          // 设置拐点 小圆点
          symbol: "circle",
          // 拐点大小
          symbolSize: 5,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: "#ff3000",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
          data: [820000, 932000, 901000, 933000, 890000, 830000, 812000]
        }
      ]
    };
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
      myChart.resize();
    });
    myChart.setOption(option);
  </script>
</template>

<script>
export default {
  name: "BodyVue"
}
</script>

<style scoped>

</style>
