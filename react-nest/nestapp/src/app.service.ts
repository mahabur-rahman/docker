import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Name, NameDocument } from './name.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Name.name) private nameModel: Model<NameDocument>) {}

  async create(name: string): Promise<Name> {
    const newName = new this.nameModel({ name });
    return newName.save();
  }

  async allData() {
    return await this.nameModel.find().exec();
  }
}
