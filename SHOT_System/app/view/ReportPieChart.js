Ext.define('Packt.view.ReportPieChart', { 
   extend: 'Ext.chart.Chart', 
   alias: 'widget.ReportPieChart',
   animate: true, 
   height: 500,
   width: '100%',
   id: 'ReportPieChart',   
   store: 'chart_reports', 
   shadow: true, 
   legend: { position: 'right' }, 
   insetPadding: 60, 
   theme: 'Base:gradients', 
   series: [{ 
     type: 'pie', 
     field: 'f2', 
     showInLegend: true, 
     tips: {
       trackMouse: true, 
       width: 140, 
       height: 28, 
       renderer: function(storeItem, item)
       { 
         this.setTitle( storeItem.get('f1') + ': ' + storeItem.get('f2'));
       } }, 
      highlight: { segment: { margin: 20 } }, 
      label: { field: 'f1', display: 'rotate', contrast: true, font: '10px Arial' }
   }]
});







 