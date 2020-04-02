let table = [
    ["bob",8,14],
    ["julie",11.6,19.2],
    ["frank",16.01,24.75]
]

let tipPoolTable = []

table.forEach((emp) => {
    let inTime = emp[1];
    let outTime = emp[2];
    let i = 0;
    hoursPerHour = []
    for (i=0; i < 26; i++) {
        
        //Test if in time is between i and next i
        if(inTime > i && inTime < i + 1) {
            hoursPerHour.push(i + 1 - inTime)
        //Test if i is a full worked hour
        } else if (i >= Math.ceil(inTime) && i < Math.floor(outTime)) {
            hoursPerHour.push(1)
        //Test if i is less clock out but greater that the next i (out hour)
        } else if (outTime > i && outTime < i + 1){
            hoursPerHour.push(outTime - i)
        } else {
            hoursPerHour.push(0)
        }
    }
    tipPoolTable.push(hoursPerHour)
})

console.log(tipPoolTable)

