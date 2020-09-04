import React, { useEffect, useState } from 'react'
import { Box, Grid, Paper } from '@material-ui/core'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { generateHighchartsData } from './helper'

const FoodConsumption = () => {

  const [foodConsumer, setFoodConsumer] = useState([])
   const [dayList, setDayList] = useState([])


  useEffect(() => {
    fetch('/api/food-consumption.json')
      .then((res) => res.json())
      .then((res) => {
        setFoodConsumer(res.data.foodConsumption.daily)

      })
    //make day in a month
    let day = [];
    for (let i = 1; i <= 31; i++) {
      let a = `${i}/3`
      day.push(a);
      setDayList(day)
    }
  }, [])

  return (

    <Grid container>
      <Box component={Paper} height="100%" width="100%">
        <Box p={8}>
          <HighchartsReact
            highcharts={Highcharts}
            options={generateHighchartsData(foodConsumer, dayList)}
            containerProps={{ style: { height: "100%" } }}
          />
        </Box>
      </Box>
    </Grid>

  )
}

export default FoodConsumption
