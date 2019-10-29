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

import response from "../data/basic-colunm";

const { xAxis, yAxis, title, description, data } = response.data[0];

const {field: xField, label: xLabel} = xAxis;
const {field: yField, label: yLabel} = yAxis;

const cols = {};
cols[xField] = {alias: xLabel};
cols[yField] = {alias: yLabel};

class BasicColumn extends React.Component {
  render() {
    return (
      <div className="chart-container">
        {/* <h3>{title}</h3> */}
        <Chart height={400} padding={60} data={data} scale={cols} forceFit>
          <Axis name={xField} title={false} />
          <Axis name={yField} title={false} />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="interval"
            color={xField}
            position={`${xField}*${yField}`}
          />
        </Chart>
        {/* <p>{description}</p> */}
      </div>
    );
  }
}

export default BasicColumn;
