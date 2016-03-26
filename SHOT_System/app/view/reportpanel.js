Ext.define('Packt.view.reportpanel', {
 extend: 'Ext.panel.Panel',
 alias: 'widget.reportpanel',
 layout: 'card',
 title: 'Subject by Race',
 activeItem: 0,
 items: [
 {
 xtype: 'SuspectbyRacePieChart' 
 }
 ]
});