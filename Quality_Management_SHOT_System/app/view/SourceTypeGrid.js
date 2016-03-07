Ext.define('Packt.view.SourceTypeGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.SourceTypeGrid',

    height: 200,
    id: 'SourceTypeGrid',
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
                 id: 'sourcetypegridaddbtn',
                 itemId: 'sourcetypegridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'sourcetypegrideditbtn',
                 itemId: 'sourcetypegrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'sourcetypegriddelete',
                 itemId: 'sourcetypegriddelete'
               }
               ]
            }
            ],          


    store: 'sourcetypes',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Source Type',  dataIndex: 'Source', flex: 5},
    ];

        this.callParent(arguments);
    }
});