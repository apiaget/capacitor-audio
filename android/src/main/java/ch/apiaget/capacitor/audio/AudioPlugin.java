package ch.apiaget.capacitor.audio;

import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.Bridge;

import android.content.res.AssetFileDescriptor;
import android.media.MediaPlayer;
import android.os.Build;
import android.util.Log;

import java.io.FileDescriptor;
import java.io.IOException;

@NativePlugin()
public class AudioPlugin extends Plugin {

    private final String WEB_ASSET_DIR = Bridge.DEFAULT_WEB_ASSET_DIR;


    public void load() {
    }

    @PluginMethod()
    public void play(PluginCall call) {
        String path = call.getString("path");

        if(path == null || path.isEmpty()) {
            call.reject("Please, provide a non empty path.");
            return;
        }

        path = WEB_ASSET_DIR + "/" + path;

        try {
            AssetFileDescriptor afd = getContext().getAssets().openFd(path);
            final MediaPlayer mp = new MediaPlayer();

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                mp.setDataSource(afd);
            } else {
                FileDescriptor fd = afd.getFileDescriptor();
                mp.setDataSource(fd, afd.getStartOffset(), afd.getLength());
            }

            afd.close();
            mp.prepare();
            mp.start();
        } catch (IOException e) {
            Log.d("capacitor-audio", "The capacitor Web asset directory starts with : " + WEB_ASSET_DIR);
            call.reject(e.getLocalizedMessage(), e);
        }

        call.success();
    }
}
