'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new');
// how come the address knows it's an address
routes.add('/campaigns/:address', '/campaigns/show');
routes.add('/campaigns/:address/requests', '/campaigns/requests/index');
routes.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGtCQUE2QixBQUE3QjtBQUNBO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCx1QkFBa0MsQUFBbEM7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGdDQUEyQyxBQUEzQztBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsb0NBQStDLEFBQS9DOztBQUVBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYW53YW5nL0RvY3VtZW50cy9FdGhlci9EYXBwLUNhbXBhaWduIn0=