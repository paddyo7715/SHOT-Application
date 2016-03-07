Ext.define('Packt.view.OfficerDeptTypeGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.OfficerDeptTypeGrid',

    height: 200,
    id: 'OfficerDeptTypeGrid',
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
                 id: 'offDeptTypegridaddbtn',
                 itemId: 'offDeptTypegridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'offDeptTypegrideditbtn',
                 itemId: 'offDeptTypegrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'offDeptTypegriddelete',
                 itemId: 'offDeptTypegriddelete'
               }
               ]
            }
            ],          


    store: 'depttypes',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Officer Dept Type',  dataIndex: 'Dept_Type', flex: 5},
    ];

        this.callParent(arguments);
    }
});