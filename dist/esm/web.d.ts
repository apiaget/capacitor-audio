import { WebPlugin } from '@capacitor/core';
import { AudioProtocol, PlayParams } from "./definitions";
export declare class Audio extends WebPlugin implements AudioProtocol {
    constructor();
    play(options: PlayParams): Promise<void>;
}
