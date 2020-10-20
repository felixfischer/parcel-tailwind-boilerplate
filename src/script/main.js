import $ from 'jquery'

const data = require('../data.yml')

function main() {
    $(document).ready(function () {
        // jQuery is available
        console.log(data)
    })
}

main()
