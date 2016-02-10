Ext.define('Packt.store.incidentofficers', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.incidentofficer',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Incident_Officer'
        }
    }
});