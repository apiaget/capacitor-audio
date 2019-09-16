var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from '@capacitor/core';
export class Audio extends WebPlugin {
    constructor() {
        // Call super with the name of our plugin (this should match the native name),
        // along with the platforms this plugin will activate on. For example, it's possible
        // to use a web plugin for Android and iOS by adding them to the platforms list (lowercased)
        super({
            name: 'Audio',
            platforms: ['web']
        });
    }
    play(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = options.path;
            if (null == path || path.length == 0) {
                return Promise.reject("Please, provide a non empty path.");
            }
            if (0 !== path.indexOf("/")) {
                path = "/" + path;
            }
            let audio = new window.Audio(path);
            audio.play();
            //new window.Audio(path).play();
        });
    }
}
//# sourceMappingURL=web.js.map