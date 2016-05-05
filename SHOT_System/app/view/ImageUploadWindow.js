Ext.define('Packt.view.ImageUploadWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ImageUploadWindow',
    //height: 450,
    width: 650,
    id: 'ImageUploadWindow',
    modal: true,
    resizable: true,
    style: 'background-color: #DFE8F6;',
    closeAction: 'destroy',
    title: 'Suspect Image',
    requires: [
        'Packt.view.uploadImageBox',
        'Packt.view.suspectImageDataView'
    ],
    items: [
      {  
        xtype: 'uploadImageBox',
        layout: 'hbox'
      },
             {
            xtype: 'suspectImageDataView',
            layout: 'hbox'
          },
                
            {
      xtype: 'hiddenfield',
      name: 'img_upld_incident_id2',
      id: 'img_upld_incident_id2'
    }/*,
        {
          xtype: 'button',
          text: 'Clear All Images for this Incident',
          //itemId: 'imageUpload_button',
          //id: 'imageUpload_button',
          //action: 'imageUpload_button',
          style: 'margin-left:25px',
          //cls: 'imageUpload_button',
          //disabled: true,
          listeners: {
            click: function(button) {

                Ext.MessageBox.confirm('Please Confirm',
                'Are you sure you would like to delete all images for this incident?',
                function(choice) {
                    if (choice == 'yes') {
                        
                      Ext.Ajax.request({
                        url: 'app/php/deleteIncidentImage.php',
                        success: function(response){
                        var text = response;
                            Ext.Msg.alert('Success', 'Images Cleared for this Incident');
                        // process server response here
                        }
                        });

                    }
                });
                
            }
          }
        }*/
    ],
    
    //use this button
    /*
    buttons: [{
        text: 'Delete All Images for this Incident',
                  listeners: {
            click: function(button) {

                Ext.MessageBox.confirm('Please Confirm',
                'Are you sure you would like to delete all images for this incident?',
                function(choice) {
                    if (choice == 'yes') {
                        
                      Ext.Ajax.request({
                        url: 'app/php/deleteIncidentImage.php',
                        success: function(response){
                        var text = response;
                            Ext.Msg.alert('Success', 'Images Cleared for this Incident');
                        // process server response here
                        }
                        });

                    }
                });
                
            }
          }
    }]*/
    //html: '<div id="imageUpload_window" style="height: 100%; margin: 0; padding: 0;"><button id="uploadImage">Upload Image</button></div>'
});


/*

Ext.create('Ext.form.Panel', {
    title: 'Upload a Photo',
    width: 400,
    bodyPadding: 10,
    frame: true,
    renderTo: Ext.getBody(),
    items: [{
        xtype: 'filefield',
        name: 'photo',
        fieldLabel: 'Photo',
        labelWidth: 50,
        msgTarget: 'side',
        allowBlank: false,
        anchor: '100%',
        buttonText: 'Select Photo...'
    }],

    buttons: [{
        text: 'Upload',
        handler: function() {
            var form = this.up('form').getForm();
            if(form.isValid()){
                form.submit({
                    url: 'photo-upload.php',
                    waitMsg: 'Uploading your photo...',
                    success: function(fp, o) {
                       Ext.getStore('SuspectImageStore').loadData(result['SuspectImages']);
//                       Ext.getCmp('image_susdv').refresh();
                    }
                });
            }
        }
    }]
});

*/