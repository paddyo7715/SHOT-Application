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
        hidden: true,
        style: {
          borderColor: 'white',
          borderStyle: 'solid'
        },
        baseCls: 'menubutton',
        text: 'User Management',
        itemId: 'mmUsers',
        id :  'mmUsers' 
    },{
        padding: 10,
        xtype: 'button',
        border: '4 0 4 0',
        hidden: true,
        style: {
          borderColor: 'white',
          borderStyle: 'solid'
        },
        baseCls: 'menubutton',
        text: 'Database Maint',
        itemId: 'mmDatabase',
        id :  'mmDatabase' 
    }
    ]
});