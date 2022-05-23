

var ROOT_PATH = 'https://geo.datav.aliyun.com/areas_v3';
//var ROOT_PATH = 'E:/EChartsSpace/CodeSpace';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);


myChart.showLoading();
$.getJSON(ROOT_PATH + "/bound/100000_full.json", function (geoJson) {
  myChart.hideLoading();
  echarts.registerMap('CHONGQING', geoJson);
  myChart.setOption(
    (option = {
      title: {
        text: 'Population Density of ChongQing （2022）',
        subtext: 'Data from Wikipedia'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c} (p / km2)'
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      visualMap: {
        min: 800,
        max: 50000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      },
      series: [
        {
          name: '重庆疫情地图',
          type: 'map',
          map: 'CHONGQING',
          label: {
            show: true
          },
          data: [
            { name:  'BJ',           value: 20057.34 },
            { name:  'TJ',           value: 15477.48 },
            { name:  'HeBei',        value: 31686.1 },
            { name:  'ShanXi',       value: 6992.6 },
            { name:  'LiaoNing',     value: 44045.49 },
            { name:  'JiLin',        value: 40689.64 },
            { name:  'HeiLongJiang', value: 37659.78 },
            { name:  'SH',           value: 45180.97 },
            { name:  'JiangSu',      value: 55204.26 },
            { name:  'ZheJiang',     value: 21900.9 },
            { name:  'AnHui',        value: 4918.26 },
            { name:  'FuJian',       value: 5881.84 },
            { name:  'JiangXi',      value: 4178.01 },
            { name:  'ShanDong',     value: 2227.92 },
            { name:  'HeNan',        value: 2180.98 },
            { name:  'HuBei',        value: 9172.94 },
            { name:  'HuNan',        value: 3368 },
            { name:  'GuangDong',    value: 806.98 },
            { name:  'HaiNan',       value: 806.98 },
            { name:  'ChongQing',    value: 806.98 },
            { name:  'SiChuan',      value: 806.98 },
            { name:  'GuiZhou',      value: 806.98 },
            { name:  'YunNan',       value: 806.98 },
            { name:  'SanXi',        value: 806.98 },
            { name:  'GanSu',        value: 806.98 },
            { name:  'QingHai',      value: 806.98 },
            { name:  'TaiWan',       value: 806.98 },
            { name:  'NingXia',      value: 806.98 },
            { name:  'XingJiang',    value: 806.98 },
            { name:  'XiZhang',      value: 806.98 },
            { name:  'GuangXi',      value: 806.98 },
            { name:  'NeiMengGu',    value: 806.98 },
            { name:  'XiangGang',    value: 806.98 },
            { name:  'AoMen',        value: 806.98 }
          ],
          // 自定义名称映射
          nameMap: {
            '北京市'    : 'BJ',
            '天津市'    : 'TJ',
            '河北省'    : 'HeBei',
            '山西省'    : 'ShanXi',
            '辽宁省'    : 'LiaoNing',
            '吉林省'    : 'JiLin',
            '黑龙江省'  : 'HeiLongJiang',
            '上海市'    : 'SH',
            '江苏省'    : 'JiangSu',
            '浙江省'    : 'ZheJiang',
            '安徽省'    : 'AnHui',
            '福建省'    : 'FuJian',
            '江西省'    : 'JiangXi',
            '山东省'    : 'ShanDong',
            '河南省'    : 'HeNan',
            '湖北省'    : 'HuBei',
            '湖南省'    : 'HuNan',
            '广东省'    : 'GuangDong',
            '海南省'    : 'HaiNan',
            '重庆市'    : 'ChongQing',
            '四川省'    : 'SiChuan',
            '贵州省'    : 'GuiZhou',
            '云南省'    : 'YunNan',
            '陕西省'    : 'SanXi',
            '甘肃省'    : 'GanSu',
            '青海省'    : 'QingHai',
            '台湾省'    : 'TaiWan',
            '宁夏回族自治区'    : 'NingXia',
            '新疆维吾尔自治区'  : 'XingJiang',
            '西藏自治区'        : 'XiZhang',
            '广西壮族自治区'    : 'GuangXi',
            '内蒙古自治区'      : 'NeiMengGu',
            '香港特别行政区'    : 'XiangGang',
            '澳门特别行政区'    : 'AoMen',
          }
        }
      ]
    })
  );
});


window.addEventListener('resize', myChart.resize);
