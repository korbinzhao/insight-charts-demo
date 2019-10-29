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
import DataSet from "@antv/data-set";

import response from "../data/stacked-column";

const { title, description, xticks, xlabel, ylabel, stackedLabel, data } = response.data[0];

class StackedColumn extends React.Component {
  render() {
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: xticks,
      // 展开字段集
      key: xlabel,
      // key字段
      value: ylabel // value字段
    });
    return (
      <div className="chart-container">
        <h3>{title}</h3>
        <Chart height={400} data={dv} forceFit>
          <Legend />
          <Axis name={xlabel} title={true} />
          <Axis name={ylabel} title={true} />
          <Tooltip />
          <Geom
            type="intervalStack"
            position={`${xlabel}*${ylabel}`}
            color={stackedLabel}
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

export default StackedColumn;
