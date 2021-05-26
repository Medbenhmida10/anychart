var getScriptPromisify = (src) => {
    return new Promise(resolve => {
      $.getScript(src, resolve)
    })
  }
  
  (function () {

    //Chart Block in HTML
    const prepared = document.createElement('template')
    prepared.innerHTML = `
        <div id="root" style="width: 100%; height: 100%;">
        </div>
      `
    
    //Main JS Class holds methods to be called
    class SamplePrepared extends HTMLElement {
      constructor () {

        //call SAC DOM Super method to get shadow DOM information
        super()
        
        //Get shadow DOM informations
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(prepared.content.cloneNode(true))
        
        //Set HTML block in shadow DOM of SAC
        this._root = this._shadowRoot.getElementById('root')
  
        //_props object is used to hold properties information
        this._props = {}
        
        //Call render() method to plot chart
        this.render(this._root)
      }
  
      //onCustomWidgetResize() method is execute whenever CW will resized in SAC.
      onCustomWidgetResize (width, height) {
        
        //Call render() method to plot chart
        this.render(this._root)
      }
      
      //render() method to plot chart - resultSet1 holds data from SAC table/chart.
      async render (root1) {
        console.log('Hi');
        await getScriptPromisify('https://cdn.anychart.com/releases/v8/js/anychart-base.min.js');
        await getScriptPromisify('https://cdn.anychart.com/releases/v8/js/anychart-ui.min.js');
        await getScriptPromisify('https://cdn.anychart.com/releases/v8/js/anychart-exports.min.js');

        console.log('Hi');

       anychart.onDocumentReady(function () {
 var stage = anychart.graphics.create("container");
  // data
  
   var dataSet = anychart.data.set([

        ['A', -20, 0, '-120', '120', -100, 100,0,20,0],
        ['B', 0, 20, '-180', '180', -200, 200,0,0,10],
        ['C', 0, 50, '-250', '250', -300, 300,0,0,17],
        ['D', -50, 0, '-200', '200', -150, 150,0,33,0],
        ['E', 0, 70, '-160', '160', -250, 250,0,0,28],
        ['F', -46, 0, '-150', '150', -204, 204,0,23,0]
      ]);
  // Chart1
   var firstSeriesChart1 = dataSet.mapAs({ x: 0, value: 7, label: 3});
   var chart1 = anychart.bar();
   chart1.yAxis(0).enabled(false);
   chart1.xAxis(0).enabled(false);
  // create series with mapped data
  var series1;
   series1 = chart1.bar(firstSeriesChart1).stroke('white');
   series1.labels(true);
   series1.labels().position("center");
   series1.labels().fontColor("BLACK");
   
  // format labels
   series1.labels().format("{%label}");
   chart1.bounds(0, 0, "10%", "100%");     
  // draw
   chart1.padding().right('0px');
   chart1.margin().right('0px');
   chart1.tooltip(false);
   chart1.container(stage);
   chart1.draw();
  // Chart2
  // map data for the first series
  var firstSeriesChart2 = dataSet.mapAs({ x: 0, value: 1, label: 8});

  // map data for the second series
  var secondSeriesChart2 = dataSet.mapAs({ x: 0, value: 6 });

  // map data for the third series
  var thirdSeriesChart2 = dataSet.mapAs({ x: 0, value: 2, label: 9});

  // create bar chart
  var Chart2 = anychart.bar();

  // turn on chart animation
  Chart2.animation(true);

  // force chart to stack values by Y scale.
  Chart2.yScale().stackMode('value');
    
  Chart2.xAxis(0).labels();
  Chart2.xAxis(0).stroke("white");
  Chart2.xAxis(0).ticks(false);
  Chart2.xAxis(0).orientation("right");
  // set yAxis labels formatting, force it to add % to values
  Chart2.yAxis(0).enabled(false);

  // helper function to setup label settings for all series
  var setupSeriesLabels = function (series, name) {
    series.name(name).stroke(' ');
    series.hovered().stroke(' ');
  };

  // temp variable to store series instance
  var series21;
  var series22;
  var series23;
  // create first series with mapped data
 

  // create second series with mapped data
  series21 = Chart2.bar(secondSeriesChart2).fill('GRAY');
  setupSeriesLabels(series21, 'TARGET');
  // format labels
  series21.labels(true);
  series21.labels().position("center");
  series21.labels().fontColor("linen");
  series21.labels().format("{%value}");
  series21.labels().fontWeight(500);
  series21.labels().textShadow('-1px 0px 2px black');
  // create third series with mapped data
  series22 = Chart2.bar(thirdSeriesChart2).fill('GREEN');
  setupSeriesLabels(series22, 'PDELTA');
  series22.labels(true);
  
  // format labels
  series22.labels().format("{%value}\n{%label}%");
  series22.labels().position("center")
  series22.labels().fontColor("linen");
  series22.labels().fontWeight(500);
  series22.labels().textShadow('-1px 0px 2px black');
  series23 = Chart2.bar(firstSeriesChart2).fill('RED');
  setupSeriesLabels(series23, 'NDELTA');
  // format labels
  series23.labels(true);
  series23.labels().format("{%value}\n{%label}%");
  series23.labels().position("center");
  series23.labels().fontColor("linen");
  series23.labels().fontWeight(500);
  series23.labels().textShadow('-1px 0px 1px black');
  Chart2.bounds("10%", 0, "40%", "100%");     
  // draw
  Chart2.padding().left('0px');
  Chart2.margin().left('0px');
  Chart2.tooltip(false);
  Chart2.container(stage);
  Chart2.draw();
  // Chart3
  // map data for the first series, take x from the zero column and value from the first column of data set
  var firstSeriesChart3  = dataSet.mapAs({ x: 0, value: 1, label: 8});

  // map data for the second series, take x from the zero column and value from the second column of data set
  var secondSeriesChart3 = dataSet.mapAs({ x: 0, value: 6 });

  // map data for the second series, take x from the zero column and value from the third column of data set
  var thirdSeriesChart3 = dataSet.mapAs({ x: 0, value: 2 , label: 9});


  // create bar chart
  var Chart3 = anychart.bar();

  // turn on chart animation
  Chart3.animation(true);

  // force chart to stack values by Y scale.
  Chart3.yScale().stackMode('value');
  Chart3.xAxis(0).enabled(false);
  // set yAxis labels formatting, force it to add % to values
  Chart3.yAxis(0).enabled(false);


  // temp variable to store series instance
  var series31;
  var series32;
  var series33;
  // create first series with mapped data


  // create second series with mapped data
  series32 = Chart3.bar(secondSeriesChart3).fill('GRAY');
  setupSeriesLabels(series32, 'TARGET');
  // format labels
  series32.labels(true);
  series32.labels().position("center")
  series32.labels().format("{%value}");
  series32.labels().fontColor("linen");
  series32.labels().fontWeight(500);
  series32.labels().textShadow('-1px 0px 1px black');
  // create third series with mapped data
  series33 = Chart3.bar(thirdSeriesChart3).fill('GREEN');
  setupSeriesLabels(series33, 'PDELTA');
  // format labels
  series33.labels(true);
  series33.labels().format("{%value}\n{%label}%");
  series33.labels().position("center");
  series33.labels().fontColor("linen");
  series33.labels().fontWeight(500);
  series33.labels().textShadow('-1px 0px 1px black');
  series31 = Chart3.bar(firstSeriesChart3).fill('RED');
  setupSeriesLabels(series31, 'NDELTA');
  // format labels
  series31.labels(true);
  series31.labels().format("{%value}\n{%label}%");
  series31.labels().position("center");
  series31.labels().fontColor("linen");
  series31.labels().fontWeight(500);
  series31.labels().textShadow('-1px 0px 1px black');
  Chart3.bounds("50%", 0, "40%", "100%"); 
  Chart3.padding().right('0px');
  Chart3.margin().right('0px');
  Chart3.tooltip(false);
  // draw
  Chart3.container(stage);
  Chart3.draw();
  // Chart4
   var firstSeriesChart4 = dataSet.mapAs({ x: 0, value: 7, label: 4});
   var Chart4 = anychart.bar();
   Chart4.yAxis(0).enabled(false);
   Chart4.xAxis(0).enabled(false);
  // create series with mapped data
  var series1;
   series1 = Chart4.bar(firstSeriesChart4).stroke('white');
   series1.labels(true);
   series1.labels().position("center");
   series1.labels().fontColor("black");
  // format labels
   series1.labels().format("{%label}");
   Chart4.bounds("90%", 0, "10%", "100%");     
  // draw
   Chart4.padding().left('0px');
   Chart4.margin().left('0px');
   Chart4.tooltip(false);
   Chart4.container(stage);
   Chart4.draw();
});
  
      }
    }
  
    customElements.define('com-sap-sample-echarts-prepared', SamplePrepared)
  })()
