Ext.define('Packt.store.depttypes', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.depttype',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Officer_Dept_Type'
        }
    }
});