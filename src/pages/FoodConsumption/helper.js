
export const generateHighchartsData = (foodConsumption = [],day=[]) => {
 // change meat to Kg and 2 decimal
  const newData = foodConsumption.map(data => {
    const newDataFoodCons = {
      ...data,
      meat: Math.round((data.meat/1000) * 100) / 100 
    };
    return newDataFoodCons;
  })
  //sorting data 
  const sortedZooData = newData.sort((a, b) => parseInt(a.day) - parseInt(b.day));

//reduce data in same day and same animal and sum the meat.
for(let i=0;i<sortedZooData.length;i++){
  for(let j=sortedZooData.length-1;j>i;j--){
    if(sortedZooData[i].day === sortedZooData[j].day && sortedZooData[i].animal === sortedZooData[j].animal ){
      sortedZooData[i].meat+=sortedZooData[j].meat
      sortedZooData.splice(j,1)
    }
  }
} 
//key for dynamic data
const key=sortedZooData.filter(data=>{
  return data.day===1
})

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Daily Food Consumption',
      x: 10,
      size:10,
      align: 'right',
    },
    xAxis: {
      min: 0,
      categories: day,
      title: {
        text: 'period'
      },
      scrollbar: { enabled: true ,liveRedraw:false},
      max: 12.5,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Meat consumption (Kg)'
      },
      max: 150,
      stackLabels: {
        enabled: false,
        style: {
          fontWeight: 'bold',
        }
      }
    },
    legend: {
      align: 'Left',
      x: 0,
      verticalAlign: 'top',
      y: 0,
      floating: true,
      borderColor: '#CCC',
      borderWidth: 0,
      shadow: false,
      // verticalAlign: 'bottom',
      layout: 'horizontal'
      
    },
    colors: ['red','grey',"ForestGreen",'yellow','orange','limegreen','dodgerblue'],
    tooltip: {
      headerFormat: '<b>Period:{point.x}</b><br/>',
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
      footerFormat: '<b>Total:  {point.total} </b>',
      shared: true
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        dataLabels: {
          // enabled: true
        }
      },
    },
    series: [],
    responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
            legend: {
              enabled: false
            },
              yAxis: {
                  labels: {
                      align: 'left',
                      x: 0,
                      y: -5
                  },
                  title: {
                      text: null
                  }
              },
              subtitle: {
                  text: null
              },
              credits: {
                  enabled: false
              }
          }
      },
    ]
  },

  }
  /* here if use dynamic data where the name of series include all and auto added to series from JSON.*/

  if (sortedZooData.length > 0) {
    key.map((key) => {
      options.series.push({
        name: key.animal,
        //  color:['red','grey',"ForestGreen",'yellow','orange','limegreen','dodgerblue'],
        data: sortedZooData.map((data,i,arr) => ({
                  name: data.animal,
                  y: data.animal===key.animal &&data.meat,
                  x: data.day-1,
        
                }))
    
    });
  });
  }

  /* here if use static data where same color order */

  // if (foodConsumption.length > 0) {
  //   options.series = [
  //     {
  //       name: 'Beruang',
  //       color:'red',
  //       borderRadius:3,

  //       data: sortedZooData.map((data,i,arr) => ({
  //         name: data.animal,
  //         y: data.animal==="BERUANG" &&data.meat,
  //         x: data.day-1,

  //       }))

  //     },
  //     {
  //       name: 'Serigala',
  //       color:'gray',
  //       borderRadius:3,


  //       data:  sortedZooData.map((data) => ({
  //           name: data.animal,
  //           y: data.animal==="SERIGALA" &&data.meat,

  //          x: data.day-1,

  //         }))
  //     },
  //     {
  //       name: 'Buaya',
  //       color:'ForestGreen',
  //       borderRadius:3,


  //       data: sortedZooData.map((data) => ({
  //         name: data.animal,
  //         y: data.animal==="BUAYA" &&data.meat,

  //         x: data.day-1,

  //       }))
  //     },
      
  //     {
  //       name: 'Singa',
  //       color:'yellow',
  //       borderRadius:3,

  //       data: sortedZooData.map((data) => ({
  //         name: data.animal,
  //         y: data.animal==="SINGA" &&data.meat,

  //         x: data.day-1,

  //       }))
  //     },
  //     {
  //       name: 'Macan',
  //       borderRadius:3,
  //       color:'orange',

  //       data: sortedZooData.map((data) => ({
  //         name: data.animal,
  //         y: data.animal==="MACAN" &&data.meat,

  //         x: data.day-1,

  //       }))
  //     },
  //     {
  //       name: 'Ular',
  //       color:'LimeGreen',
  //       borderRadius:3,
  //       data: sortedZooData.map((data) => ({
  //         name: data.animal,
  //         y: data.animal==="ULAR" &&data.meat,

  //         x: data.day-1,

  //       }))
  //     },
  //     {
  //       name: 'Lainnya',
  //       color:'DodgerBlue',
  //       borderRadius:3,

  //       data: sortedZooData.map((data) => ({
  //         name: data.animal,
  //          x: data.day-1,
  //          y: data.animal==="LAINNYA" &&data.meat,
  //       }))
  //     }
  //   ]
  // }


  return options
}