import * as path from "path"
import * as url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import fastifyFactory from 'fastify'
import fastifyStatic from '@fastify/static'

const fastify = fastifyFactory()


fastify.register(fastifyStatic, {
    root: path.resolve(__dirname, '..', 'dist'),
    prefix: '/'
})

const start = async () => {
    try {
        await fastify.listen({host: '0.0.0.0', port: 8080})
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}
start()
    .then(function () {
        console.log('listening')
    })
    .catch(console.error)