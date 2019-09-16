# Capacitor Audio

This plugin provides audio capabilities to Capacitor apps.

## Installation

`$ npm install capacitor-audio --save`

## Android Configuration

In your `MainActivity.java` file (`android/app/src/main/java/**/**/MainActivity.java`), add the plugin to the initialization list:

```
import ch.apiaget.capacitor.audio.AudioPlugin;

[...]

this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    [...]
    add(AudioPlugin.class);
}});
```

## API

```
import { Audio } from 'capacitor-audio';
const audio = new Audio();


// Usually, the Capacitor base folder is "public".
audio.play({
    path: "public/assets/sounds/bleep.mp3"
});
```

## License

MIT