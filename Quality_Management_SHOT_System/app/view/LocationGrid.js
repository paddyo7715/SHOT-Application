Ext.define('Packt.view.LocationGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.LocationGrid',

    height: 200,
    id: 'LocationGrid',
    scroll: 'vertical',
    width: 500,
    border: 0,
            dockedItems: [
             { 
               xtype: 'toolbar',
//               flex: 1,
               width: 700,
               dock: 'top',
               items: [
               {
                 xtype: 'displayfield',
                 fieldLabel: '',
                 width: 340
               },
               { 
                 xtype: 'button',
                 text: 'Add',
                 id: 'locgridaddbtn',
                 itemId: 'locgridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'locgrideditbtn',
                 itemId: 'locgrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'locgriddelete',
                 itemId: 'locgriddelete'
               }
               ]
            }
            ],          


    store: 'Locations',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Locations',  dataIndex: 'Location', flex: 5},
    ];

        this.callParent(arguments);
    }
});