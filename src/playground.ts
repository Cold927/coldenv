import { Command, Positional, Option } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class PlaygroundCommand {
  constructor(private moduleRef: ModuleRef) {}

  @Command({
    command: 'playground <playground>',
    describe: 'Run playground',
  })
  async playground(
    @Positional({ name: 'playground' }) playground: string,
    @Positional({ name: 'arg' }) arg: string[],
    @Option({
      name: 'group',
      describe: 'user group (ex: "jedi")',
      type: 'string',
      alias: 'g',
      required: false,
    })
    args: string,
  ) {
    // let args = typeof arg === 'undefined' ? [] : arg;
    let module;
    try {
      module = await import(`./playgrounds/${playground}`);
    } catch (e) {
      if (e.code === 'MODULE_NOT_FOUND') {
        console.log(`No playground named "${playground}"`);
        return;
      } else {
        throw e;
      }
    }
    await module.main(this.moduleRef, args);
  }
}
