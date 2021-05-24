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

        anychart.onDocumentReady(function() {
          // create column chart
                    // create column chart
            var dataSet = anychart.data.set([

        ['A', -20, 0, '-120', '120', -100, 100],
        ['B', 0, 20, '-180', '180', -200, 200],
        ['C', 0, 50, '-250', '250', -300, 300],
        ['D', -50, 0, '-200', '200', -150, 150],
        ['E', 0, 70, '-180', '180', -250, 250],
        ['F', -46, 0, '-250', '250', -204, 204]
      ]);

      // map data for the first series, take x from the zero column and value from the first column of data set
      var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

      // map data for the second series, take x from the zero column and value from the second column of data set
      var secondSeriesData = dataSet.mapAs({ x: 0, value: 6 });

      // map data for the second series, take x from the zero column and value from the third column of data set
      var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });


      // create bar chart
      var chart = anychart.bar();

      // turn on chart animation
      chart.animation(true);

      // force chart to stack values by Y scale.
      chart.yScale().stackMode('percent');

      // set chart title text settings
      chart.title('Regional ratio of cosmetic products sales');

      // set yAxis labels formatting, force it to add % to values
      chart.yAxis(0).labels().format('{%Value}%');

      // helper function to setup label settings for all series
      var setupSeriesLabels = function (series, name) {
        series.name(name).stroke('3 #fff 1');
        series.hovered().stroke('3 #fff 1');
      };

      // temp variable to store series instance
      var series;

      // create first series with mapped data
      series = chart.bar(firstSeriesData);
      setupSeriesLabels(series, 'NDELTA');

      // create second series with mapped data
      series = chart.bar(secondSeriesData);
      setupSeriesLabels(series, 'TARGET');

      // create third series with mapped data
      series = chart.bar(thirdSeriesData);
      setupSeriesLabels(series, 'PDELTA');


      // turn on legend
      chart.legend().enabled(true).fontSize(14).padding([0, 0, 15, 0]);

      chart.interactivity().hoverMode('by-x');

      chart.tooltip().displayMode('union').valuePrefix('$');
      
          // set container id for the chart
          chart.container(root1);
      
          // initiate chart drawing
          chart.draw();
      });
  
      }
    }
  
    customElements.define('com-sap-sample-echarts-prepared', SamplePrepared)
  })()
