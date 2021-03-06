Ext.define('Packt.view.sourcesgrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.sourcesgrid',

    height: 200,
    id: 'sourcesgrid',
    scroll: 'vertical',
    width: 650,
    border: 0,
            dockedItems: [
             { 
               xtype: 'toolbar',
//               flex: 1,
               width: 650,
               dock: 'top',
               items: [
               {
                 xtype: 'displayfield',
                 fieldLabel: 'Sources',
                 width: 460
               },
               { 
                 xtype: 'button',
                 text: 'Add',
                 hidden: true,
                 id: 'sgaddbtn',
                 itemId: 'sgaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 hidden: true,
                 id: 'sgeditbtn',
                 itemId: 'sgeditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Delete',
                 hidden: true,
                 id: 'sgdelete',
                 itemId: 'sgdelete'
               },
               { 
                 xtype: 'button',
                 text: 'View',
                 hidden: true,
                 id: 'sgview',
                 itemId: 'sgview'
               }
               ]
            }
            ],          


    store: 'sources',
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Title',  dataIndex: 'Title', flex: 5},
            {header: 'Author', dataIndex: 'Author', flex: 4},
            {header: 'Date', dataIndex: 'Source_Date', flex: 3},
            {header: 'Link', dataIndex: 'Link', flex: 8},
            {header: 'Newspaper', dataIndex: 'Newspaper', flex: 5}
    ];

        this.callParent(arguments);
    }
});