/*
 * File: app/view/winAccess.js
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

Ext.define('access.view.winAccess', {
    extend: 'Ext.window.Window',
    alias: 'widget.winAccess',

    requires: [
        'access.view.winAccessViewModel',
        'Ext.form.Panel',
        'Ext.Img',
        'Ext.form.FieldSet',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.toolbar.Toolbar'
    ],

    viewModel: {
        type: 'winaccess'
    },
    autoShow: true,
    id: 'winAccess',
    itemId: 'winAccess',
    layout: 'column',
    closable: false,
    frameHeader: false,
    header: false,
    maximized: true,
    defaultListenerScope: true,

    items: [
        {
            xtype: 'form',
            columnWidth: 1,
            height: 150,
            id: 'formEnvironment',
            itemId: 'formEnvironment',
            bodyCls: 'imagenAmbiente',
            bodyPadding: 10
        },
        {
            xtype: 'form',
            columnWidth: 1,
            height: 100,
            id: 'formSpace',
            itemId: 'formSpace',
            bodyPadding: 10
        },
        {
            xtype: 'form',
            columnWidth: 1,
            height: 350,
            id: 'formAccess',
            itemId: 'formAccess',
            layout: 'table',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'image',
                    colspan: 3,
                    rowspan: 1,
                    id: 'imgLogo',
                    itemId: 'imgLogo',
                    padding: '0 70 0 300',
                    src: '../../framework/terian/image/logo_itinera.png'
                },
                {
                    xtype: 'fieldset',
                    colspan: 1,
                    rowspan: 2,
                    border: 0,
                    height: 200,
                    id: 'fieldsetDataAccess',
                    itemId: 'fieldsetDataAccess',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            id: 'tfEmail',
                            itemId: 'tfEmail',
                            minWidth: 340,
                            padding: '77 0 0 0',
                            fieldLabel: 'Mail',
                            labelWidth: 120
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            id: 'tfPassword',
                            itemId: 'tfPassword',
                            fieldLabel: 'Password',
                            labelWidth: 120,
                            inputType: 'password'
                        }
                    ]
                },
                {
                    xtype: 'button',
                    handler: function (button, e) {
                        if (trex.readElement('tfEmail') === '' || trex.readElement('tfPassword') === '') {
                            /*
                             trex.message('warning',
                             '3');
                             */

                        }
                        appLocal.validateAccess();
                    },
                    animateShadow: true,
                    cls: 'botonGrupoActivo',
                    height: 55,
                    id: 'btnAccess',
                    itemId: 'btnAccess',
                    width: 100,
                    iconCls: 'fa fa-unlock-alt fa-lg',
                    text: 'Access',
                    tooltip: '\'inclde\'',
                    tooltipType: 'title'
                }
            ]
        }
    ],
    listeners: {
        resize: 'onWinAccessResize'
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            cls: 'colorForm',
            items: [
                {
                    xtype: 'button',
                    height: 80,
                    width: 100,
                    iconAlign: 'top',
                    iconCls: 'ion-document-text large-green'
                }
            ]
        }
    ],

    onWinAccessResize: function (window, width, height, eOpts) {
        var formAccess = Ext.getCmp('formAccess');
        formAccess.doLayout();

        var heightForm = Ext.getCmp('winAccess').height - 290;
        Ext.getCmp('formAccess').setHeight(heightForm);

        var widthForm = Ext.getCmp('winAccess').width;
        Ext.getCmp('formEnvironment').setWidth(widthForm);
        Ext.getCmp('formSpace').setWidth(widthForm);
        Ext.getCmp('formAccess').setWidth(widthForm);
    }

});