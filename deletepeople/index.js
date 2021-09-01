const peopleSchema = require('./peopleSchema')

exports.handler = async (event) => {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
    
        if (id) {

           let items = await peopleSchema.delete({ 'id': id });
           
        } 
        return {
            statusCode: 200,
            body: JSON.stringify(`Successfully deleted ${id}`)
            }

       
    } catch (err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
}