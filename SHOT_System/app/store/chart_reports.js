Ext.define('Packt.store.chart_reports', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.chart_report',
    fields: ['f1', 'f2'],
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'chart_report'
        }
    }
});