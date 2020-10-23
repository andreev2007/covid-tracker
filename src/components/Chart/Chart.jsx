import React, {useState, useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';

import {fetchDailyData} from '../../api';

import styles from './Chart.module.css';
import {Circle} from "react-spinners-css";

const Chart = ({data: {confirmed, recovered, deaths}}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await fetchDailyData();

            setDailyData(initialDailyData);
        };

        fetchMyAPI();
    }, []);

    const lineChart = (
        dailyData[0] ? (
            <Line
                data={{
                    labels: dailyData.map(({date}) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyData.map((data) => data.deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }, {
                        data: dailyData.map((data) => data.recovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true,
                    },
                    ],
                }}
            />
        ) : null
    );

    if (!confirmed) {
        return (
            <div>
                <Circle color="red" size={200}/>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    );
};

export default Chart;
