Ext.define('Packt.view.Summarycontainer2', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Summarycontainer2',
    width:  800,
//    width: '90%',
    border: 0,
    padding:'30 0 0 0',
    layout: 'hbox',
    items: [
        {
            xtype: 'TopFiveCityStateGrid',
            height: 168,
            margin:'3 3 3 3',
            width: 230
        },
        {
            xtype: 'RacePercentage',
            height: 190,
            margin:'3 3 3 3',
            width: 150
        },
        {
            xtype: 'RacePercentage2',
            height: 190,
            margin:'3 3 3 3',
            width: 150
        },
        {
            xtype: 'topFiveDepartments',
            height: 170,
            margin:'3 3 3 3',
            width: 250
        }
    ]
});