const dimension = 'item2';
const countField = 'count';

const data = [
  {
    item2: "事例一",
    count: 40
  },
  {
    item2: "事例二",
    count: 21
  },
  {
    item2: "事例三",
    count: 17
  },
  {
    item2: "事例四",
    count: 13
  },
  {
    item2: "事例五",
    count: 9
  }
];

const response = {
  "code": 0,
  "taskId": true,
  "message": "success",
  "data": [{
    "chartType": "basic_pie", // 图表类型
    "title": "这是图表标题",
    "description": "这是图表描述",
    "dimension": dimension, // 维度
    "countField": countField, // 统计字段
    "data": data
  }]
};

export default response;
