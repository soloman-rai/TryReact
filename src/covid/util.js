import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';
import React from 'react';


export const sortData = (data) => {
    const sortedData = [...data]

        // Using ES6 function sort
    // sortedData.sort((a, b) => {
    //     if (a.cases > b.cases) {
    //         return -1;
    //     } else {
    //         return 1;
    //     }
    // })
    // return sortedData;

    //OR
    return sortedData.sort((a, b) => (a.cases > b.cases  ? -1 : 1));
}


export const buildChartData = (data, casesType='cases') => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data[casesType]) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };



export const chartOptions = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspecRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false
                },
                ticks: {
                    // include a dollar sign in the ticks
                    callback: function (value, index, values) {
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    }
}


const casesTypeColors = {
    cases: {
      hex: "#CC1034",
      rgb: "rgb(204, 16, 52)",
      half_op: "rgba(204, 16, 52, 0.5)",
      multiplier: 200,
    },
    recovered: {
      hex: "#7dd71d",
      rgb: "rgb(125, 215, 29)",
      half_op: "rgba(125, 215, 29, 0.5)",
      multiplier: 200,
    },
    deaths: {
      hex: "#fb4443",
      rgb: "rgb(251, 68, 67)",
      half_op: "rgba(251, 68, 67, 0.5)",
      multiplier: 1500,
    },
};

  
// Draw circles on map with interactive tool tips
export const showDataOnMap = (data, casesType = 'cases') => (
    data.map(country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].rgb}
            radius={
                Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
            }
        >
            <Popup>
                <div className="info_container">
                    <div className="info_flag" style={{ backgroundImage: `url(${country.countryInfo.flag})` }}></div>
                    <div className="info_name">{country.country}</div>
                    <div className="info_confirmed">Cases: {numeral(country.cases).format("0,0")}</div>
                    <div className="info_recovered">Recovered: {numeral(country.recovered).format("0,0")}</div>
                    <div className="info_deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>
                </div>
            </Popup>
        </Circle>
    ))
);


export const prettyPrintStat = stat => 
    stat ? `+${numeral(stat).format("0.0a")}` : "+0";