Ext.define('Packt.store.RacePercentageStore2', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.RacePercentageModel2',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'RacePercentages2'
        }
    }
});