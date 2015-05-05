(function () {
    var app = angular.module("miser", []);
    app.controller("TransactionTableController", function () {
        this.transactions = transactions;
    });

    var transactions = [
        {
            date: "01/01/2001",
            description: "beer",
            sum: 20
        },
        {
            date: "02/01/2001",
            description: "more beer",
            sum: 30
        }
    ]
})();