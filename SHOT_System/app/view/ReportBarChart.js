Ext.define('Packt.view.ReportBarChart', { 
   extend: 'Ext.chart.Chart', 
   alias: 'widget.ReportBarChart',
        style: 'background:#fff',
        animate: true,
        shadow: true,
        height: 500,
        width: 600,

        store: 'chart_reports',
        axes: [{
            type: 'Numeric',
            position: 'left',
            fields: ['f2'],
            label: {
                renderer: Ext.util.Format.numberRenderer('0,0')
            },
//            title: 'Number of Hits',
            grid: true,
            minimum: 0
        }, {
            type: 'Category',
            position: 'bottom',
            label: {
                rotate: {
                   degrees: 270
                  }
            },
            fields: ['f1']
//            title: 'Month of the Year'
        }],
        series: [{
            type: 'column',
            axis: 'left',
            highlight: true,
            tips: {
                trackMouse: true,
                renderer: function(storeItem, item) {
                    this.setTitle(storeItem.get('f1') + ': ' + storeItem.get('f2') + ' $');
                }
            },
            label: {
                display: 'insideEnd',
                'text-anchor': 'middle',
                field: 'f2',
                renderer: Ext.util.Format.numberRenderer('0'),
                orientation: 'vertical',
                color: '#333'
            },
            xField: 'f1',
            yField: 'f2'
        }]
    });




 