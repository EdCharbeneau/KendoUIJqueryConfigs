var appConfig = function () {
    //private
   
    var readConnectionString = "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders",
        updateConnectionString = "https://...",
        createConnectionString = "https://...",
        deleteConnectionString = "https://..."

    return {
      //public
        readUri: readConnectionString //,
        // createUri: createConnectionString,
        // updateUri: updateConnectionString,
        // deleteUri: deleteConnectionString
    }
} ();