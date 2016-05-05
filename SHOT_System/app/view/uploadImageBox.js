Ext.define('Packt.view.uploadImageBox', {
    extend: 'Ext.form.Panel',
    fileUpload: true,
    xtype: 'uploadImageBox',
    //width: 640,
    height: 75,
    bodyPadding: 0,
    border: 0,
    layout:'hbox',
    padding: 5,
    align: 'center',
    frame: true,
    style: 'background-color: #DFE8F6;',
   items: [ 
   {
      xtype: 'filefield',
      name: 'file',
      fieldLabel: 'Image Path',
      labelWidth: 70,
      anchor: '100%',
      buttonText: 'Browse...'
    }, 
    {
      xtype: 'hiddenfield',
      name: 'img_upld_incident_id',
      id: 'img_upld_incident_id'
    }
    
    ],

buttons: [{
      text: 'Upload',
      handler: function () {
        var form = this.up('form').getForm();
        if (form.isValid()) {
          form.submit({
            url: 'app/php/addupdateIncidentImage.php',
            //url: 'php/upload.php',
            waitMsg: 'Uploading your file...',
            success: function (f, a) {
              var result = a.result;
                console.log(result); 
                Ext.getStore('SuspectImageStore').loadData(result['SuspectImages']);
            },
            failure: function (f, a) {
              Ext.Msg.alert('Error', a.result.msg);
            }
          });
        }
      }
    }
    ]
});


