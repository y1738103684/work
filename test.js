var str = 'zegotest-445349714-development_a74b6700681511eabd8a891cfe5ff1f9_a74d62d0-6815-11ea-bd8a-891cfe5ff1f9';
var pattern = /[a-zA-Z0-9-]*/g;
const len = str.match(pattern).length;
console.log(str.match(pattern)[len-4]);