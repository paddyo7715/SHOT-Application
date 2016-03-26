Ext.define('Packt.store.officerassignments', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.officerassignment',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Officer_Assignment'
        }
    }
});