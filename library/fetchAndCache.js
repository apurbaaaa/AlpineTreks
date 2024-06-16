// library/fetchAndCache.js
import axios from 'axios';
import redisClient from './redis';

const CACHE_EXPIRATION = 3600; // Cache expiration time in seconds

const fetchAndCache = async (url, cacheKey) => {
  try {
    // Check if data is in Redis cache
    const cachedData = await getCachedData(cacheKey);
    if (cachedData) {
      console.log('Fetching data from cache');
      return cachedData;
    }

    // If not in cache, fetch data from the external API
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = response.data;

    // Store data in Redis cache
    await cacheData(cacheKey, data);

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch data from API');
  }
};

const getCachedData = async (cacheKey) => {
  return new Promise((resolve, reject) => {
    redisClient.get(cacheKey, (err, data) => {
      if (err) return reject(err);
      if (data) return resolve(JSON.parse(data));
      resolve(null);
    });
  });
};

const cacheData = async (cacheKey, data) => {
  return new Promise((resolve, reject) => {
    redisClient.setex(cacheKey, CACHE_EXPIRATION, JSON.stringify(data), (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

export default fetchAndCache;
