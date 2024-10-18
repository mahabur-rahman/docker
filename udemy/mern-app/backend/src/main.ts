import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import 'colors'; // Enable the colors prototype extension

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow requests from your frontend
  app.enableCors({
    origin: 'http://localhost:5173', // Allow your frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies if needed
  });

  // Optional: Using ValidationPipe globally
  app.useGlobalPipes(new ValidationPipe());

  const PORT = process.env.PORT || 2000;
  await app.listen(PORT, () => {
    console.log(
      `Server is running at ${process.env.NODE_ENV} on port: ${PORT}`.rainbow,
    ); // Use colors
  });
}

bootstrap();
