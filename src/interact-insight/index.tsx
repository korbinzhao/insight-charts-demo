import React from "react";

import { Select, Table } from "antd";
import BasicColumn from "../components/basic-column";
import _ from 'lodash';

// import '../types/definition.d.ts';

import "./index.less";

const { Option } = Select;

interface Field {
  key: string;
  title: string;
  dataIndex: string;
}

interface dataUnit {
  birthRate: string;
  businessTaxRate: string;
  co2Release: string;
  countryRegion: string;
  openDays: string;
  businessConvenience: string;
  energyUse: string;
  gdp: string;
  averageMedicalFee: string;
  taxHours: string;
  neonatalDeathRate: string;
  internetUseRate: string;
  lendingRate: string;
  womenLifeExpectancy: string;
  menLifeExpectancy: string;
  population: string;
}

interface Props {
  fieldList: Field[];
  dataSource: dataUnit[];
  fieldsProperty: {};
}

interface State{
  columnFields: string[];
  rowFields: string[];
}

export default class InteractInsight extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      columnFields: ["birthRate", "countryRegion"],
      rowFields: ["population"]
    };
  }

  componentDidMount(){
    this.dataHandler();
  }

  columnAndRow = () => {
    const { fieldList } = this.props;
    const {columnFields, rowFields} = this.state;

    return (
      <div className="column-row-setting">
        <h3>设置</h3>
        <div className="column-row">
          <span className="label-title">列</span>
          <Select
            mode="multiple"
            style={{ width: "500px" }}
            placeholder="Please select"
            defaultValue={columnFields}
          >
            {fieldList.map((item, index) => {
              return <Option key={item.key}>{item.title}</Option>;
            })}
          </Select>
        </div>
        <div className="column-row">
          <span className="label-title">行</span>
          <Select
            mode="multiple"
            style={{ width: "500px" }}
            placeholder="Please select"
            defaultValue={rowFields}
          >
            {fieldList.map((item, index) => {
              return <Option key={item.key}>{item.title}</Option>;
            })}
          </Select>
        </div>
      </div>
    );
  };

  tableCharts = () => {
    return (
      <div className="charts-table-container">
        <div className="charts-table-label">出生率 / 区域</div>
        <div className="charts-table-row">
          <div className="charts-table-cell">高于3%</div>
          <div className="charts-table-cell">1.5-3%</div>
          <div className="charts-table-cell">低于1.5%</div>
        </div>
        <div className="charts-table-row">
          <div className="charts-table-cell">
            <BasicColumn />
          </div>
          <div className="charts-table-cell">
            <BasicColumn />
          </div>
          <div className="charts-table-cell">
            <BasicColumn />
          </div>
        </div>
      </div>
    );
  };

  dataHandler = () => {
    const { dataSource, fieldsProperty } = this.props;
    const {columnFields, rowFields} = this.state;

    // window.dataSource = dataSource;

    // const data = columnFields.map((field, index) => {
    //   const temp = _.uniqBy(dataSource, field);
    //   console.log('-- temp --', temp);
    // });

    
  };

  render() {
    return (
      <div className="interact-insight-container">
        {this.tableCharts()}
        {this.columnAndRow()}
      </div>
    );
  }
}
