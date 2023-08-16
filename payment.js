/*global variable for two windows one is payment counting and another is payment submit win 1 and win 2*/
var win1;
var win2;



function showTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var session = "AM";

    // Format hours, minutes, and seconds with leading zeros
    m = m < 10 ? "0" + m : m;
    h = h < 10 ? "0" + h : h;
    s = s < 10 ? "0" + s : s;

    // Determine session (AM/PM) and adjust hour format
    if (h >= 12) {
        session = "PM";
        h = h === 12 ? h : h - 12;
    }

    // Update the content of the first <p> element with the formatted time
    document.getElementsByTagName('p')[0].innerHTML = h + ":" + m + ":" + s + " " + session;

    // Call the function again after 1 second
    setTimeout(showTime, 1000);
}

showTime();

function popconfirm() {
    alert("Your current time is noted as payment process time");
    var cardnumber = document.getElementById('card_number').value;
    var s = "*Please confirm your card no* ";
    var k = "Your card no is "
    var z = k + cardnumber;
    
    alert(z);
    alert("Your current time is noted as payment process time.");
    var cardnumber = document.getElementById("card_number").value;
    var k = "Your card no is ";
    var z = k + cardnumber;
    
    
    let b=confirm("Confirm Your All Payment Details Before Submission.");
    // Open a new window with specified dimensions for payment-counting_page.html
    let cvv=document.getElementById('card_cvv').value.length;
    let card_no=document.getElementById('card_number').value.length;
    let name=document.getElementById('name').value.length;
    console.log(cvv);
    if((b==true&&cvv==0&&card_no==0&&name==0))
    {
        return false;
        
    }
    else if(b==true&&cvv==3&&card_no==8){
        setTimeout(() => {
            // Open a new window after counting 1,2,3  payment_submit.html
            //after counting page we want to see submit page for this second page is added here. and 1st page which is added after the else if block
            var win1 = window.open(" payment-submit_page.html", "_blank");
        }, 3000); // Wait for 3 seconds
    }

    // Open a new window with specified dimensions for payment-counting_page.html
    var win2 = window.open("payment_counting.html", "_blank","width=600,height=500");
}
       
    
    // else{
    // }
