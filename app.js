const fs = require("fs");
const { stringify } = require("querystring");
// const { isFunction } = require("util");
// const { isGeneratorFunction } = require("util/types");
/*************************** */
// for the character redaing in a string
// for (const c of text) {
//     console.log(c);
// }


fs.readFile("index.txt", (err, data) => {
    if (err) throw err;
    let s = data.toString();
    s.trim();
    //this is  use to clear the append string if we got a terminal symbol
    let flag = false, append = '';
    for (const c of s) {
        if (c == '💨') {
            if (append != '') {
                fs.appendFileSync("index1.js", append, (err) => {
                    if (err) throw err;
                });
            }
            append = 'let '
            flag = true;
        }
        else if (c == '💬') {
            if (append != '') {
                fs.appendFileSync("index1.js", append, (err) => {
                    if (err) throw err;
                });
            }
            append = '// '
            flag = true;
        }
        else if (c == '🤗') {
            if (append != '') {
                fs.appendFileSync("index1.js", append, (err) => {
                    if (err) throw err;
                });
            }
            append = 'console.log'
            // flag = false;
            flag = true;
        }
        else if (c == '🧐') {
            if (append != '') {
                fs.appendFileSync("index1.js", append, (err) => {
                    if (err) throw err;
                });
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
                fs.appendFileSync("index1.js", append, (err) => {
                    if (err) throw err;
                });
            }
            append = '{'
            flag = true;
        }
        else if (c == '👈') {
            if (append != '') {
                fs.appendFileSync("index1.js", append, (err) => {
                    if (err) throw err;
                });
            }
            append = '}'
            flag = true;
        }
        else if (c == '😎') {
            if (append != '') {
                fs.appendFileSync("index1.js", append, (err) => {
                    if (err) throw err;
                });
            }
            append = 'else '
            // flag = false;
            flag = true;
        }
        else if (c == '🔁') {
            if (append != '') {
                fs.appendFileSync("index1.js", append, (err) => {
                    if (err) throw err;
                });
            }
            append = '🔁'
            flag = false;
            // flag = true;
        }
        else if (c == '🏡') {
            if (append != '') {
                fs.appendFileSync("index1.js", append, (err) => {
                    if (err) throw err;
                });
            }
            append = 'function '
            flag = false;
            // flag = true;
        }
        else if (c == '😊') {
            if (append != '') {
                fs.appendFileSync("index1.js", append, (err) => {
                    if (err) throw err;
                });
            }
            append = 'return'
            flag = false;
            // flag = true;
        }
        else {
            append += c;
            flag = false;
        }
        if (flag) {
            fs.appendFileSync("index1.js", append, (err) => {
                if (err) throw err;
            });
            append = ''
        }
        // console.log(c)
    }
    if (append != '') {
        if (append.includes('🔁')) {
            let anotherappend = forfunction(append);
            append = anotherappend;
        }
        fs.appendFileSync("index1.js", append, (err) => {
            if (err) throw err;
        });
    }
    fs.appendFileSync("index1.js", '\n', (err) => {
        if (err) throw err;
    })
});
/********************************************function part ******************/
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
const myTimeout = setTimeout(solve, 100);
function solve() {
    require('./index1');
    /******************************** *****************************************************8*/
    // if we want to clear the indexe1.js
    // fs.writeFile("index1.js", "", (err) => {
    //     if (err) throw err;
    //     // console.log("Completed!");
    // });
}