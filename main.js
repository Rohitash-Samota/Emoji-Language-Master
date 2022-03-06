var jscode = "";
var isConsole = false;
var editor = CodeMirror.fromTextArea(document.getElementById('textarea'), {
    lineNumbers: true,
    mode: 'xml',
    theme: 'dracula'
});
// var righteditor = CodeMirror.fromTextArea(document.getElementById('right-textarea'), {
//     lineNumbers: true,
//     mode: 'javascript',
//     theme: 'dracula',
// });

var righteditor = CodeMirror.fromTextArea(document.getElementById('right-textarea'), {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'dracula',
    // theme: 'cobalt'
});
/*************************** */

document.getElementById('rightbox-arrow').addEventListener('click', () => {
    document.getElementById('rightbox').classList.toggle('rightbox-close');
    document.getElementById('rightbox-arrow').classList.toggle('fa-arrow-right');
    // document.getElementById('rightbox-reload').classList.toggle('reloadbutton-enable');
    document.getElementById("rightbox").style.transition = "all 1.6s";
})

/********************************* */

document.getElementById('reload').addEventListener('click', () => {
    jscode = "";
    righteditor.setValue("");
    editor.setValue("");
    // location.reload();
})

document.getElementById('Run').addEventListener('click', () => {
    document.getElementById('mylog').innerHTML = ""
    jsconvertor();
    var console_log = window.console.log;
    var window_parent = window.parent;
    var window_top = window.top;
    window.parent = null;
    window.top = null;
    window.console = {
        log: function (str) {
            var node = document.createElement('div');
            // node.appendChild(document.createTextNode(JSON.stringify(str)));
            node.appendChild(document.createTextNode(str));
            // document.getElementById('myLog').appendChild(node);
            document.getElementById('mylog').appendChild(node);
        }
    }

    try {
        eval(jscode)
    } catch (error) {
        console.log(error);
    }

    // var err = getErrorObject();


    window.parent = window_parent;
    window.top = window_top;
    window.console = {
        log: console_log
    }

    document.getElementById('myLog').classList.add('visible');


})

/************************************ */

/*******************************console */
document.getElementById('removeIcon').addEventListener('click', () => {
    document.getElementById('myLog').classList.toggle('visible')
})

function jsconvertor() {
    var value = editor.getValue();
    jscode = "";
    righteditor.setValue("");
    var lines = value.split('\n');
    for (i = 0; i < lines.length; i++) {
        let s = lines[i];
        s.trim();
        //this is  use to clear the append string if we got a terminal symbol
        let flag = false, append = '';
        for (const c of s) {
            if (c == '💨') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = 'let '
                flag = true;
            }
            else if (c == '💬') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = '// '
                flag = true;
            }
            else if (c == '🤗') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = 'console.log'
                isConsole = true;
                // flag = false;
                flag = true;
            }
            else if (c == '🧐') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = 'if '
                // flag = false;
                flag = true;
            }
            else if (c == '👉') {
                if (append != '') {
                    if (append.includes('🔁')) {
                        let anotherappend = forfunction(append);
                        append = anotherappend;
                    }
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = '{'
                flag = true;
            }
            else if (c == '👈') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = '}'
                flag = true;
            }
            else if (c == '👆') {
                if (append != '') {
                    if (append.includes('🔁')) {
                        let anotherappend = forfunction(append);
                        append = anotherappend;
                    }
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                if (isConsole == true) {
                    append = '("'
                }
                else {
                    append = '(';
                }
                flag = true;
            }
            else if (c == '☝') {
                if (append != '') {
                    if (append.includes('🔁')) {
                        let anotherappend = forfunction(append);
                        append = anotherappend;
                    }
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                if (isConsole == true) {
                    append = '")';
                    isConsole = false;
                }
                else {
                    append = ')'
                }
                flag = true;
            }
            else if (c == '😎') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = 'else '
                // flag = false;
                flag = true;
            }
            else if (c == '🔁') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = '🔁'
                flag = false;
                // flag = true;
            }
            else if (c == '🏡') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = 'function '
                flag = false;
                // flag = true;
            }
            else if (c == '😊') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = 'return '
                flag = false;
                // flag = true;
            }
            else {
                append += c;
                flag = false;
            }
            if (flag) {
                // fs.appendFileSync("index1.js", append, (err) => {
                //     if (err) throw err;
                // });
                jscode += append;
                append = ''
            }
            // console.log(c)
        }
        if (append != '') {
            if (append.includes('🔁')) {
                let anotherappend = forfunction(append);
                append = anotherappend;
            }
            // fs.appendFileSync("index1.js", append, (err) => {
            //     if (err) throw err;
            // });
            jscode += append;
        }
        // fs.appendFileSync("index1.js", '\n', (err) => {
        //     if (err) throw err;
        // })
        jscode += '\n';
    }
    // const myTimeout = setTimeout(delay, 100);
    righteditor.setValue("");
    righteditor.setValue(jscode)
    // console.log(jscode);
}
document.getElementById('Code').addEventListener("click", () => {
    var value = editor.getValue();
    jscode = "";
    righteditor.setValue("");
    var lines = value.split('\n');
    for (i = 0; i < lines.length; i++) {
        let s = lines[i];
        s.trim();
        //this is  use to clear the append string if we got a terminal symbol
        let flag = false, append = '';
        for (const c of s) {
            if (c == '💨') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = 'let '
                flag = true;
            }
            else if (c == '💬') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = '// '
                flag = true;
            }
            else if (c == '🤗') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = 'console.log'
                // flag = false;
                flag = true;
            }
            else if (c == '🧐') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = 'if '
                // flag = false;
                flag = true;
            }
            else if (c == '👉') {
                if (append != '') {
                    if (append.includes('🔁')) {
                        let anotherappend = forfunction(append);
                        append = anotherappend;
                    }
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = '{'
                flag = true;
            }
            else if (c == '👈') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = '}'
                flag = true;
            }
            else if (c == '👆') {
                if (append != '') {
                    if (append.includes('🔁')) {
                        let anotherappend = forfunction(append);
                        append = anotherappend;
                    }
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                if (isConsole == true) {
                    append = '("'
                }
                else {
                    append = '(';
                }
                flag = true;
            }
            else if (c == '☝') {
                if (append != '') {
                    if (append.includes('🔁')) {
                        let anotherappend = forfunction(append);
                        append = anotherappend;
                    }
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                if (isConsole == true) {
                    append = '")';
                    isConsole = false;
                }
                else {
                    append = ')'
                }
                flag = true;
            }
            else if (c == '😎') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = 'else '
                // flag = false;
                flag = true;
            }
            else if (c == '🔁') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = '🔁'
                flag = false;
                // flag = true;
            }
            else if (c == '🏡') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = 'function '
                flag = false;
                // flag = true;
            }
            else if (c == '😊') {
                if (append != '') {
                    // fs.appendFileSync("index1.js", append, (err) => {
                    //     if (err) throw err;
                    // });
                    jscode += append;
                }
                append = 'return '
                flag = false;
                // flag = true;
            }
            else {
                append += c;
                flag = false;
            }
            if (flag) {
                // fs.appendFileSync("index1.js", append, (err) => {
                //     if (err) throw err;
                // });
                jscode += append;
                append = ''
            }
            // console.log(c)
        }
        if (append != '') {
            if (append.includes('🔁')) {
                let anotherappend = forfunction(append);
                append = anotherappend;
            }
            // fs.appendFileSync("index1.js", append, (err) => {
            //     if (err) throw err;
            // });
            jscode += append;
        }
        // fs.appendFileSync("index1.js", '\n', (err) => {
        //     if (err) throw err;
        // })
        jscode += '\n';
    }
    jsconvertor();
    const myTimeout = setTimeout(delay, 100);
    righteditor.setValue("");
    righteditor.setValue(jscode)
    // console.log(jscode);
})
function delay() {

}

