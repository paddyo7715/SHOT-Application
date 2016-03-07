Ext.define('Packt.view.MentalStateGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.MentalStateGrid',

    height: 200,
    id: 'MentalStateGrid',
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
                 id: 'menstgridaddbtn',
                 itemId: 'menstgridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'menstgrideditbtn',
                 itemId: 'menstgrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'menstgriddelete',
                 itemId: 'menstgriddelete'
               }
               ]
            }
            ],          


    store: 'MentalStates',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Mental States',  dataIndex: 'Mental_Status', flex: 5},
    ];

        this.callParent(arguments);
    }
});