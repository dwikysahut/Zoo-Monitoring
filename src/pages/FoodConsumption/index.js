import React, { useEffect, useState } from 'react'
import { Box, Grid, Paper, Table, TableCell, TableHead, TableRow, TableBody, Typography } from '@material-ui/core'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { generateHighchartsData } from './helper'

const FoodConsumption = () => {

 const [foodConsumer, setFoodConsumer] = useState([])

  useEffect(() => {
    fetch('/api/food-consumption.json')
      .then((res) => res.json())
      .then((res) => {
        setFoodConsumer(res.data.foodConsumption.daily)
      
      })
      console.log(foodConsumer)

      foodConsumer.map((data)=>{
        // let a= Array.sort(data);
        console.log(data)
       })
  }, [])
  useEffect(() => {
   
      // console.log(foodConsumer)

      // foodConsumer.filter((data)=>{
      //   // let a= Array.sort(data);
      //   if(data.day===3){
      //     console.log(data);
      //   }
      //  })
  }, [foodConsumer])
return (

  <Grid container>
     
      {/* <Grid container> */}
        <Box component={Paper} height="100%" width="100%">
          <Box p={6}>
          <HighchartsReact
              highcharts={Highcharts}
              options={generateHighchartsData(foodConsumer)}
              // constructorType={'columnChart'}
            />
          </Box>
        </Box>
      </Grid>
    // </Grid>
)
}

export default FoodConsumption
