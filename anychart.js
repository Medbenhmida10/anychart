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
          var chart = anychart.column();
      
          // set chart title
          chart.title('Top 10 Cosmetic Products by Revenue');
      
          // set chart data
          chart.data([
              {x: 'Rouge', value: 805400},
              {x: 'Foundation', value: 94190},
              {x: 'Mascara', value: 102610},
              {x: 'Lip gloss', value: 110430},
              {x: 'Pomade', value: 128000}
          ]);
          // set container id for the chart
          chart.container(root1);
      
          // initiate chart drawing
          chart.draw();
      });
  
      }
    }
  
    customElements.define('com-sap-sample-echarts-prepared', SamplePrepared)
  })()
