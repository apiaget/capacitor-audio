declare global {
  interface PluginRegistry {
    AudioPlugin?: AudioProtocol;
  }
}

export interface PlayParams {
  path: string;
}

export interface AudioProtocol {
  play(options: PlayParams): Promise<void>;
}