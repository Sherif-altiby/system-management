import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const Salles = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div className="static_card_custom">
            <ChartContainer
              sx={{ width: "100%" }}
              height={300}
              series={[{ data: uData, label: "uv", type: "bar" }]}
              xAxis={[{ scaleType: "band", data: xLabels }]}
            >
              <BarPlot />
            </ChartContainer>
          </div>
        </div>
        <div className="col-6">
          <div className="static_card_custom">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                  area: true,
                },
              ]}
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salles;
