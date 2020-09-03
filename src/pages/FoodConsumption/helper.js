
export const generateHighchartsData = (foodConsumption = []) => {
    const newData=foodConsumption.map(data=>{
         const newdataMeat={...data,
            meat:data.meat/100};
         return newdataMeat;
    })
    const getData=(name)=>{
        foodConsumption.filter(data=>{
            return data.animal===name
        })
    }
    let day=[];
     const maxDay= Math.max.apply(Math, foodConsumption.map(function(data) { return data.day; }))
    // console.log(maxMeat)
    for (let i = 1; i <= 31; i++) {
        let a= `${i}/3`
        day.push(a);
        console.log(a)
    }
    console.log(newData)
    const options = {
        chart: {
            type: 'column',
            // marginTop: 0
        },
        title: {
            text: 'Daily Food Consumption',
            x:0,
            align: 'right',
        },
        xAxis: {
          min: 0,
            categories:day,
            title: {
                text: 'period'
            },
            scrollbar: { enabled: true,showFull: false},
            // tickLength: 0,
             max: 12.5,
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Meat consumption (Kg)'
            },           
            max:150,
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    // color: ( // theme
                    //     Highcharts.defaultOptions.title.style &&
                    //     Highcharts.defaultOptions.title.style.color
                    // ) || 'gray'
                }
            }
        },
        legend: {
            align: 'Left',
            x: 0,
            verticalAlign: 'top',
            y: 0,
            floating: true,
            // backgroundColor:
            //     Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>Period:{point.x}</b><br/>',
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
            footerFormat: '<b>Total:  {point.total} </b>',
           
            shared:true
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: []
        
    }
    if (foodConsumption.length > 0) {
        options.series = [
          {
            name: 'Beruang',
            data: foodConsumption.map((data) => ({
              name: data.animal,
              y: data.meat,
            }))
           
          },
          {
            name: 'Serigala',
            data:  foodConsumption.map((data) => ({
                name: data.animal,
                y: data.meat,
              }))
          },
          {
            name: 'Buaya',
            data: foodConsumption.map((data) => ({
              name: data.animal,
              y: data.meat,
            }))
          },
          {
            name: 'Singa',
            data: foodConsumption.map((data) => ({
              name: data.animal,
              y: data.meat,
            }))
          },
          {
            name: 'Macan',
            data: foodConsumption.map((data) => ({
              name: data.animal,
              y: data.meat,
            }))
          },
          {
            name: 'Ular',
            data: foodConsumption.map((data) => ({
              name: data.animal,
              y: data.day,
            }))
          },
          {
            name: 'Lainnya',
            data: newData.map((data) => ({
              name: data.animal,
              x: data.day-1,
              y: data.meat,   
            //   color: 'blue'
            }))
          }
          
          
        ]
      }
    
    
    return options
  }