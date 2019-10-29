const data = [
  {
    name: "London",
    "Jan.": 18.9,
    "Feb.": 28.8,
    "Mar.": 39.3,
    "Apr.": 81.4,
    May: 47,
    "Jun.": 20.3,
    "Jul.": 24,
    "Aug.": 35.6
  },
  {
    name: "Berlin",
    "Jan.": 12.4,
    "Feb.": 23.2,
    "Mar.": 34.5,
    "Apr.": 99.7,
    May: 52.6,
    "Jun.": 35.5,
    "Jul.": 37.4,
    "Aug.": 42.4
  },
  {
    name: "NewYork",
    "Jan.": 12.4,
    "Feb.": 23.2,
    "Mar.": 34.5,
    "Apr.": 99.7,
    May: 52.6,
    "Jun.": 35.5,
    "Jul.": 37.4,
    "Aug.": 42.4
  }
];

const xticks = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug."];
const xlabel = '月份';
const ylabel = '月均降雨量';
const stackedLabel = 'name';

const response = {
  "code": 0,
  "taskId": true,
  "message": "success",
  "data": [{
    "chartType": "stacked_column", // 图表类型
    "title": "这是图表标题",
    "description": "这是图表描述",
    "xticks": xticks,
    "xlabel": xlabel,
    "ylabel": ylabel,
    "stackedLabel": stackedLabel,
    "data": data
  }]
};

export default response;