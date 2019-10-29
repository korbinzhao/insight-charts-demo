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

import response from "../data/basic-line";

const { xAxis, yAxis, title, description, data } = response.data[0];

const {field: xField, label: xLabel} = xAxis;
const {field: yField, label: yLabel} = yAxis;

const cols = {};
cols[xField] = {alias: xLabel};
cols[yField] = {alias: yLabel};

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

/**
 * 基础折线图
 */
class BasicLine extends React.Component {
  render() {
    return (
      <div className="chart-container">
        <h3>{title}</h3>
        <Chart height={400} data={data} scale={cols} forceFit>
          <Axis name={xField} title={true} />
          <Axis name={yField} title={yAxisTitle} />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="line" position={`${xField}*${yField}`} size={2} />
          <Geom
            type="point"
            position={`${xField}*${yField}`}
            size={4}
            shape={"circle"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
        <p>{description}</p>
      </div>
    );
  }
}

export default BasicLine;
