
var talkingCalendar = function(date)

{

if (date[5] == 0 && date[6] == 1)
    {
      var month = "January";
    }

else if (date[5] == 0 && date[6] == 2)
    {
      var month = "February";
    }

else if (date[5] == 0 && date[6] == 3)
    {
      var month = "March";
    }

else if (date[5] == 0 && date[6] == 4)
    {
      var month = "April";
    }

else if (date[5] == 0 && date[6] == 5)
    {
      var month = "May";
    }

else if (date[5] == 0 && date[6] == 6)
    {
      var month = "June";
    }

else if (date[5] == 0 && date[6] == 7)
    {
      var month = "July";
    }

else if (date[5] == 0 && date[6] == 8)
    {
      var month = "August";
    }

else if (date[5] == 0 && date[6] == 9)
    {
      var month = "September";
    }

else if (date[5] == 1 && date[6] == 0)
    {
      var month = "October";
    }

else if (date[5] == 1 && date[6] == 1)
    {
      var month = "November";
    }

else
    {
      var month = "December";
    }


var grammar;

if((date[8]==0 && date[9]==1) || (date[8]==2 && date[9]==1) || (date[8]==3 && date[9]==1))
    {
      grammar = "st";
    }

else if ((date[8]==0 && date[9]==2) || (date[8]==2 && date[9]==2))
    {
      grammar = "nd";
    }

else if ((date[8]==0 && date[9]==3) || (date[8]==2 && date[9]==3))
    {
      gramar = "rd";
    }

else
    {
      grammar = "th";
    }


// Printing result

if (date[8] == 0)
    {
      return(month+" "+date[9]+grammar+", "+(date[0]+date[1]+date[2]+date[3]));
    }

else
    {
      return(month+" " +date[8]+date[9]+grammar+", "+(date[0]+date[1]+date[2]+date[3]));
    }

}


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
