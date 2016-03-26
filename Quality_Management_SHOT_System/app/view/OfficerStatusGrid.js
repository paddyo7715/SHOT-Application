Ext.define('Packt.view.OfficerStatusGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.OfficerStatusGrid',

    height: 200,
    id: 'OfficerStatusGrid',
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
                 id: 'offstatusgridaddbtn',
                 itemId: 'offstatusgridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'offstatusgrideditbtn',
                 itemId: 'offstatusgrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'offstatusgriddelete',
                 itemId: 'offstatusgriddelete'
               }
               ]
            }
            ],          


    store: 'officerstatuss',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Officer Status',  dataIndex: 'Status', flex: 5},
    ];

        this.callParent(arguments);
    }
});