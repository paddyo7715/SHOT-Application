Ext.define('Packt.store.officercalltypes', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.officercalltype',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Officer_Call_Type'
        }
    }
});