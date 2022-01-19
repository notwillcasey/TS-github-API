import { app } from './server';

  const PORT: any = process.env.PORT;

  try {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`)
    });
  } catch(e) {
    console.log(e);
  }