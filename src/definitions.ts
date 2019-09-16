declare module "@capacitor/core" {
  interface PluginRegistry {
    AudioPlugin: AudioPlugin;
  }
}

export interface AudioPlugin {
  play(options: { path: string }): Promise<void>;
}
