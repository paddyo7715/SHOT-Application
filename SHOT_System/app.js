Ext.application({ 
  requires: ['Ext.container.Viewport'],
  name: 'Packt',
  alias: 'widget.mainviewport',
  appFolder: 'app',
  controllers: [
          'cont'
    ],
  init: function() {
    splashscreen = Ext.getBody(). mask(' Loading application', 'splashscreen');
  },
  launch: function() { 
    var task = new Ext.util.DelayedTask( function() { Ext.getBody().unmask(); });
    Ext.util.DelayedTask( function() { 
      splashscreen.fadeOut({ duration: 1000, remove:true });
      splashscreen.next().fadeOut({ duration: 1000, remove:true });
      console.log(' launch'); 
    });         
    task.delay( 2000);

    Ext.create('Ext.container.Viewport', { 
    layout: 'border', 
    style: 'background-color: #FFFFFF;', 
    items: [
      { 
          xtype: 'MainMenu',
          width: 150,
          collapsible: false,
          style: 'border-right: 4px solid #4c72a4;',
          region: 'west'
      },
      {
        xtype: 'appheader', 
        region: 'north'
      },	 
      {
        xtype: 'panel', 
        style: 'border-bottum: 1px solid #4c72a4;',
        region: 'center',
        id: 'centerpanel',        
        layout: 'card',
        items: [
        { 
            xtype: 'panel',
            padding: '10 0 0 0',
            layout: {
              type: 'vbox',
              align: 'center'
            },   
            items: [
            {
            xtype: 'container',
            html:'<img  height="455" width="420" src="app/resources/images/shotlogo.png">'
            }
            ]
        },        { 
            xtype: 'panel',
//        style: 'border-bottom: 0px;',
            layout: {
              type: 'vbox',
              align: 'center'
            },   
             padding: '10 0 0 0',
            requires: [ 'incidentcontainer' ],
            items: [
            {
            xtype: 'incidentcontainer'
            }
            ]
        },
        { 
            xtype: 'panel',
            padding: '10 0 0 0',
            requires: [ 'Incidentgrid' ],
            layout: {
              type: 'vbox',
              align: 'center'
            },  
            items: [
            {
            xtype: 'Incidentgrid'
            }
            ]
        },
        { 
          xtype: 'panel', 
          id: 'rptpanel',        
          layout: 'card',
          items: [
          { 
             xtype: 'reportsgrid'
          },
          { 
             xtype: 'reportpanel'
          }]
       }
        ]
      }

        ]
      }
    );

     
  }
});



