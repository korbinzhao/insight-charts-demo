const xAxis = {field: 'pl', label: '产品线'};
const yAxis = {field: 'value', label: '销量'};

const predict = [
  42670470.66983032,
  30579640.342315674,
  23506348.25743103,
  18487494.68487549,
  14594413.366973877,
  11413433.114959717,
  8723881.622879028,
  6394033.554397583,
  4338921.386383057,
  2500528.7183380127,
  837474.0746917725,
  -680797.5842285156,
  -2077490.4285888672,
  -3370641.6656188965,
  -4574550.183898926
];
const history = [
  54425828,
  33302514,
  32913503,
  12471065,
  11961284,
  9540048,
  2925618,
  1764513,
  1649281,
  1501546,
  1065952,
  1020337,
  405198,
  105500,
  46234
];
const xticks = [
  "智能语音交互",
  "Data V",
  "云呼叫中心",
  "图像搜索",
  "营销引擎",
  "云客服",
  "人脸识别",
  "推荐引擎",
  "机器语言翻译",
  "公众趋势分析",
  "智能对话分析",
  "自然语言处理",
  "图像识别",
  "金融数据API服务",
  "企业图谱"
];

const response = {
  "code": 0,
  "taskId": true,
  "message": "success",
  "data": [{
    "chartType": "single_distribution",
    "title": "这是图表标题",
    "description": "这是图表描述",
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
    "xticks": xticks
  }]
};

export default response;