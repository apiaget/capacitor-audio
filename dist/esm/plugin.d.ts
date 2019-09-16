import { AudioProtocol } from "./definitions";
import { PlayParams } from './definitions';
export declare class Audio implements AudioProtocol {
    play(options: PlayParams): Promise<void>;
}
