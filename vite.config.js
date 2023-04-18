import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {createHtmlPlugin} from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        createHtmlPlugin({
            minify: true,
            /**
             * After writing entry here, you will not need to add script tags in `index.html`, the original tags need to be deleted
             * @default src/main.ts
             */
            entry: 'src/index.js',
            /**
             * If you want to store `index.html` in the specified folder, you can modify it, otherwise no configuration is required
             * @default index.html
             */
            template: 'public/index.vite.html',
        }),
    ]
});
