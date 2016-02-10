Ext.define('Packt.store.MentalStates', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.MentalState',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Mental_States'
        }
    }
});