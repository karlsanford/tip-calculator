// const fs = require('fs');
// const path = require('path')
// const filePath = path.join(__dirname, 'simpleShiftReport.csv')

// let table = [
//     ["bob",8,14],
//     ["julie",11.6,19.2],
//     ["frank",16.01,24.75]
// ]

function readShiftReportInput () {
    let textAreaData = document.getElementById('shiftReportInput').value;
    let hasHeaders = document.getElementById('hasHeaders').checked;
    dataArr = csvToArray(textAreaData);
    console.log(dataArr)
    dataObj = objectFromNestedArray(dataArr,hasHeaders)
    console.log(dataObj)
}

function csvToArray (csv) { return csv.split(/\r\n|\n/).map( line => line.split('\t'));}

function objectFromNestedArray (arr, headers) {
    //if headers undefined or false
    if(typeof headers === undefined || headers === false) headers = arr.map((item,index) => 'Column' + index)
    //if headers has true
    if(headers === true) headers = arr.filter((item, index) => { return index > 0});
    //map nested array and reduce inner arrays to object with key:value pair based on headers
    newOBJ = arr.map((line) => {
        return line.reduce((acc,item,index) => {
            acc[headers[index].replace(/\s+/g,'_')] = item;
            return acc;
        },{})
    })
        
    return newOBJ;
}
///\s+/g
// shiftReport = fs.readFileSync(filePath, {encoding: 'utf-8'})

// shiftTable = csvToArray(shiftReport);



// let tipPoolTable = []

// headers = shiftReport.shift();

// shiftTable.forEach((line) => {
//     let inTime = emp[1];
//     let outTime = emp[2];
//     let i = 0;
//     let hoursPerHour = [];
//     for (i=0; i < 26; i++) {
        
//         //Test if in time is between i and next i
//         if(inTime > i && inTime < i + 1) {
//             hoursPerHour.push(i + 1 - inTime)
//         //Test if i is a full worked hour
//         } else if (i >= Math.ceil(inTime) && i < Math.floor(outTime)) {
//             hoursPerHour.push(1)
//         //Test if i is less clock out but greater that the next i (out hour)
//         } else if (outTime > i && outTime < i + 1){
//             hoursPerHour.push(outTime - i)
//         } else {
//             hoursPerHour.push(0)
//         }
//     }
//     tipPoolTable.push(hoursPerHour)
// })

//console.log(tipPoolTable);