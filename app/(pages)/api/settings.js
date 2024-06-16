// pages/api/settings.js
import fetchAndCache from '../../library/fetchAndCache';

export default async function handler(req, res) {
  const url = 'https://mountaintrekkingnepal.com/api/settings';
  console.log("Tell my whyyy")
  const cacheKey = 'api_settings';

  try {
    const data = await fetchAndCache(url, cacheKey);
    res.status(200).json(data);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ error: 'Failed to fetch data from API' });
  }
}




