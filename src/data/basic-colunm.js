
const xAxis = {field: 'year', label: '年'};
const yAxis = {field: 'sales', label: '销量'};

const data = [
  {
    year: "1951 年",
    sales: 38
  },
  {
    year: "1952 年",
    sales: 52
  },
  {
    year: "1956 年",
    sales: 61
  },
  {
    year: "1957 年",
    sales: 145
  },
  {
    year: "1958 年",
    sales: 48
  },
  {
    year: "1959 年",
    sales: 38
  },
  {
    year: "1960 年",
    sales: 38
  },
  {
    year: "1962 年",
    sales: 38
  }
];

const response = {
  "code": 0,
  "taskId": true,
  "message": "success",
  "data": [{
    "chartType": "basic_column", // 图表类型
    "title": "这是图表标题",
    "description": "这是图表描述",
    "xAxis": xAxis,
    "yAxis": yAxis,
    "data": data
  }]
};

export default response;
