import { Plugins } from "@capacitor/core";
const { AudioPlugin } = Plugins;
export class Audio {
    play(options) {
        return AudioPlugin.play(options);
    }
}
//# sourceMappingURL=plugin.js.map