export const handler = async (event, context) => {
    console.log('Received event:', event);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        event,
      })
    };

    return response;
};
  