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

import response from "../data/basic-pie";

const { dimension, countField, title, description, data } = response.data[0];

class BasicPie extends React.Component {
  render() {
    const { DataView } = DataSet;

    const dv = new DataView();
    dv.source(data).transform({
      type: "percent",
      field: countField,
      dimension: dimension,
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      }
    };
    return (
      <div className="chart-container">
        <h3>{title}</h3>
        <Chart
          data={dv}
          scale={cols}
          padding={[80, 100, 80, 80]}
          forceFit
        >
          <Coord type="theta" radius={0.75} />
          <Axis name="percent" />
          <Legend
            position="right"
            offsetY={-window.innerHeight / 2 + 120}
            offsetX={-100}
          />
          <Tooltip
            showTitle={false}
            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
          />
          <Geom
            type="intervalStack"
            position="percent"
            color={dimension}
            tooltip={[
              `${dimension}*percent`,
              (item, percent) => {
                percent = percent * 100 + "%";
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          >
            <Label
              content="percent"
              formatter={(val, item) => {
                return item.point[dimension] + ": " + val;
              }}
            />
          </Geom>
        </Chart>
        <p>{description}</p>
      </div>
    );
  }
}

export default BasicPie;
