Ext.define('Packt.view.suspectsearch' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.suspectsearch',

//    title: 'Officer Search Results',
    height: 300,
    id: 'suspectsearch',
    scroll: 'vertical',
    width: 500,
    border: 3,
    dockedItems: [
             { 
               xtype: 'toolbar',
//               flex: 1,
               width: 200,
               dock: 'bottom',
               items: [
               {
                 xtype: 'displayfield',
                 fieldLabel: '',
                 width: 210
               },
               { 
                 xtype: 'button',
                 text: 'Select',
                 itemId: 'ssselectbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Cancel',
                 handler: function() {
                 var win1 = Ext.getCmp('xgrid-win-sus-ssearch');
                 win1.destroy();
                 }
               }
               ]
            }
            ],          
    store: 'suspect_search',
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Name',  dataIndex: 'Suspect_Name', flex: 4},
            {header: 'Gender', dataIndex: 'Gender', flex: 3},
            {header: 'Race', dataIndex: 'Race', flex: 4}
    ];

        this.callParent(arguments);
    }
});