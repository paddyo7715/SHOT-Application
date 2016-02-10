Ext.define('Packt.store.sources', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.source',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Incident_Source'
        }
    }
});