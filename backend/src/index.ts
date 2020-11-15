import app from './app';
import config from './config';
import './database';

app.listen(config.PORT, () => {
  console.log(
    `Server running in ${config.NODE_ENV} mode on port: ${config.PORT}`
  );
});
