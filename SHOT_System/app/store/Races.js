Ext.define('Packt.store.Races', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.Race',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Race'
        }
    }
});