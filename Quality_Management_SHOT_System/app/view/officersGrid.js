Ext.define('Packt.view.officersGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.officersGrid',

    height: 400,
    id: 'officersGrid',
    scroll: 'vertical',
    width: 600,
    border: 0,
            dockedItems: [
             { 
               xtype: 'toolbar',
//               flex: 1,
               width: 600,
               dock: 'top',
               items: [
               {
                 xtype: 'displayfield',
                 fieldLabel: '',
                 width: 440
               },
               { 
                 xtype: 'button',
                 text: 'Add',
                 id: 'officergridaddbtn',
                 itemId: 'officergridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'officergrideditbtn',
                 itemId: 'officergrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'officergriddelete',
                 itemId: 'officergriddelete'
               }
               ]
            }
            ],          


    store: 'officer_search',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Name',  dataIndex: 'Name', flex: 5},
            {header: 'Gender',  dataIndex: 'Gender', flex: 2},
            {header: 'Race',  dataIndex: 'Race', flex: 3},
            {header: 'Additional Info',  dataIndex: 'Additional_Info', flex: 10},
    ];

        this.callParent(arguments);
    }
});