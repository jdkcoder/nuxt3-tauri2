export default {
    dirs: [ '../src/stores/**' ],
    presets: [
        {
            from: 'axios',
            imports: [ { name: 'default', as: 'axios' } ]
        }
    ],
}