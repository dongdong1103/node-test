// try {
    interview(function(res) {
        if (res) {
            return console.log('cry')
        }
        console.log('smile')
    })
// } catch(e) {
//     console.log('cry', e)
// }

function interview(callback) {
    setTimeout(() => {
        if (Math.random() < 0.1) {
            callback(null, 'success')
        } else {
            // throw new error('fail')
            callback(new Error('fail'))
        }
    }, 500);
}