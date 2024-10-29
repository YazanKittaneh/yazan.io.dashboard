import PocketBase from 'pocketbase';

const pocketbaseUrl = process.env.POCKETBASE_URL;

export const pb = new PocketBase(pocketbaseUrl);
