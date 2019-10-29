const xAxis = {field: 'year', label: '年'};
const yAxis = {field: 'value', label: '销量'};

const data = [
  {
    year: "1991",
    value: 3
  },
  {
    year: "1992",
    value: 4
  },
  {
    year: "1993",
    value: 3.5
  },
  {
    year: "1994",
    value: 5
  },
  {
    year: "1995",
    value: 4.9
  },
  {
    year: "1996",
    value: 6
  },
  {
    year: "1997",
    value: 7
  },
  {
    year: "1998",
    value: 9
  },
  {
    year: "1999",
    value: 13
  }
];

const response = {
  "code": 0,
  "taskId": true,
  "message": "success",
  "data": [{
    "chartType": "basic_line", // 图表类型
    "title": "这是图表标题",
    "description": "这是图表描述",
    "xAxis": xAxis,
    "yAxis": yAxis,
    "data": data
  }]
};

export default response;
