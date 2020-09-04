
export const generateHighchartsData = (foodConsumption = []) => {
  const newData = foodConsumption.map(data => {
    const newdataMeat = {
      ...data,
      meat: Math.round((data.meat/1000) * 100) / 100 
    };
    return newdataMeat;
  })

  const sortDataZoo = newData.sort((a, b) => parseInt(a.day) - parseInt(b.day));
  console.log(sortDataZoo)

let noSameData=[]
for(let i=0;i<sortDataZoo.length;i++){
  // console.log(sortDataZoo[0])
  for(let j=sortDataZoo.length-1;j>i;j--){
    if(i!==j && sortDataZoo[i].day === sortDataZoo[j].day && sortDataZoo[i].animal === sortDataZoo[j].animal ){
      sortDataZoo[i].meat+=sortDataZoo[j].meat
      sortDataZoo.splice(j,1)
      
    }
  }
}
console.log(sortDataZoo)


  console.log(sortDataZoo)
  let key=[]
  function createSeries(newData) {
    var series = [];
    const sortDataZoo = newData.sort((a, b) => parseInt(a.day) - parseInt(b.day));
    // let i=0;
    console.log(sortDataZoo)
    let j = 0
    // series.push(new Array());
    for (let i = 0; i < sortDataZoo.length; i++) {

      //  console.log(sortDataZoo[i]);
      // console.log('sadsd')
      // console.log(sortDataZoo[j].day)
      for (let j = 0; j < sortDataZoo.length; j++) {
        // console.log(i,j)
        if (sortDataZoo[j].day === i + 1) {
          series[i][j] = sortDataZoo[j]

        }
        else{break;}
       
      }

    };
    console.log(series)
    return series;
  }
  let day = [];
  // const maxDay = Math.max.apply(Math, foodConsumption.map(function (data) { return data.day; }))
  for (let i = 1; i <= 31; i++) {
    let a = `${i}/3`
    day.push(a);
  }
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Daily Food Consumption',
      x: 0,
      align: 'right',
    },
    xAxis: {
      min: 0,
      categories: day,
      title: {
        text: 'period'
      },
      scrollbar: { enabled: true ,liveRedraw:false},
      // tickLength: 0,
      max: 12.5,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Meat consumption (Kg)'
      },
      max: 150,
      stackLabels: {
        enabled: true,
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
      borderWidth: 1,
      shadow: false,
      
    },
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

  }
  if (foodConsumption.length > 0) {
    options.series = [
      {
        name: 'Beruang',
        data: sortDataZoo.map((data,i,arr) => ({
          name: data.animal,
          y: data.animal==="BERUANG" &&data.meat,
          x: data.day-1,

        }))

      },
      {
        name: 'Serigala',
        data:  sortDataZoo.map((data) => ({
            name: data.animal,
            y: data.animal==="SERIGALA" &&data.meat,

           x: data.day-1,

          }))
      },
      {
        name: 'Buaya',
        data: sortDataZoo.map((data) => ({
          name: data.animal,
          y: data.animal==="BUAYA" &&data.meat,

          x: data.day-1,

        }))
      },
      
      {
        name: 'Singa',
        data: sortDataZoo.map((data) => ({
          name: data.animal,
          y: data.animal==="SINGA" &&data.meat,

          x: data.day-1,

        }))
      },
      {
        name: 'Macan',
        data: sortDataZoo.map((data) => ({
          name: data.animal,
          y: data.animal==="MACAN" &&data.meat,

          x: data.day-1,

        }))
      },
      {
        name: 'Ular',
        data: sortDataZoo.map((data) => ({
          name: data.animal,
          y: data.animal==="ULAR" &&data.meat,

          x: data.day-1,

        }))
      },
      {
        name: 'Lainnya',
        data: sortDataZoo.map((data) => ({
          name: data.animal,
           x: data.day-1,
           y: data.animal==="LAINNYA" &&data.meat,
        }))
      }
    ]
  }


  return options
}