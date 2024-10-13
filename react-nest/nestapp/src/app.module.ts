import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema, Document } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Define the schema directly
export type NameDocument = Name & Document;

export class Name {
  name: string;
}

const NameSchema = new Schema({
  name: { type: String, required: true },
});

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    // Register the Name model
    MongooseModule.forFeature([{ name: 'Name', schema: NameSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
