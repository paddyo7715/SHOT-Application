Ext.define('Packt.store.targetareas', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.targetarea',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Target_Area'
        }
    }
});