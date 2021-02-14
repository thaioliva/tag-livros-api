import 'dotenv/config';
import app from './app';
import database from './config/datasource';

app.listen(process.env.PORT, () => {
  (async () => {
    try {
      const resultado = await database.sync();
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  })();

  console.log(`app running on ${process.env.PORT}`);
});
