import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {NotificationEntity} from './notification.entity';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService],
  imports: [
      TypeOrmModule.forFeature([NotificationEntity])
  ]
})
export class NotificationsModule {}
