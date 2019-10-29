const xAxis = {
  field: 'time',
  label: '时间'
};

const yAxis = {
  field: 'value',
  label: '值'
};

const history = [
  11609999,
  10239582,
  10596182,
  10426228,
  8924419,
  12324562,
  12481507,
  13670621,
  13658280,
  14041871,
  13486111,
  13340945,
  12606771,
  7691343
];
const predict = [
  11604838.75452791,
  10254663.07464443,
  10586250.24113585,
  10416296.20282473,
  8944282.67671914,
  12304698.36160804,
  12501370.51573089,
  13650757.45844856,
  13678143.4742336,
  14028052.42924304,
  13586978.52575985,
  13145904.62227665,
  12704830.71879346,
  12263756.81531027
];

const xticks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const response = {
  "code": 0,
  "taskId": true,
  "message": "success",
  "data": [{
    "chartType": "time_series", // 图表类型
    // "xlabel": xlabel,
    // "ylabel": ylabel,
    "xAxis": xAxis,
    "yAxis": yAxis,
    "history": {
      description: '历史值',
      data: history
    },
    "predict": {
      description: '预测值',
      data: predict
    },
    "title": "这是图表标题",
    "description": "这是图表描述",
    "xticks": xticks // x坐标轴
  }]
};

export default response;