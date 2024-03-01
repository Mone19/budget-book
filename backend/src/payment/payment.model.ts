import { Module } from '@nestjs/common';
import { TypeOrmModule, getCustomRepositoryToken } from '@nestjs/typeorm';
import { Payment } from '../entity/payment.entity';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Payment])],
  controllers: [PaymentController],
  providers: [PaymentService ]
})
export class PaymentModule {}