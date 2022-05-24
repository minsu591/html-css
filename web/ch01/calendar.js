//calendar.js

const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

let tableTag = '<table border=1>';
tableTag+='<tr>'
for(let d of days){
    tableTag+='<th>'+d+' </th>';
}
tableTag+='</tr> <tr>';
for(let day = 1; day<=31 ;day++){

    
    tableTag+='<td>'+day+'</td>';
    if(day%7==0){
        tableTag+='</tr> <tr>';
    }
}
tableTag+='</tr></table>';
document.write(tableTag);