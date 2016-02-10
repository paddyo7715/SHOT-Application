Ext.define('Packt.view.MainMenu', {
    extend: 'Ext.panel.Panel', 
    alias: 'widget.MainMenu', 
//    bodyStyle:'padding:5px',
    width: 100,
    layout: {
        type: 'vbox',       
        align: 'stretch',    
        padding: 0
    },
    header: true,
    header:{
      title:'Main Menu',
      style: {
        backgroundColor:'#FFFFFF',
        backgroundImage:'none'
     }
    },
    items: [
    {
        padding: 10,
        xtype: 'button',
        border: '0 0 4 0',
        style: {
          borderColor: 'white',
          borderStyle: 'solid'
        },
        baseCls: 'menubutton',
        text: 'Home',
        itemId: 'mmHome',
        id :  'mmHome'        
    },{
        padding: 10,
        xtype: 'button',
        border: '4 0 4 0',
        style: {
          borderColor: 'white',
          borderStyle: 'solid'
        },
        baseCls: 'menubutton',
        text: 'New Incident',
        itemId: 'mmAddIncident',
        id :  'mmAddIncident'        
    },{
        padding: 10,
        xtype: 'button',
        border: '4 0 4 0',
        style: {
          borderColor: 'white',
          borderStyle: 'solid'
        },
        baseCls: 'menubutton',
        text: 'Update/Delete Incidents',
        itemId: 'mmUpdateIncident',
        id :  'mmUpdateIncident' 
    },{
        padding: 10,
        xtype: 'button',
        border: '4 0 4 0',
        style: {
          borderColor: 'white',
          borderStyle: 'solid'
        },
        baseCls: 'menubutton',
        text: 'Database Maint',
        itemId: 'mmDatabase',
        id :  'mmDatabase' 
    },{
        padding: 10,
        xtype: 'button',
        border: '4 0 4 0',
        style: {
          borderColor: 'white',
          borderStyle: 'solid'
        },
        baseCls: 'menubutton',
        text: 'Reports',
        itemId: 'mmReports',
        id :  'mmReports' 
    }]
});