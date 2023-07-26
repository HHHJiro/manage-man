import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import  {AntdResolve,createStyleImportPlugin} from "vite-plugin-style-import";

export default defineConfig({
    plugins: [
        react(),
        //
        createStyleImportPlugin(
            {
                resolves: [
                    AntdResolve()
                ],
            }
        ),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
})
