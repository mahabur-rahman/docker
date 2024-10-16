import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 2000;
  await app.listen(PORT, () => {
    console.log(
      `Server is running at ${process.env.NODE_ENV} on port: ${PORT}`,
    );
  });
}
bootstrap();
