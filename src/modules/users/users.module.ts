import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersInMemoryRepository } from './repositories/in-memory/users.in-memory.repository';
import { UsersRepository } from './repositories/users.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: UsersRepository, useClass: UsersInMemoryRepository },
  ],
})
export class UsersModule {}
