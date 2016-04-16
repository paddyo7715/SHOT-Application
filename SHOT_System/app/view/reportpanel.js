Ext.define('Packt.view.reportpanel', {
 extend: 'Ext.panel.Panel',
 alias: 'widget.reportpanel',
 layout: {
          type:  'vbox',
          align: 'center'
 },    
 title: '',
 id: 'reportpanel',
 titleAlign: 'center', 
 activeItem: 0,
 items: [
   {
      html: "<p>hello</p>",
      xtype: 'container',
      baseCls: 'rptFiltertext',
      id: 'rpt_filter_text',
      height: 40,
      width: '100%'
   },
   {
    xtype: 'panel', 
    id: 'chartpanel',    
    height: '440',
    style: 'border-bottom: 0',
    width: '100%',    
    layout: 'card',     
    items: [
    {
       xtype: 'ReportPieChart',
       layout: {
        type: 'fit',
         align: 'center'
      }    
    },
    {
          xtype: 'panel',
          style: 'border-bottom: 0px;',
          layout: {
            type: 'vbox',
            align: 'center'
          },   
          width: '100%',
          height: '100%',
           padding: '10 10 10 10',
          requires: [ 'ReportGridChart' ],
            items: [
            {
              xtype: 'ReportGridChart'
            }] 
    },
    {
       xtype: 'ReportBarChart',
       layout: {
        type: 'fit',
         align: 'center'
      }    
    }

    ]

   },
   {
          xtype: 'panel',
          style: 'border-bottom: 0px;',
          layout: {
            type: 'hbox',
            align: 'center',
            pack: 'center'
          },   
          items: [
            {
               xtype: 'button',
               text : 'Return',
               height: 20,
               width: 100,    
               handler: function() {
                 var rpanel = Ext.getCmp('rptpanel');
                 rpanel.getLayout().setActiveItem(0);
               }
            },
            {
              xtype : 'splitbutton',
              text: 'Report Type',
               height: 20,
               width: 100,   
              menu : {
                items : [ 
                {text : 'Pie Chart',  handler: function() { var cpanel = Ext.getCmp('chartpanel'); cpanel.getLayout().setActiveItem(0); }},
                {text : 'Grid Report', handler: function() { var cpanel = Ext.getCmp('chartpanel'); cpanel.getLayout().setActiveItem(1); }},
                {text : 'Bar Chart',  handler: function() { var cpanel = Ext.getCmp('chartpanel'); cpanel.getLayout().setActiveItem(2); }}
              ]}
            }
            ]
   }

  ]
});