Ext.define('Packt.store.officerstatuss', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.officerstatus',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Officer_Status'
        }
    }
});