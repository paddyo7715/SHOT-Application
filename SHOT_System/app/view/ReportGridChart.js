Ext.define('Packt.view.ReportGridChart', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ReportGridChart',

//    title: 'Existing Incidents',
    height: 400,
    id: 'ReportGridChart',
    width: 300,
//    forceFit: true,
   hideHeaders: true,
   border: 0,
    store: 'chart_reports',
    disableSelection: true,
    frame: true,

    initComponent: function() {
        this.columns = [{
//            header: 'Name',
            dataIndex: 'f1',
            flex: 8
         }, {
//            header: 'State',
            dataIndex: 'f2',
            flex: 2
        }];

        this.callParent(arguments);
    }
});