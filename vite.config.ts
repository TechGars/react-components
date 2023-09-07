import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
    build: {
        lib:{
            entry: './dist/src/index.d.ts',
            name:'react-compponents',
            fileName:(format)=> `index.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals:{
                    react: 'React',
                    'react-dom': 'ReactDom'
                },

            }
        },
        sourcemap:true,
        emptyOutDir:true
    },
    plugins:[react(), dts()]

})