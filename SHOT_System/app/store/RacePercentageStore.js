Ext.define('Packt.store.RacePercentageStore', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.RacePercentageModel',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'RacePercentages'
        }
    }
});