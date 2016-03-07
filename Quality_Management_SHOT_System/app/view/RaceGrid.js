Ext.define('Packt.view.RaceGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.RaceGrid',

    height: 200,
    id: 'RaceGrid',
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
                 id: 'racegridaddbtn',
                 itemId: 'racegridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'racegrideditbtn',
                 itemId: 'racegrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'racegriddelete',
                 itemId: 'racegriddelete'
               }
               ]
            }
            ],          


    store: 'Races',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Race',  dataIndex: 'Race', flex: 5},
    ];

        this.callParent(arguments);
    }
});