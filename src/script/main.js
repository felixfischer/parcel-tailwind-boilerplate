import 'alpinejs'

const data = require('../data.yml')

function ready(fn) {
    if (document.readyState != 'loading') {
        fn()
    } else {
        document.addEventListener('DOMContentLoaded', fn)
    }
}

function main() {
    // Ready
    // console.debug('ready')
}

ready(main)
