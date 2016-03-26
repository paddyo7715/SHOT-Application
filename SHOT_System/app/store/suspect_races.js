Ext.define('Packt.store.suspect_races', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.suspect_race',
    fields: ['race', 'incidents'],
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'suspect_race'
        }
    }
});