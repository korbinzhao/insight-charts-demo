import React, { Component } from "react";
import ReactDOM from "react-dom";
import MyComponent from "../src/index";

import { Table } from "antd";

import {data, fieldsProperty} from "./data";

console.log("data", data);

const fieldList = [
  {
    title: "出生率",
    dataIndex: "birthRate",
    key: "birthRate"
  },
  {
    title: "营业税税率",
    dataIndex: "businessTaxRate",
    key: "businessTaxRate"
  },
  {
    title: "CO2 排放量",
    dataIndex: "co2Release",
    key: "co2Release"
  },
  {
    title: "开业天数",
    dataIndex: "openDays",
    key: "openDays"
  },
  {
    title: "经商便利度",
    dataIndex: "businessConvenience",
    key: "businessConvenience"
  },
  {
    title: "GDP",
    dataIndex: "gdp",
    key: "gdp"
  },
  {
    title: "人均医疗费用",
    dataIndex: "averageMedicalFee",
    key: "averageMedicalFee"
  },
  {
    title: "新生儿死亡率",
    dataIndex: "neonatalDeathRate",
    key: "neonatalDeathRate"
  },
  {
    title: "互联网使用率",
    dataIndex: "internetUseRate",
    key: "internetUseRate"
  },
  {
    title: "贷款利率",
    dataIndex: "lendingRate",
    key: "lendingRate"
  },
  {
    title: "女性预期寿命",
    dataIndex: "womenLifeExpectancy",
    key: "womenLifeExpectancy"
  },
  {
    title: "男性预期寿命",
    dataIndex: "menLifeExpectancy",
    key: "menLifeExpectancy"
  }, 
  {
    title: "国家区域",
    dataIndex: "countryRegion",
    key: "countryRegion"
  }, 
  {
    title: '人口总数',
    dataIndex: 'population',
    key: 'population'
  }
];

const App = () => {
  return (
    <div>
      <MyComponent fieldList={fieldList} dataSource={data} fieldsProperty={fieldsProperty} />
    </div>
  );
};

// export default App;

ReactDOM.render(<App />, document.getElementById("app"));
