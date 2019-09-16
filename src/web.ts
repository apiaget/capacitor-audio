import { WebPlugin } from '@capacitor/core';
import { AudioProtocol, PlayParams } from "./definitions";

declare var window: any;

export class Audio extends WebPlugin implements AudioProtocol {
  constructor() {
    // Call super with the name of our plugin (this should match the native name),
    // along with the platforms this plugin will activate on. For example, it's possible
    // to use a web plugin for Android and iOS by adding them to the platforms list (lowercased)
    super({
      name: 'Audio',
      platforms: ['web']
    });
  }

  async play(options: PlayParams): Promise<void> {
    let path: string = options.path;
    if(null == path || path.length == 0) {
      return Promise.reject("Please, provide a non empty path.");
    }
    if(0 !== path.indexOf("/")) {
      path = "/" + path;
    }
    let audio = new window.Audio(path);
    audio.play();
    //new window.Audio(path).play();
  }
}