/**************************for copytoclipboard */
const copytoclipboard = (text) => {
    const textarea = document.createElement('textarea');
    // console.log('Hey this is working');
    textarea.classList.add('create-textarea')
    document.body.appendChild(textarea);
    textarea.value = text;
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

document.getElementById('emoji1').addEventListener('click', () => {
    copytoclipboard('💨');
})
document.getElementById('emoji2').addEventListener('click', () => {
    copytoclipboard('💬');
})
document.getElementById('emoji3').addEventListener('click', () => {
    copytoclipboard('🤗');
})
document.getElementById('emoji4').addEventListener('click', () => {
    copytoclipboard('🧐');
})
document.getElementById('emoji5').addEventListener('click', () => {
    copytoclipboard('😎');
})
document.getElementById('emoji6').addEventListener('click', () => {
    copytoclipboard('😎🧐');
})
document.getElementById('emoji7').addEventListener('click', () => {
    copytoclipboard('👉👈');
})
document.getElementById('emoji8').addEventListener('click', () => {
    copytoclipboard('👈');
})
document.getElementById('emoji9').addEventListener('click', () => {
    copytoclipboard('🔁');
})
document.getElementById('emoji10').addEventListener('click', () => {
    copytoclipboard('🏡');
})
document.getElementById('emoji11').addEventListener('click', () => {
    copytoclipboard('😊');
})
document.getElementById('emoji12').addEventListener('click', () => {
    copytoclipboard('👆☝');
})

document.getElementById('emoji13').addEventListener('click', () => {
    copytoclipboard('☝');
})

function forfunction(string) {
    // console.log(string);
    let t = 0, variable, start_index, end_index;
    let i, s = '', s1 = '';
    for (let c of string) {
        if (c == '(') {
            s += '('
        }
        else if (c == ')') {
            s += s1;
            s1 = '';
            s += ')';
        }
        else if (c == '🔁') {
            s += s1;
            s1 = '';
            s = s + 'for'
        }
        else if (c == ',') {
            if (t == 0) {
                variable = s1;
                s += s1;
                s += '=';
                s1 = '';
            }
            else if (t == 1) {
                s += s1;
                s += ';';
                start_index = parseInt(s1);
                s1 = '';
            }
            else if (t == 2) {
                end_index = parseInt(s1);
                if (start_index > end_index) {
                    s += variable + '>=' + s1 + ';';
                }
                else {
                    s += variable + '<=' + s1 + ';';
                }
                s1 = '';
            }
            t++;
        }
        else if (c == ' ')
            s1 += ' ';
        else
            s1 += c;
    }
    // console.log(s);
    return (s);
}