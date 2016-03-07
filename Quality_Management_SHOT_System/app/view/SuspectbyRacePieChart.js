Ext.define('Packt.view.SuspectbyRacePieChart', { 
   extend: 'Ext.chart.Chart', 
   alias: 'widget.SuspectbyRacePieChart',
   animate: true, 
   store: 'suspect_races', 
   shadow: true, 
   legend: { position: 'right' }, 
   insetPadding: 60, 
   theme: 'Base:gradients', 
   series: [{ 
     type: 'pie', 
     field: 'incidents', 
     showInLegend: true, 
     tips: {
       trackMouse: true, 
       width: 140, 
       height: 28, 
       renderer: function(storeItem, item)
       { 
         this.setTitle( storeItem.get('race') + ': ' + storeItem.get('incidents'));
       } }, 
      highlight: { segment: { margin: 20 } }, 
      label: { field: 'race', display: 'rotate', contrast: true, font: '18px Arial' }
   }]
});







 