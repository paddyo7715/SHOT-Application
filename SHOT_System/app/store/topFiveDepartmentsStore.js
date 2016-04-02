Ext.define('Packt.store.topFiveDepartmentsStore', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.topFiveDepartmentsModel',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'TopFiveDepartments'
        }
    }
});