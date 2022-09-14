/* FS module is used to 
create, update,delete,read and rename files in nodejs

*/

//READFILES->

//1.fs.readFile() method is used to readfiles 

//const { fstat } = require("fs");

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('demo1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);
//______________________________________________________
//CREATEFILES->

/*2.File system has 3 methods for creating files
>fs.appendFile()
>fs.open()
>fs.writeFile()
*/



//>FS.APPENDFILE()
//___________________________________________________________________________________________
//  var fs = require('fs');

// fs.appendFile('mynewfile1.py', 'print("hello world")', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

//above method is used to create a file if the file is not present or make changes to the file
//in existing file
//__________________________________________________________________________________________________
//>FS.OPEN()
//this method takes flag as a second argument and creates an empty file if the file does not exist

// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });
//___________________________________________________________________________________---
//FS.WRITEFILE()
//this method creates a file if file does not exist and writes the file if the file exists already.

// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'TDTYKA', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
//________________________________________________________________________________

//FS.UPDATE()
//There are 2 methods used to update file
//1.fs.appendFile()
//this method is used to append data to end of the file.
//2.fs.writeFile()
//this method is used to overwrite the existing data in a file.
//________________________________________________________________________________________
//DELETING FILES
//fs.unlink() method is used to delete the specified file 
// var fs = require('fs');

// fs.unlink('mynewfile2.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });
//_______________________________________________________________________________________
//RENAME FILE
//fs.rename method is used to rename a file 
// var fs = require('fs');

// fs.rename('myrenamedfile.txt','mynewfile1.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });