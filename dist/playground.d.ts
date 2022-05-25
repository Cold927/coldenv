import { ModuleRef } from '@nestjs/core';
export declare class PlaygroundCommand {
    private moduleRef;
    constructor(moduleRef: ModuleRef);
    playground(playground: string, arg: string[], args: string): Promise<void>;
}
