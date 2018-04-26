var gridConfig = function () {
    //private
   
    var defaultConfig = {
        dataSource: {
            type: "odata",
            transport: {
                read: appConfig.readUri
            },
            schema: {
                model: {
                    fields: {
                        OrderID: { type: "number" },
                        Freight: { type: "number" },
                        ShipName: { type: "string" }
                    }
                }
            },
            pageSize: 20,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true
        },
        height: 550,
        filterable: true,
        sortable: true,
        pageable: true,
        columns: [{
            field: "OrderID",
            filterable: false
        },
            "Freight",
        {
            field: "ShipName",
            title: "Ship Name"
        }
        ]
    },
    rebuildConfig = function(settings) {
        return $.extend(true ,gridConfig.baseGridConfig, settings)
    }

    return {
      //public
        baseGridConfig: defaultConfig,
        extendGridConfig: rebuildConfig
    }
} ();