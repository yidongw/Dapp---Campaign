const routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new' );
// how come the address knows it's an address
routes.add('/campaigns/:address', '/campaigns/show' );
routes.add('/campaigns/:address/requests', '/campaigns/requests/index' );
routes.add('/campaigns/:address/requests/new', '/campaigns/requests/new' );

module.exports = routes;
