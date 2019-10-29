import React from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";

import response from "../data/multi-distribution";

const {
  title,
  description,
  xAxis,
  yAxis,
  prev,
  curr,
  xticks
} = response.data[0];

const {field: xField, label: xLabel} = xAxis;
const {field: yField, label: yLabel} = yAxis;

const prevData = prev.data.map((item, index) => {
  const obj = {};

  obj.type = prev.description;
  obj[xField] = xticks[index];
  obj[yField] = item;

  return obj;
});

const currData = curr.data.map((item, index) => {
  const obj = {};

  obj.type = curr.description;
  obj[xField] = xticks[index];
  obj[yField] = item;

  return obj;
});

const data = [].concat(prevData).concat(currData);

const yLabelConfig = {
  formatter: (text, item, index) => {
    return parseFloat(text / 10000);
  }
};

const yAxisTitle = {
  autoRotate: true, // 是否需要自动旋转，默认为 true
  offset: -50, // 设置标题 title 距离坐标轴线的距离
  textStyle: {
    fontSize: "12",
    textAlign: "center",
    rotate: 0,
    textBaseline: "bottom"
  }, // 坐标轴文本属性配置
  position: "end"
};

const cols = {};
cols[xField] = {alias: xLabel};
cols[yField] = {alias: yLabel};

class MultiDistribution extends React.Component {
  render() {
    return (
      <div className="chart-container">
        <h3>{title}</h3>
        <Chart
          data={data}
          forceFit={true}
          scale={cols}
          padding={"auto"}
          className="insight-chart"
        >
          <Legend offset={10} />
          <Axis name={xField} title={true} />
          <Axis name={yField} title={yAxisTitle} label={yLabelConfig} />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />

          <Geom
            type="line"
            position={`${xField}*${yField}`}
            size={2}
            color={["type", "#6767ea-#e81ad7"]}
            shape={"line"}
          />
        </Chart>
        <p>{description}</p>
      </div>
    );
  }
}

export default MultiDistribution;
