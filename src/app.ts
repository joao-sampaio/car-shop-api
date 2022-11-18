import express from 'express';
import carRouter from './Routers/car.router';
import motorcycleRouter from './Routers/motorcycle.router';

const app = express();

app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motorcycleRouter);

export default app;
