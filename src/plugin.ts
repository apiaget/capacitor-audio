  
import { Plugins } from "@capacitor/core";
import { AudioProtocol } from "./definitions";
import {
    PlayParams
  } from './definitions';
const { AudioPlugin } = Plugins;

export class Audio implements AudioProtocol {
  play(options: PlayParams): Promise<void> {
      return AudioPlugin.play(options)
  }
}