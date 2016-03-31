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

Ext.define('proPayments.view.formMaintenance', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formMaintenance',

    requires: [
        'proPayments.view.formMaintenanceViewModel',
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
    height: 650,
    id: 'formMaintenance',
    itemId: 'formMaintenance',
    maxHeight: 800,
    maxWidth: 1350,
    ui: 'green-panel',
    width: 1350,
    layout: 'column',
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
                        Ext.getCmp('formMaintenance').showPayments();
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
                        var winExpenses = Ext.getCmp('winExpenses');

                        if (!winExpenses) {
                            winExpenses = Ext.create('widget.winExpenses');
                            winExpenses.show();
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
                        var msgFunction = function () {
                            Ext.getCmp('formMaintenance').deletePayments();

                        };

                        var msgType = 'question';
                        var msgTitle = 'Delete Payments';
                        var msgContent = 'Do you want to delete the Payments record: ';

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
                    handler: function (button, e) {
                        var winPay = Ext.getCmp('winPay');

                        if (!winPay) {
                            winPay = Ext.create('widget.winPay');
                            winPay.show();
                            trex.hideScrollBars();
                        }
                    },
                    id: 'btnPayments',
                    itemId: 'btnPayments',
                    width: 120,
                    iconCls: 'ion-plus-circled icon16',
                    text: 'Payments',
                    textAlign: 'left'
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
                        var win = window.parent.Ext.getCmp('proPayments');
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
            id: 'gridSerDetail',
            itemId: 'gridSerDetail',
            margin: '5 5 5 0',
            maxHeight: 370,
            maxWidth: 1350,
            ui: 'green-panel',
            width: 1350,
            title: 'Detail Service',
            columnLines: false,
            forceFit: false,
            store: 'storeSerDetail',
            viewConfig: {
                height: 400,
                width: 300
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    id: 'num_service',
                    itemId: 'num_service',
                    maxWidth: 80,
                    dataIndex: 'num_service',
                    text: 'Service'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'service_date',
                    itemId: 'service_date',
                    dataIndex: 'service_date',
                    text: 'Savice </br> Date'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'period',
                    itemId: 'period',
                    maxWidth: 80,
                    width: 80,
                    dataIndex: 'period',
                    text: 'Period'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'customer_id',
                    itemId: 'customer_id',
                    dataIndex: 'customer_id',
                    text: 'Customer'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'branch_office',
                    itemId: 'branch_office',
                    dataIndex: 'branch_office',
                    text: 'Branch </br> Office'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'authorizer',
                    itemId: 'authorizer',
                    dataIndex: 'authorizer',
                    text: 'Authorizer'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'sector',
                    itemId: 'sector',
                    dataIndex: 'sector',
                    text: 'Sector'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'zone_end',
                    itemId: 'zone_end',
                    dataIndex: 'zone_end',
                    text: 'Zone'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'appointment',
                    itemId: 'appointment',
                    dataIndex: 'appointment',
                    text: 'Appointment'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'appointment_date2',
                    itemId: 'appointment_date_2',
                    dataIndex: 'appointment_date',
                    text: 'Appointment </br> Date'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'range',
                    itemId: 'range',
                    dataIndex: 'range',
                    text: 'Range'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'time',
                    itemId: 'time',
                    dataIndex: 'time',
                    text: 'Time'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'time_wait',
                    itemId: 'time_wait',
                    dataIndex: 'time_wait',
                    text: 'Time </br> Wait'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'add_costs',
                    itemId: 'add_costs',
                    dataIndex: 'add_cost',
                    text: 'Add </br> Costs'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'taxt',
                    itemId: 'taxt',
                    dataIndex: 'taxt',
                    text: 'Taxt'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'cost',
                    itemId: 'cost',
                    dataIndex: 'cost',
                    text: 'Cost'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'status2',
                    itemId: 'status2',
                    dataIndex: 'total',
                    text: 'Status'
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    id: 'pagingToolbar2',
                    itemId: 'pagingToolbar2',
                    width: 260,
                    displayInfo: true
                }
            ],
            listeners: {
                itemdblclick: 'onGridSerDetailItemDblClick',
                itemclick: 'onGridSerDetailItemClick'
            }
        },
        {
            xtype: 'gridpanel',
            id: 'gridExpenses',
            itemId: 'gridExpenses',
            margin: '5 5 5 0',
            maxHeight: 200,
            maxWidth: 1200,
            ui: 'green-panel',
            width: 1350,
            title: 'Expenses',
            columnLines: false,
            forceFit: false,
            store: 'storeExpenses',
            viewConfig: {
                height: 400,
                width: 300
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    id: 'num_service2',
                    itemId: 'num_service2',
                    maxWidth: 80,
                    dataIndex: 'num_service',
                    text: 'Service'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'spend_desc',
                    itemId: 'spend_desc',
                    maxWidth: 250,
                    width: 250,
                    dataIndex: 'spend_desc',
                    text: 'Expense </br> Description'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'spend_date',
                    itemId: 'spend_date',
                    dataIndex: 'spend_date',
                    text: 'Expense </br> Date'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'invoice_ticket',
                    itemId: 'invoice_ticket',
                    dataIndex: 'invoice_ticket',
                    text: 'Invoice </br> Ticket'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'amount',
                    itemId: 'amount',
                    dataIndex: 'amount',
                    text: 'Amount'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'tax',
                    itemId: 'tax',
                    dataIndex: 'tax',
                    text: 'Tax'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'total',
                    itemId: 'total',
                    dataIndex: 'total',
                    text: 'Total'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'approved',
                    itemId: 'approved',
                    dataIndex: 'approved',
                    text: 'Approved'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'note',
                    itemId: 'note',
                    maxWidth: 250,
                    width: 250,
                    dataIndex: 'note',
                    text: 'Note'
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    id: 'pagingToolbar3',
                    itemId: 'pagingToolbar2',
                    width: 260,
                    displayInfo: true
                }
            ],
            listeners: {
                itemdblclick: 'onGridExpensesItemDblClick',
                itemclick: 'onGridExpensesItemClick'
            }
        }
    ],

    onGridSerDetailItemDblClick: function (dataview, record, item, index, e, eOpts) {
        Ext.getCmp('formMaintenance').showSerDetail();
    },

    onGridSerDetailItemClick: function (dataview, record, item, index, e, eOpts) {
        Ext.getCmp('formMaintenance').PaymentsID = record.data.id;
        Ext.getCmp('formMaintenance').PaymentsRecord = record.data;
    },

    onGridExpensesItemDblClick: function (dataview, record, item, index, e, eOpts) {
        Ext.getCmp('formMaintenance').showSerDetail();
    },

    onGridExpensesItemClick: function (dataview, record, item, index, e, eOpts) {
        Ext.getCmp('formMaintenance').PaymentsID = record.data.id;
        Ext.getCmp('formMaintenance').PaymentsRecord = record.data;
    },

    showPayments: function (pMode) {
        var apiController = 'apiPaymentes';
        var apiMethod = 'showSerDetail';
        var objJsonData = new Object();
        objJsonData.PaymentsID = Ext.getCmp('formMaintenance').PaymentsID;

        var objJsonRequest = new Object();
        objJsonRequest.apiController = apiController;
        objJsonRequest.apiMethod = apiMethod;
        objJsonRequest.apiData = JSON.stringify(objJsonData);

        var functionSuccess = function () {
            var jsonData = trex.getInfoDataBridge(apiController);


            var winExpenses = Ext.getCmp('winExpenses');

            if (!winExpenses) {
                winExpenses = Ext.create('widget.winExpenses');
                winExpenses.show();
                trex.hideScrollBars();
            }

            trex.showRecord(jsonData, 'expenses');

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

    deletePayments: function () {
        alert('registro borrado');

        var formRecord = 'formPayments';
        var apiController = 'apiPayments';
        var apiMethod = 'deletePayments';

        var objJsonData = new Object();
        objJsonData.PaymentsId = Ext.getCmp('formMaintenance').PaymentsRecord.id;

        var objJsonRequest = new Object();
        objJsonRequest.apiController = apiController;
        objJsonRequest.apiMethod = apiMethod;
        objJsonRequest.apiData = JSON.stringify(objJsonData);

        var functionSuccess = function () {
            var jsonData = trex.getInfoDataBridge(apiController);

            console.log(jsonData);
            trex.showInfo(jsonData, 'info');

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