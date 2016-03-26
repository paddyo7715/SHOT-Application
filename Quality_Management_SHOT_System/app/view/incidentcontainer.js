Ext.define('Packt.view.incidentcontainer', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.incidentcontainer',
//        style: 'border-bottom: 16px !important;',
    width:  730,
//    height: '100%',

//            padding: '0 0 0 0',
//    height: 600,
//    title: 'Container Panel',
    items: [
        {
            xtype: 'incidentdetailform',
//            border: 0,
            height: '50%',
            width: '100%'
        },
        {
            xtype: 'IncidentTabPanel',
//            style: 'border-bottom: 0px;',

           height: 704,
//           height: '50%',
//            height: '30%',
            width: '100%'
        }
    ]
});