Ext.define('Packt.view.Summarycontainer', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Summarycontainer',
    width:  700,
//    width: '90%',
    border: 0,
    padding:'80 0 0 0',
    layout: 'hbox',
    items: [
        {
            xtype: 'TotalShootings',
            height: 82,
            margin:'5 5 5 5',
            width: 150
        },
        {
            xtype: 'ShootingsThisYear',
            height: 82,
            margin:'5 5 5 5',
            width: 150
        },
        {
            xtype: 'InjuryDeathRatio',
            height: 82,
            margin:'5 5 5 5',
            width: 120
        },        
        {
            xtype: 'SuspectGender',
            height: 108,
            margin:'5 5 5 5',
            width: 150
        }
    ]
});