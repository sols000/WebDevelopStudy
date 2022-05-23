
var ROOT_PATH =
'https://geo.datav.aliyun.com/areas_v3';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);

myChart.showLoading();
$.get(ROOT_PATH + '/bound/500000_full.json', function (geoJson) {
  myChart.hideLoading();
  echarts.registerMap('CHONGQING', geoJson);
  myChart.setOption(
    (option = {
      title: {
        text: 'Population Density of ChongQing （2022）',
        subtext: 'Data from Wikipedia',
        sublink:
          'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
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
            { name:  'WanZhou'    , value: 20057.34 },
            { name:  'FuLing'     , value: 15477.48 },
            { name:  'YZ'         , value: 31686.1 },
            { name:  'Du'         , value: 6992.6 },
            { name:  'JB'         , value: 44045.49 },
            { name:  'Sha'        , value: 40689.64 },
            { name:  'Jiu'        , value: 37659.78 },
            { name:  'An'         , value: 45180.97 },
            { name:  'BeiBei'     , value: 55204.26 },
            { name:  'QiJiang'    , value: 21900.9 },
            { name:  'DaZhu'      , value: 4918.26 },
            { name:  'YuBei'      , value: 5881.84 },
            { name:  'BaNan'      , value: 4178.01 },
            { name:  'QianJiang'  , value: 2227.92 },
            { name:  'ChangShou'  , value: 2180.98 },
            { name:  'JiangJin'   , value: 9172.94 },
            { name:  'HeChuan'    , value: 3368 },
            { name:  'YongChuan'  , value: 806.98 },
            { name:  'NanChuan'   , value: 806.98 },
            { name:  'BiShan'     , value: 806.98 },
            { name:  'TongLiang'  , value: 806.98 },
            { name:  'TongNan'    , value: 806.98 },
            { name:  'RongCang'   , value: 806.98 },
            { name:  'KaiZhou'    , value: 806.98 },
            { name:  'LiangPing'  , value: 806.98 },
            { name:  'WuLong'     , value: 806.98 },
            { name:  'ChengKou'   , value: 806.98 },
            { name:  'FengDu'     , value: 806.98 },
            { name:  'DianJiang'  , value: 806.98 },
            { name:  'ZhongXian'  , value: 806.98 },
            { name:  'YunYang'    , value: 806.98 },
            { name:  'FengJie'    , value: 806.98 },
            { name:  'WuShan'     , value: 806.98 },
            { name:  'WuXi'       , value: 806.98 },
            { name:  'ShiZhu'     , value: 806.98 },
            { name:  'XiuShan'    , value: 806.98 },
            { name:  'YouYang'    , value: 806.98 },
            { name:  'PengShui'   , value: 806.98 }
          ],
          // 自定义名称映射
          nameMap: {
            '万州区'    : 'WanZhou',
            '涪陵区'    : 'FuLing',
            '渝中区'    : 'YZ',
            '大渡口区'  : 'Du',
            '江北区'    : 'JB',
            '沙坪坝区'  : 'Sha',
            '九龙坡区'  : 'Jiu',
            '南岸区'    : 'An',
            '北碚区'    : 'BeiBei',
            '綦江区'    : 'QiJiang',
            '大足区'    : 'DaZhu',
            '渝北区'    : 'YuBei',
            '巴南区'    : 'BaNan',
            '黔江区'    : 'QianJiang',
            '长寿区'    : 'ChangShou',
            '江津区'    : 'JiangJin',
            '合川区'    : 'HeChuan',
            '永川区'    : 'YongChuan',
            '南川区'    : 'NanChuan',
            '璧山区'    : 'BiShan',
            '铜梁区'    : 'TongLiang',
            '潼南区'    : 'TongNan',
            '荣昌区'    : 'RongCang',
            '开州区'    : 'KaiZhou',
            '梁平区'    : 'LiangPing',
            '武隆区'    : 'WuLong',
            '城口县'    : 'ChengKou',
            '丰都县'    : 'FengDu',
            '垫江县'    : 'DianJiang',
            '忠县'      : 'ZhongXian',
            '云阳县'    : 'YunYang',
            '奉节县'    : 'FengJie',
            '巫山县'    : 'WuShan',
            '巫溪县'    : 'WuXi',
            '石柱土家族自治县'    : 'ShiZhu',
            '秀山土家族苗族自治县': 'XiuShan',
            '酉阳土家族苗族自治县': 'YouYang',
            '彭水苗族土家族自治县': 'PengShui'
          }
        }
      ]
    })
  );
});


window.addEventListener('resize', myChart.resize);