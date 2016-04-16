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
        style: 'border-bottom: 1px solid #4c72a4;',
        region: 'center',
        id: 'centerpanel',  
        layout: 'card',
        items: [
         { 
            xtype: 'panel',
            padding: '10 0 0 0',
            requires: [ 'Summarycontainer','InjuryDeathRatio','ShootingsThisYear','TopFiveCityStateGrid','topFiveDepartments','TotalShootings', 'RacePercentage', 'RacePercentage2', 'SuspectGender' ],
            layout: {
              type: 'vbox',
              align: 'center'
            },
             html: '<h1 style="color: #4C72A4; text-align: center; font-weight: 100">Overall Descriptive Statistics</h1>',
            items: [
            {
            xtype: 'Summarycontainer'
            },
            {
            xtype: 'Summarycontainer2'
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
             xtype: 'panel', 
             padding: '10 0 0 0',
             requires: [ 'reportfieldform' ],   
             layout: {
               type: 'vbox',
               align: 'center'
             },  
             items: [
             {
               xtype: 'reportfieldform'
             }]
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



