Ext.define('Packt.store.Incidentslist', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.Incidentlist',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Incident'
        }
    }
});