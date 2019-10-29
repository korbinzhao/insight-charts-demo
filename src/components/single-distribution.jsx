import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

import response from "../data/single-distribution";

const {
  title,
  description,
  xAxis,
  yAxis,
  history,
  predict,
  xticks
} = response.data[0];

const {field: xField, label: xLabel} = xAxis;
const {field: yField, label: yLabel} = yAxis;

const cols = {};
cols[xField] = {alias: xLabel};
cols[yField] = {alias: yLabel};

const historyData = history.data.map((item, index) => {
  const obj = {};

  obj.type = history.description;
  obj[xField] = xticks[index];
  obj[yField] = item;

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
    console.log(text, item, index);

    if (text > 10000) {
      return parseFloat(text / 10000);
    } else {
      return text;
    }
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

class SingleDistribution extends React.Component {
  render() {
    return (
      <div className="chart-container">
        <h3>{title}</h3>
        <Chart className="insight-chart" padding={"auto"} scale={cols} forceFit={true}>
          <Legend />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <View data={historyData}>
            <Axis name={xField} title={true} />
            <Axis name={yField} label={yLabelConfig} title={yAxisTitle} />
            <Tooltip
              crosshairs={{
                type: "y"
              }}
            />
            <Geom
              type="interval"
              position={`${xField}*${yField}`}
              color={["type"]}
            />
          </View>
          <View data={predictData}>
            <Tooltip
              crosshairs={{
                type: "y"
              }}
            />
            <Geom
              type="line"
              style={{
                lineDash: [4, 4]
              }}
              position={`${xField}*${yField}`}
              size={2}
              color={["type", "red"]}
              shape={"line"}
            />
          </View>
        </Chart>
        <p>{description}</p>
      </div>
    );
  }
}

export default SingleDistribution;
