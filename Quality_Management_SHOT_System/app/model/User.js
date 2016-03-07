Ext.define('Packt.model.User', {
    extend: 'Ext.data.Model',
    fields: ['Status','User_Number', 'User_ID', 'Name', 'Organization', 'Email', 'Phone', 'Access_NewIncident', 'Access_QueryView', 'Access_QueryUpdate' , 'Access_DatabaseMaint' , 'Access_Reports' , 'Access_UserManagement', 'Display_Access']
});