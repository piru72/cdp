module.exports.handler = async (event, context) => {

    try{
        console.log('Hello World from PIRU72');
        return {
            statusCode: 200,
            body: JSON.stringify('Hello World fro PIRU72')
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify('Internal Server Error')
        };
    }
};