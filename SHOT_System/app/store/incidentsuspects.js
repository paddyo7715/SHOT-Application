Ext.define('Packt.store.incidentsuspects', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.incidentsuspect',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Incident_Suspect'
        }
    }
});