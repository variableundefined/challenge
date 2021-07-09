const mockDBCalls = require('../database/index.js');

const getItemsHandler = async (request, response) => {
    let data = await mockDBCalls.getItems();

    return response.status(200).send(JSON.stringify(data));
}

module.exports = (app) => {
    app.get('/items', getItemsHandler);
};