exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  const { username, email } = JSON.parse(event.body);

  // Basic validation
  if (!username || !email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Username and email are required.' }),
    };
  }

  // Simulate checking subdomain availability (you can expand this logic)
  const subdomain = `${username.toLowerCase().replace(/[^a-z0-9]/g, '')}.freehostingsite.net`;

  // In a real scenario, you'd store this in a database (e.g., Airtable, which has a free tier)
  // For now, we'll just return a message
  const message = `Hosting request received for ${subdomain}! We'll set it up soon and email you at ${email} with details.`;

  // TODO: Send yourself an email or notification to manually set up the hosting on Infinity Free
  // You can use a service like EmailJS (free tier) to send notifications

  return {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };
};
