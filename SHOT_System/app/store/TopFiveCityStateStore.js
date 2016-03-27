Ext.define('Packt.store.TopFiveCityStateStore', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.topFiveCitiesStatesModel',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'TopCityState'
        }
    }
});