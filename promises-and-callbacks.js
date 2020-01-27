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
        console.log(response)
        var filenames = ['file1', 'file2', 'file3']

        for (i = 0; i < filenames.length; i++) {
            if (filenames[i] in response) {
                if (typeof response[filenames[i]] == 'string') {
                    console.log(response[filenames[i]])
                    response[filenames[i]] = false
                }
            }
            else {
                return;
            }
        }
        console.log("complete")
    })
}



getFile('file1');

getFile('file2');

getFile('file3');

