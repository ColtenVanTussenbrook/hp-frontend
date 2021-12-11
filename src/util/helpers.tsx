export function ConvertDate(dateStr:string) {

    const date:object = new Date(dateStr);
    const dateArr:any = date.toString().split(" ");
    let formattedDate:string = '';
  
    for (let i = 1; i < dateArr.length; i++) {
      if (i < 4) {
        formattedDate += ' ' + dateArr[i];
      } else break;
    }

    return formattedDate;
  
}