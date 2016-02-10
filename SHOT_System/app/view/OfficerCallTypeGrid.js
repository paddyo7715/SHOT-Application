Ext.define('Packt.view.OfficerCallTypeGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.OfficerCallTypeGrid',

    height: 200,
    id: 'OfficerCallTypeGrid',
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
                 id: 'offcalltgridaddbtn',
                 itemId: 'offcalltgridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'offcalltgrideditbtn',
                 itemId: 'offcalltgrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'offcalltgriddelete',
                 itemId: 'offcalltgriddelete'
               }
               ]
            }
            ],          


    store: 'officercalltypes',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Officer Call Type',  dataIndex: 'Call_Type', flex: 5},
    ];

        this.callParent(arguments);
    }
});