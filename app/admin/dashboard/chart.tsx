'use client';

import { Chart } from "react-google-charts";

export function ChartComponent() {
    return <Chart
        chartType="ScatterChart"
        rows={[[8, 12], [4, 5.5], [11, 14], [4, 5], [3, 3.5], [6.5, 7]]}
        columns={[
          {
            type: "number",
            label: "Age"
          },
          {
            type: "number",
            label: "Weight"
          }
        ]}
        data={[["Age", "Weight"], [1, 2], [2, 4], [3, 6], [4, 8]]}
        width="100%"
    />
}