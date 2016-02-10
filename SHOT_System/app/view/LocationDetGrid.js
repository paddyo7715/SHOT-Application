Ext.define('Packt.view.LocationDetGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.LocationDetGrid',

    height: 400,
    id: 'LocationDetGrid',
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
                 id: 'locdgridaddbtn',
                 itemId: 'locdgridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'locdgrideditbtn',
                 itemId: 'locdgrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'locdgriddelete',
                 itemId: 'locdgriddelete'
               }
               ]
            }
            ],          


    store: 'LocationsDet2',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Locations Detail',  dataIndex: 'Location_Details', flex: 5},
            {header: 'Locations',  dataIndex: 'Location', flex: 5},
    ];

        this.callParent(arguments);
    }
});