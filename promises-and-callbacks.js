function fakeAjax(url, cb) {

    var fakeResponses = {

        "file1": "The first text",

        "file2": "The middle text",

        "file3": "The last text",

    }

    var randomDelay = (Math.round(Math.random() * 1E4) % 8000 + 1000)

    console.log("Requesting: " + url);

    setTimeout(function () {

        cb(fakeResponses[url]);

    }, randomDelay);

}
var response = {}


function getFile(file) {
    fakeAjax(file, function (text) {
        response[file] = text
        if (Object.keys(response).length === 3) {
            console.log(response['file1'])
            console.log(response['file2'])
            console.log(response['file3'])
            console.log("complete")
        }
    })
}


getFile('file1');

getFile('file2');

getFile('file3');

