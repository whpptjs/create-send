const assert = require('assert');
const axios = require('axios');

module.exports = async function ({ body: { email, listId, consentToTrack = false } }, res, next) {
  try {
    assert(this.apiKey, 'Create Send API key not provided');

    const _axios = await setupAxiosAuth(this.apiKey);

    const signUp = await _axios.post(`https://api.createsend.com/api/v3.2/subscribers/${listId}.json`, {
      EmailAddress: email,
      ConsentToTrack: consentToTrack ? 'Yes' : 'No',
    });

    return res.send({ message: `Successfully added to ${email} to list: ${listId}` });
  } catch (err) {
    next(err);
  }
};

function setupAxiosAuth(apiKey) {
  const auth = Buffer.from(apiKey).toString('base64');

  return axios.create({
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
}
