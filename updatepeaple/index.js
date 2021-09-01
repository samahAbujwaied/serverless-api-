
const peopleSchema = require('./peopleSchema')

exports.handler = async (event) => {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        const { name ,age } = JSON.parse(event.body);
        let items;
        if (id) {
         
            await peopleSchema.update({
                'id': id
            },
                {
                    'name': name,
                    'age':age
                })
            items = await peopleSchema.query('id').eq(id).exec();
            items = items[0];

        } else {

            return 'no id was entered';
        }

        return {
            statusCode: 200,
            body: JSON.stringify(items)
        }
    } catch (err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
}