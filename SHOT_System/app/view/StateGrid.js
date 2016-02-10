Ext.define('Packt.view.StateGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.StateGrid',

    height: 400,
    id: 'StateGrid',
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
                 id: 'stategridaddbtn',
                 itemId: 'stategridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'stategrideditbtn',
                 itemId: 'stategrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'stategriddelete',
                 itemId: 'stategriddelete'
               }
               ]
            }
            ],          


    store: 'States',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'State',  dataIndex: 'State', flex: 5},
            {header: 'Region',  dataIndex: 'Region', flex: 3},
    ];

        this.callParent(arguments);
    }
});