Ext.define('Packt.view.SubjectGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.SubjectGrid',

    height: 400,
    id: 'SubjectGrid',
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
                 id: 'subjectgridaddbtn',
                 itemId: 'subjectgridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'subjectgrideditbtn',
                 itemId: 'subjectgrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'subjectgriddelete',
                 itemId: 'subjectgriddelete'
               }
               ]
            }
            ],          


    store: 'suspect_search',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Name',  dataIndex: 'Suspect_Name', flex: 5},
            {header: 'Gender',  dataIndex: 'Gender', flex: 2},
            {header: 'Race',  dataIndex: 'Race', flex: 3},
    ];

        this.callParent(arguments);
    }
});