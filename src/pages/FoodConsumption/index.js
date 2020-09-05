import React, { useEffect, useState } from 'react'
import { Box, Grid, Paper,Container } from '@material-ui/core'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { generateHighchartsData } from './helper'

const options = {
  title: {
    text: 'highcharts-react-official'
  },
  series: [{
    data: [1, 5, 3, 4]
  }]
}
 
const FoodConsumption = () => {

  const [foodConsumer, setFoodConsumer] = useState([])

const getData=()=>{
  fetch('/api/food-consumption.json')
  .then((res) => res.json())
  .then((res) => {
    setFoodConsumer(res.data.foodConsumption.daily)

  })
}
  useEffect(() => {
    getData();
  }, [])

  return (
  
    <Grid spacing={3} container>
    <Grid xs={11} lg={12}>
      <Box component={Paper} height="100%" width="100%">
        <Box p={1}>
          <HighchartsReact
            highcharts={Highcharts}
            options={generateHighchartsData(foodConsumer)}
            containerProps={{ style: { height: "100%" } }}
          />
        </Box>
      </Box>
    </Grid>
    </Grid>
    

  )
}

export default FoodConsumption
