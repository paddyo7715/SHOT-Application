Ext.define('Packt.store.departments', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.Officer_Department',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Officer_Department'
        }
    }
});