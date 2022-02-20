export default () => ({
  development: process.env.NODE_ENV !== 'production',
  port: Number.parseInt(process.env.PORT, 10) || 3000,
  elasticsearch: process.env.ELASTIC_SEARCH_URL || '',
});
