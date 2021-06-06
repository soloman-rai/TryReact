import React, { useState, useEffect } from 'react';

import { Line } from 'react-chartjs-2';
import { buildChartData, chartOptions } from '../util';


function LineGraph({casesType, ...props}) {
    const [data, setData] = useState({}); /// to store the data for the last 120 days

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                const chartData = buildChartData(data, casesType);
                setData(chartData);
        })
    }, [casesType])

    

    return (
        <div className={props.className}>
            {data?.length > 0 && (
                <Line
                data={{
                    datasets: [
                        {
                            backgroundColor: "rgba(204, 16, 52, 0.5)",
                            borderColor: "#CC1034",
                            data: data,
                        },
                    ],
                }}
                options = {chartOptions}
                />
            )}
            
        </div>
    )
}

export default LineGraph
