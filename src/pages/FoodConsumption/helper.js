import FoodConsumption from ".";

export const generateHighchartsData = (foodConsumption = []) => {
    const getData=(name)=>{

    }
    let day=[];
     const maxDay= Math.max.apply(Math, foodConsumption.map(function(data) { return data.day; }))
    // console.log(maxMeat)
    for (let i = 0; i < 31; i++) {
        let a= `${i+1}/3`
        day.push(a);
        console.log(a)
    }
    console.log(day)
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
            //  min: day[0],
            categories:day,
            title: {
                text: 'period'
            },
            scrollbar: { enabled: true},
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
            headerFormat: 'period:{series.data.day}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
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
            data: foodConsumption.map((data) => ({
              name: data.animal,
              y: data.day,
            //   color: 'blue'
            }))
          }
          
          
        ]
      }
    
    
    return options
  }