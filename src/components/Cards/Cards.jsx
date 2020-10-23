import React from "react";
import styles from './Cards.module.css'
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import {Circle} from 'react-spinners-css';
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed) {
        return (
            <div>
                <Circle color="#be97e8" size={100}/>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp duration={5} end={confirmed.value} start={0} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Real Data</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp duration={5} end={recovered.value} start={0} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Real Data</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp duration={5} end={deaths.value} start={0} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Real Data</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
