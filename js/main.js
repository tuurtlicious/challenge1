window.onload = function () {
    
    CanvasJS.addColorSet("colorPalette",
    [//colorSet Array 
        "#d9d7dc",
        "#f6f5bc",
        "#e0a6a1",
        "#cfe5ed",
        "#c8bac1",
        "#abd3df",
        "#9fccad",
        "#415d85"
    ]);

    var chart = new CanvasJS.Chart("chartContainer", {

        colorSet: "colorPalette",

        animationEnabled: true,
        theme: "dark1", // "light1", "light2", "dark1", "dark2"
            title:{
            text: "Food inventory",
        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 15,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 45, label: "Water" },
                { y: 7, label: "Candy" },
                { y: 27, label: "Fruit" },
                { y: 30, label: "Vegetables"},
                { y: 15, label: "Nutritionbars"},
            ]
        }]
    });
    chart.render();

    var chart1 = new CanvasJS.Chart("chartContainer1", {

        colorSet: "colorPalette",

        animationEnabled: true,
        theme: "dark1", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Fuel"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million litres",
            dataPoints: [      
                { y: 360878, label: "year 2050" },
                { y: 344095,  label: "year 3000" },
                { y: 309482,  label: "year 3050" },
                { y: 270384,  label: "year 4000" },
                { y: 250364,  label: "year 4050" },
                { y: 230948, label: "year 5000" },
                { y: 203490,  label: "year 5050" },
                { y: 170983,  label: "year 6000" }
            ]
        }]
    });
    chart1.render();
    
    var dps = [];
    var chart2 = new CanvasJS.Chart("chartContainer2", {
        exportEnabled: false,
        theme: "dark1", // "light1", "light2", "dark1", "dark2"
        title :{
            text: "Velocity in km/h"
        },
        axisY: {
            includeZero: false
        },
        data: [{
            type: "spline",
            markerSize: 0,
            dataPoints: dps,
            lineColor: "#f08585",
            // lineThickness: "2", 
        }]
    });

    var xVal = 0;
    var yVal = 100;
    var updateInterval = 1000;
    var dataLength = 50; // number of dataPoints visible at any point

    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
            yVal = yVal + Math.round(2000 + Math.random() *(-5-5));
            dps.push({
                x: xVal,
                y: yVal
            });
            xVal++;
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart2.render();
    };

    updateChart(dataLength); 
    setInterval(function(){ updateChart() }, updateInterval); 

    }
