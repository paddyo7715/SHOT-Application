Ext.define('Packt.view.officersearch' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.officersearch',

//    title: 'Officer Search Results',
    height: 300,
    id: 'officersearch',
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
                 itemId: 'osselectbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Cancel',
                 handler: function() {
                 var win1 = Ext.getCmp('xgrid-win-osearch');
                 win1.destroy();
                 }
               }
               ]
            }
            ],          
    store: 'officer_search',
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Name',  dataIndex: 'Name', flex: 4},
            {header: 'Gender', dataIndex: 'Gender', flex: 3},
            {header: 'Race', dataIndex: 'Race', flex: 4},
            {header: 'Additional Info', dataIndex: 'Additional Info', flex: 7}
    ];

        this.callParent(arguments);
    }
});