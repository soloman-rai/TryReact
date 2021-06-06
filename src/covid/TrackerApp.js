import React, { useEffect, useState } from 'react';

import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import './assets/TrackerApp.css';
import InfoBox from './components/InfoBox';
import Map from './components/Map';
import Table from './components/Table';
import { sortData, prettyPrintStat } from './util';
import LineGraph from './components/LineGraph';


function TrackerApp() {
    const [countries, setCountries] = useState([]);
    const [country, setCurrentCountry] = useState('worldwide');
    const [countryInfo, setCountryInfo] = useState({});
    const [tableData, setTableData] = useState([]);
    const [mapCenter, setMapCenter] = useState({
        lat: '27.7172', lng: '85.3240'
    })
    const [mapZoom, setMapZoom] = useState(3);
    const [mapCountries, setMapCountries] = useState([]);
    const [casesType, setCasesType] = useState('cases');


    useEffect(() => {
        const getCountriesData = async () => {
            await fetch('https://disease.sh/v3/covid-19/countries')
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((item) => (
                        {
                            id: item.countryInfo.iso3,
                            name: item.country,
                            value: item.countryInfo.iso2
                    }
                    ));
                    setCountries(countries);

                    const sortedData = sortData(data);
                    setTableData(sortedData);

                    setMapCountries(data);
            })
        }

        getCountriesData();
    }, [])

    useEffect(() => {
        // fetch the data for worldwide
        fetch('https://disease.sh/v3/covid-19/all')
            .then(response => response.json())
            .then(data => setCountryInfo(data));
    }, [])

    const onCountryChange = async (e) => {
        const countryCode = e.target.value;
        setCurrentCountry(countryCode);

        const url =
            countryCode === 'worldwide' ?
                'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
        
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setCountryInfo(data);

                if (countryCode !== 'worldwide') {
                    console.log(data.countryInfo)
                    setMapCenter({ lat: data.countryInfo['lat'], lng: data.countryInfo['long'] });
                    setMapZoom(4);
                }
            });

    }

    return (
        <div className="app">
            <div className="app_left">
                {/* header */}
                <div className="app_header">
                    <h1>Covid 19 Tracker 🕰️</h1>
                    <FormControl className="app_dropdown">
                        <Select variant="outlined" color="secondary" value={country} onChange={onCountryChange}>
                            <MenuItem value="worldwide">Worldwide</MenuItem>
                            {
                                countries.map((country) => (
                                    <MenuItem key={country.id} value={country.value}>{country.name}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>

                <h3 style={{ margin: 10 }}>Stats for Today 📈</h3>
                <div className="app_stats">
                    <InfoBox
                        isRed
                        onClick={e => setCasesType("cases")}
                        active ={casesType === "cases"}
                        title="Active Cases"
                        cases={prettyPrintStat(countryInfo.todayCases)}
                        total={prettyPrintStat(countryInfo.cases)} />
                    <InfoBox
                        onClick={e => setCasesType("recovered")}
                        active ={casesType === "recovered"}
                        title="Recovered"
                        cases={prettyPrintStat(countryInfo.todayRecovered)}
                        total={prettyPrintStat(countryInfo.recovered)} />
                    <InfoBox
                        isRed
                        onClick={e => setCasesType("deaths")}
                        active ={casesType === "deaths"}
                        title="Deaths"
                        cases={prettyPrintStat(countryInfo.todayDeaths)}
                        total={prettyPrintStat(countryInfo.deaths)} />
                </div>

                <Map casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom} />
            </div>

            <Card className="app_right">
                <CardContent>
                    <div className="app_right_table">
                        <h3>Live Cases by Country</h3>
                        <Table countries={tableData} />
                    </div>

                    <div className="app_right_graph">
                        <h3>Worldwide New {casesType}</h3>
                        <LineGraph className="app_graph" casesType={casesType} />
                    </div>
                </CardContent>          
            </Card>
            
        </div>
    )
}

export default TrackerApp
