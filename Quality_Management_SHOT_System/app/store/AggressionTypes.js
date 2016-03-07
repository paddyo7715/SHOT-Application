Ext.define('Packt.store.AggressionTypes', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.AggressionType',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Aggression_Type'
        }
    }
});