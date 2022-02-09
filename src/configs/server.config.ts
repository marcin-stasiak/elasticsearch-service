export default () => ({
  environment: process.env.NODE_ENV || 'development',
  port: Number.parseInt(process.env.PORT, 10) || 6464,
});
