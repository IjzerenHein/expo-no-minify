This repo demonstrates a bug in expo where the minification step is skipped when hermes is enabled.

It contains a custom metro minifier that is never called when hermes is enabled.

To reproduce:

```
clone repo
npm install
npm expo prebuild
npm run ios:release
```

After switching to jsc in app.json, the app will fail to load with an error (as expected).
