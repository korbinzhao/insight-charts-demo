const xAxis = {field: 'pd', label: '产品'};
const yAxis = {field: 'sale', label: '销量'};
const prev = [7090, -513908, -4408510, 0, -100];
const curr = [-6815, -51387, -676072, 0, 100];
const xticks = ["基础产品", "智能客服", "OEM合作伙伴", "城市安全", "金融"];

const response = {
  "code": 0,
  "taskId": true,
  "message": "success",
  "data": [{
    "chartType": "multi_distribution",
    "title": "这是图表标题",
    "description": "这是图表描述",
    "xAxis": xAxis,
    "yAxis": yAxis,
    "prev": {
      description: '历史值',
      data: prev
    },
    "curr": {
      description: '当前值',
      data: curr
    },
    "xticks": xticks
  }]
};

export default response;