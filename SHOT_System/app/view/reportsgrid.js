Ext.define('Packt.view.reportsgrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.reportsgrid',

    title: 'Available Reports',
    height: 200,
    id: 'reportsgrid',
    width: 400,
    border: 0,
    dockedItems: [
    { 
       xtype: 'toolbar',
//               width: 700,
       dock: 'top',
       items: [
       {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 460
       },
       { 
            xtype: 'button',
            text: 'Run Report',
            id: 'rgrunbtn',
            itemId: 'rgrunbtn'
        }
               ]
    }],     
    store: new Ext.data.Store({
       fields: ['num', 'report', 'rptcode'],
       data : [
             {num:"1", report:"Subject by Race", rptcode:"pie_sbr"}
         ]
    }),
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: '#',  dataIndex: 'num', flex: 1},
            {header: 'Report', dataIndex: 'report', flex: 10}
        ];

        this.callParent(arguments);
    }
});