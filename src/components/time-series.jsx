import React, { Component } from "react";
import { Chart, Geom, Axis, Tooltip, Legend, View } from "bizcharts";

import response from "../data/time-series";

const {
  title,
  description,
  xticks,
  history,
  predict,
  xAxis,
  yAxis
} = response.data[0];

const {field: xField, label: xLabel} = xAxis;
const {field: yField, label: yLabel} = yAxis;

const historyData = history.data.map((item, index) => {
  const obj = {};

  obj.type = history.description;
  obj[xField] = xticks[index];
  obj[yField] = item;

  if (index === history.data.length - 1) {
    obj.type = "当前值";
  }

  return obj;
});

const predictData = predict.data.map((item, index) => {
  const obj = {};

  obj.type = predict.description;
  obj[xField] = xticks[index];
  obj[yField] = item;

  return obj;
});

const yLabelConfig = {
  formatter: (text, item, index) => {
    return parseFloat(text / 10000);
  }
};

const cols = {};

cols[xField] = {
  alias: xLabel
};

cols[yField] = {
  sync: true,
  alias: yLabel
};

const yAxisTitle = {
  autoRotate: true, // 是否需要自动旋转，默认为 true
  offset: -50, // 设置标题 title 距离坐标轴线的距离
  textStyle: {
    fontSize: "12",
    textBaseline: "bottom",
    textAlign: "center",
    rotate: 0
  }, // 坐标轴文本属性配置
  position: "end"
};

class TimeSeries extends Component {
  render() {
    return (
      <div className="chart-container">
        <h3>{title}</h3>
        <Chart
          scale={cols}
          forceFit={true}
          padding={"auto"}
          className="insight-chart"
        >
          <Tooltip
            crosshairs={{
              type: "line"
            }}
          />
          <Legend clickable={false} />
          <View data={historyData}>
            <Axis name={xField} title={true} />
            <Axis name={yField} title={yAxisTitle} label={yLabelConfig} />
            <Geom
              type="point"
              position={`${xField}*${yField}`}
              size={4}
              shape="circle"
              color={["type", "#000-#e81ad7"]}
              style={{
                stroke: "#fff",
                lineWidth: 1,
                fillOpacity: 1
              }}
            />
          </View>
          <View data={predictData}>
            <Geom
              type="line"
              position={`${xField}*${yField}`}
              size={2}
              color={"type"}
            />
          </View>
        </Chart>
        <p>{description}</p>
      </div>
    );
  }
}

export default TimeSeries;
