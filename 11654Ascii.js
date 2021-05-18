let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function(line) {

    // charCodeAt() : 문자의 아스키코드 반환
    console.log(line.charCodeAt());

    rl.close();
}).on('close', function () {
    process.exit();
})

// 문제
// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.
