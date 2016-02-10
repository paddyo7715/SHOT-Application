Ext.define('Packt.view.appheader', { 
    extend: 'Ext.panel.Panel', 
    alias: 'widget.appheader', 
    height: 70,
//    border : false,
    xtype:'panel',
    ui: 'footer',
    style: 'border-bottom: 4px solid #4c72a4;',

    width:'100%',
    layout: {type: 'anchor'},  
    items:[
    {
		  xtype : 'image',
		  id : 'logoImage',
		  name : 'logoImage',
                  border: 0,
                  border : false,
                  height:'80%',
		  src : 'app/resources/images/logo.png'
     },
     {
		  xtype : 'image',
		  id : 'titleImage',
		  name : 'titleImage',
                  border: 0,
                  border : false,
		  width:'75%',
		  src : 'app/resources/images/p2.png'
     },
     {
                  xtype: 'button',
                  border : 1,
                  cls: 'logoutbutton',
                  text: 'Logout',
                  itemId: 'applogout',
                  id :  'applogout'
     }
     ]			        
});
