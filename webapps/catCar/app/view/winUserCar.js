/*
 * File: app/view/winUserCar.js
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

Ext.define('catCar.view.winUserCar', {
    extend: 'Ext.window.Window',
    alias: 'widget.winUserCar',

    requires: [
        'catCar.view.winSectorViewModel1',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Checkbox',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill'
    ],

    viewModel: {
        type: 'winusercar'
    },
    height: 500,
    id: 'winUserCar',
    itemId: 'winUserCar',
    maxHeight: 210,
    minHeight: 500,
    minWidth: 850,
    ui: 'green-window',
    width: 850,
    layout: 'column',
    closable: false,
    title: 'User Car',
    modal: true,

    items: [
        {
            xtype: 'form',
            confirmRecord: function () {
                if (Ext.getCmp('formSector').isValid()) {
                    var formRecord = 'formSector';
                    var apiController = 'apiSector';
                    var apiMethod = 'createSector';

                    var objJsonRequest = new Object();
                    objJsonRequest.apiController = apiController;
                    objJsonRequest.apiMethod = apiMethod;
                    objJsonRequest.apiData = trex.prepareFormFields(formRecord);

                    var functionSuccess = function () {
                        var jsonData = trex.getInfoDataBridge(apiController);

                        trex.showInfo(jsonData, 'information');

                        var winSector = Ext.getCmp('winSector');
                        winSector.close();

                        Ext.getStore('storeSector').load();

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
                else {

                    trex.message('error',
                        'Incomplete Form',
                        'You must fill the required fields');
                }
            },
            columnWidth: 1,
            height: 139,
            id: 'formUserCar',
            itemId: 'formUserCar',
            width: 838,
            layout: 'column',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'fieldset',
                    columnWidth: 1,
                    height: 117,
                    id: 'fieldsetUserCarInformation',
                    itemId: 'fieldsetUserCarInformation',
                    width: 816,
                    layout: 'column',
                    title: '<b>General information</b>',
                    items: [
                        {
                            xtype: 'combobox',
                            columnWidth: 0.7,
                            disabledCls: 'disabledField',
                            id: 'cbUserName',
                            itemId: 'cbUserName',
                            margin: '0 5 5 5',
                            width: 387,
                            fieldLabel: 'User Name',
                            labelClsExtra: 'requiredField',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            columnWidth: 0.3,
                            disabledCls: 'disabledField',
                            id: 'tfUserID',
                            itemId: 'tfUserID',
                            margin: '0 5 5 5',
                            fieldLabel: 'User ID',
                            labelClsExtra: 'requiredField',
                            labelWidth: 60,
                            allowBlank: false
                        },
                        {
                            xtype: 'checkboxfield',
                            columnWidth: 0.17,
                            disabledCls: 'disabledField',
                            id: 'chPrincipal',
                            itemId: 'chPrincipal',
                            margin: '0 5 5 5',
                            labelClsExtra: 'requiredField',
                            boxLabel: 'Principal'
                        },
                        {
                            xtype: 'checkboxfield',
                            columnWidth: 0.17,
                            disabledCls: 'disabledField',
                            id: 'chActive2',
                            itemId: 'chActive2',
                            margin: '0 5 5 5',
                            labelClsExtra: 'requiredField',
                            boxLabel: 'Active'
                        }
                    ]
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            id: 'toolbarSector1',
            itemId: 'toolbarSector',
            items: [
                {
                    xtype: 'button',
                    handler: function (button, e) {
                        Ext.getCmp('formSector').confirmRecord();
                    },
                    id: 'btnConfirmSector1',
                    itemId: 'btnConfirmSector',
                    width: 120,
                    iconCls: 'ion-checkmark-circled icon16',
                    text: 'Confirm',
                    textAlign: 'left'
                },
                {
                    xtype: 'tbfill',
                    id: 'filSector1',
                    itemId: 'filSector'
                },
                {
                    xtype: 'button',
                    handler: function (button, e) {
                        var winSector = Ext.getCmp('winSector');
                        winSector.close();
                    },
                    id: 'btnCloseSector1',
                    itemId: 'btnCloseSector',
                    width: 120,
                    iconCls: 'ion-close-circled icon16',
                    text: 'Close',
                    textAlign: 'left'
                }
            ]
        }
    ]

});