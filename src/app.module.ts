import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { PlaygroundCommand } from './playground';

@Module({
  imports: [CommandModule],
  providers: [PlaygroundCommand],
})
export class AppModule {}
