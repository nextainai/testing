exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  const { subdomain } = JSON.parse(event.body);
  // Simulate assigning a subdomain (in reality, you'd interact with a free host)
  const message = `Hosting requested for ${subdomain}.infinityfreeapp.com. Please check your email for setup instructions.`;
  return {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };
};
