import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.APP_NAME || 'ElasticSearch Service',
  secret: process.env.APP_SECRET || 'secret',
}));
