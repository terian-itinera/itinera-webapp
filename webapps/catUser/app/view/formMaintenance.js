/*
 * File: app/view/formMaintenance.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('catUser.view.formMaintenance', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formMaintenance',

    requires: [
        'catUser.view.formMaintenanceViewModel',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.Column',
        'Ext.toolbar.Paging'
    ],

    viewModel: {
        type: 'formmaintenance'
    },
    id: 'formMaintenance',
    itemId: 'formMaintenance',
    ui: 'green-panel',
    layout: 'fit',
    bodyPadding: 10,
    manageHeight: false,
    defaultListenerScope: true,

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            id: 'toolbarMaintenance',
            itemId: 'toolbarMaintenance',
            items: [
                {
                    xtype: 'button',
                    handler: function (button, e) {
                        Ext.getCmp('formMaintenance').showUser();
                    },
                    id: 'btnView',
                    itemId: 'btnView',
                    width: 120,
                    iconCls: 'ion-eye icon16',
                    text: 'View',
                    textAlign: 'left'
                },
                {
                    xtype: 'button',
                    handler: function (button, e) {
                        var winUsers = Ext.getCmp('winUsers');

                        if (!winUsers) {
                            winUsers = Ext.create('widget.winUsers');
                            winUsers.show();
                            trex.hideScrollBars();
                        }
                    },
                    id: 'btnCreate',
                    itemId: 'btnCreate',
                    width: 120,
                    iconCls: 'ion-plus-circled icon16',
                    text: 'Create',
                    textAlign: 'left'
                },
                {
                    xtype: 'button',
                    handler: function (button, e) {
                        Ext.getCmp('formMaintenance').showUser('edit');
                    },
                    id: 'btnUpdate',
                    itemId: 'btnUpdate',
                    width: 120,
                    iconCls: 'ion-edit icon16',
                    text: 'Update',
                    textAlign: 'left'
                },
                {
                    xtype: 'button',
                    handler: function (button, e) {
                        var msgFunction = function () {
                            Ext.getCmp('formMaintenance').deleteUsers();

                        };

                        var msgType = 'question';
                        var msgTitle = 'Delete Users';
                        var msgContent = 'Do you want to delete the User record: ';

                        trex.message(msgType,
                            msgTitle,
                            msgContent,
                            msgFunction);

                        return;
                    },
                    id: 'btnDelete',
                    itemId: 'btnDelete',
                    width: 120,
                    iconCls: 'ion-trash-a icon16',
                    text: 'Delete',
                    textAlign: 'left'
                },
                {
                    xtype: 'tbseparator',
                    width: 30
                },
                {
                    xtype: 'button',
                    id: 'btnFind',
                    itemId: 'btnFind',
                    width: 120,
                    iconCls: 'ion-ios-search-strong icon16',
                    text: 'Find',
                    textAlign: 'left'
                },
                {
                    xtype: 'button',
                    id: 'btnFilter',
                    itemId: 'btnFilter',
                    width: 120,
                    iconCls: 'ion-funnel icon16',
                    text: 'Filter',
                    textAlign: 'left'
                },
                {
                    xtype: 'tbseparator',
                    width: 30
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    id: 'btnInformation',
                    itemId: 'btnInformation',
                    width: 120,
                    iconCls: 'ion-information-circled icon16',
                    text: 'Information',
                    textAlign: 'left'
                },
                {
                    xtype: 'button',
                    handler: function (button, e) {
                        var win = window.parent.Ext.getCmp('catUser');
                        if (win)win[win.closeAction]();
                    },
                    id: 'btnExit',
                    itemId: 'btnExit',
                    width: 120,
                    iconCls: 'ion-android-exit icon16',
                    text: 'Exit',
                    textAlign: 'left'
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'gridpanel',
            id: 'gridUsers',
            itemId: 'gridUsers',
            ui: 'green-panel',
            title: 'Users',
            forceFit: true,
            store: 'storeUsers',
            columns: [
                {
                    xtype: 'gridcolumn',
                    id: 'name',
                    itemId: 'name',
                    minWidth: 120,
                    dataIndex: 'name',
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'last_name',
                    itemId: 'last_name',
                    minWidth: 120,
                    dataIndex: 'last_name',
                    text: 'Last Name'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'email',
                    itemId: 'email',
                    minWidth: 80,
                    dataIndex: 'email',
                    text: 'Email'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'address',
                    itemId: 'address',
                    minWidth: 200,
                    dataIndex: 'address',
                    text: 'Address'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'home_phone',
                    itemId: 'home_phone',
                    dataIndex: 'telephone_desk',
                    text: 'Home Phone'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'cell_phone',
                    itemId: 'cell_phone',
                    dataIndex: 'telephone_mobile',
                    text: 'Cell Phone'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'created_date',
                    itemId: 'created_date',
                    dataIndex: 'created_at',
                    text: 'Fecha </br> Registro'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'cat_id',
                    itemId: 'cat_id',
                    dataIndex: 'profile_id',
                    text: 'User Type'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'isactive',
                    itemId: 'isactive',
                    maxWidth: 50,
                    minWidth: 30,
                    dataIndex: 'active',
                    text: 'Active'
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    id: 'pagingToolbar',
                    itemId: 'pagingToolbar',
                    width: 360,
                    displayInfo: true,
                    store: 'storeUsers'
                }
            ],
            listeners: {
                itemdblclick: 'onGridUsersItemDblClick',
                itemclick: 'onGridUsersItemClick'
            }
        }
    ],

    onGridUsersItemDblClick: function (dataview, record, item, index, e, eOpts) {
        Ext.getCmp('formMaintenance').showUser();
    },

    onGridUsersItemClick: function (dataview, record, item, index, e, eOpts) {
        Ext.getCmp('formMaintenance').UsersID = record.data.id;
        Ext.getCmp('formMaintenance').UsersRecord = record.data;
    },

    showUser: function (pMode) {
        var apiController = 'apiUser';
        var apiMethod = 'showUser';
        var objJsonData = new Object();
        objJsonData.UserID = Ext.getCmp('formMaintenance').UsersID;

        var objJsonRequest = new Object();
        objJsonRequest.apiController = apiController;
        objJsonRequest.apiMethod = apiMethod;
        objJsonRequest.apiData = JSON.stringify(objJsonData);

        var functionSuccess = function () {
            var jsonData = trex.getInfoDataBridge(apiController);


            var winUsers = Ext.getCmp('winUsers');

            if (!winUsers) {
                winUsers = Ext.create('widget.winUsers');
                winUsers.show();
                trex.hideScrollBars();
            }

            console.log('jsonData');
            console.log(jsonData);

            trex.showRecord(jsonData, 'Users', pMode);

        };

        var functionFailure = function () {
            var jsonData = trex.getInfoDataBridge(apiController);
        };

        trex.doDataBridge(objJsonRequest,
            functionSuccess,
            null,
            functionFailure,
            null);


    },

    deleteUsers: function () {
        var formRecord = 'formUsers';
        var apiController = 'apiUser';
        var apiMethod = 'deleteUser';

        var objJsonData = new Object();
        objJsonData.UserId = Ext.getCmp('formMaintenance').UsersRecord.id;

        var objJsonRequest = new Object();
        objJsonRequest.apiController = apiController;
        objJsonRequest.apiMethod = apiMethod;
        objJsonRequest.apiData = JSON.stringify(objJsonData);

        var functionSuccess = function () {
            var jsonData = trex.getInfoDataBridge(apiController);

            console.log(jsonData);
            trex.showInfo(jsonData, 'info');

            Ext.getStore('storeUsers').loadData([], false);
            Ext.getStore('storeUsers').load();

        };

        var functionFailure = function () {
            var jsonData = trex.getInfoDataBridge(apiController);
            trex.showInfo(jsonData, 'error', 'tfCompany');
        };

        trex.doDataBridge(objJsonRequest,
            functionSuccess,
            null,
            functionFailure,
            null);
    }

});