/*
  WHY THESE ERRORS COMES:
  1.what is Cannot redeclare block scoped variable
    -Using variable names that clash with TypeScript global typings.
    -Redeclaring a variable in the same block scope
  2.how to resolve
    -then we use modules for exporting ts file into js file
    " export {} in head of file"
  3.what is watch
    -match is used for compiling all ts file without using  'tsc filename' commands again and again and  also its gives somes errors if error in ts file 
    "file name --watch"
  4.run file without browser
    -then we use node and result is showing in a terminal
    "node filename"
  5.let conversion
    when we declare 'let' variable in ts file then  its show 'var' variable in js file so this call conversions
*/
export  {}
let a ="yo man";
//console.log(a)
let d="yo man";
console.log(a,d,a==d);
