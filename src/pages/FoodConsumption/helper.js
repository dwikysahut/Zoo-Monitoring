export const generateHighchartsData = (foodConsumer = []) => {
  //make day in a month
  const day = [];
  for (let i = 1; i <= 31; i++) {
    let a = `${i}/3`
    day.push(a);

  }

  //sorting data 
  const sortedZooData = foodConsumer.sort((a, b) => parseInt(a.day) - parseInt(b.day));

  //reduce data in same day and same animal and sum the meat.
  for (let i = 0; i < sortedZooData.length; i++) {
    for (let j = sortedZooData.length - 1; j > i; j--) {
      if (sortedZooData[i].day === sortedZooData[j].day && sortedZooData[i].animal === sortedZooData[j].animal) {
        sortedZooData[i].meat += sortedZooData[j].meat
        sortedZooData.splice(j, 1)
      }
    }
  }
  // change meat to Kg and 2 decimal
  const newDataSorted = foodConsumer.map(data => {
    const newDataFoodCons = {
      ...data,
      meat: Math.round((data.meat / 1000) * 100) / 100
    };
    return newDataFoodCons;
  })
  console.log(newDataSorted)

  //key for dynamic data
  const key = sortedZooData.filter(data => {
    return data.day === 1
  })

  const options = {
    chart: {
      type: 'column',
      height: 500,
      marginTop: 120,
    },
    title: {
      text: 'Daily Food Consumption',
      x: 10,
      y: 10,
      style: {
        fontSize: '18px'
      },
      align: 'right',
    },
    xAxis: {
      min: 0,
      categories: day,
      title: {
        text: 'period'
      },
      scrollbar: { enabled: true, liveRedraw: false },
      max: 12.5,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Meat consumption (Kg)'
      },
      max: 150,
      tickInterval: 25,
      stackLabels: {
        enabled: false,
        style: {
          fontWeight: 'bold',
        }
      }
    },
    legend: {
      align: 'Left',
      verticalAlign: 'top',
      floating: true,
      y: 30,
      borderWidth: 0,
      shadow: false,
      layout: 'horizontal'

    },
    colors: ['red', 'gray', "ForestGreen", 'gold', 'orange', 'limegreen', 'dodgerblue'],
    tooltip: {
      headerFormat: '<b>Period:{point.x}</b><br/>',
      pointFormat: ' <span style="color:{point.color}">\u25CF </span><span style="color:{black}">{series.name}</span>: <b>{point.y}</b><br/>',
      footerFormat: '<b>Total:  {point.total} </b>',
      shared: true
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        dataLabels: {
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
          title: {
            text: 'Daily Food Consumption',
            x: 10,
            y: 10,
            style: {
              fontSize: '15px'
            },
            align: 'right',
          },
          yAxis: {
            labels: {
              // align: 'left',
              x: 0,
              y: 0,
            },

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
  if (newDataSorted.length > 0) {
    key.map((key) => {
      options.series.push({
        name: key.animal,
        borderRadius: 3,
        data: newDataSorted.map((data, i, arr) => ({
          name: data.animal,
          y: data.animal === key.animal && data.meat,
          x: data.day - 1,

        }))

      });
    });
  }

  /* here if use static data where same color order */

  // if (newDataSorted.length > 0) {
  //   options.series = [
  //     {
  //       name: 'Beruang',
  //       color:'red',
  //       borderRadius:3,

  //       data: newDataSorted.map((data,i,arr) => ({
  //         name: data.animal,
  //         y: data.animal==="BERUANG" &&data.meat,
  //         x: data.day-1,

  //       }))

  //     },
  //     {
  //       name: 'Serigala',
  //       color:'gray',
  //       borderRadius:3,


  //       data:  newDataSorted.map((data) => ({
  //           name: data.animal,
  //           y: data.animal==="SERIGALA" &&data.meat,

  //          x: data.day-1,

  //         }))
  //     },
  //     {
  //       name: 'Buaya',
  //       color:'ForestGreen',
  //       borderRadius:3,


  //       data: newDataSorted.map((data) => ({
  //         name: data.animal,
  //         y: data.animal==="BUAYA" &&data.meat,

  //         x: data.day-1,

  //       }))
  //     },

  //     {
  //       name: 'Singa',
  //       color:'yellow',
  //       borderRadius:3,

  //       data: newDataSorted.map((data) => ({
  //         name: data.animal,
  //         y: data.animal==="SINGA" &&data.meat,

  //         x: data.day-1,

  //       }))
  //     },
  //     {
  //       name: 'Macan',
  //       borderRadius:3,
  //       color:'orange',

  //       data: newDataSorted.map((data) => ({
  //         name: data.animal,
  //         y: data.animal==="MACAN" &&data.meat,

  //         x: data.day-1,

  //       }))
  //     },
  //     {
  //       name: 'Ular',
  //       color:'LimeGreen',
  //       borderRadius:3,
  //       data: newDataSorted.map((data) => ({
  //         name: data.animal,
  //         y: data.animal==="ULAR" &&data.meat,

  //         x: data.day-1,

  //       }))
  //     },
  //     {
  //       name: 'Lainnya',
  //       color:'DodgerBlue',
  //       borderRadius:3,

  //       data: newDataSorted.map((data) => ({
  //         name: data.animal,
  //          x: data.day-1,
  //          y: data.animal==="LAINNYA" &&data.meat,
  //       }))
  //     }
  //   ]
  // }


  return options
}