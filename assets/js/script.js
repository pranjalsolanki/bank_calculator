

var minimum_amount = 2500;
var amount = minimum_amount;
var transactions = [];
document.getElementById('cur-bal').innerHTML = '<b>'+amount+'</b>';
function submit(){
    let action = document.getElementById('action').value;
    let new_amount = document.getElementById('amount').value;
    let interest_rate = document.getElementById('interest').value;
    if(action == 'Credit'){
        if(!isNaN(parseFloat(new_amount)) && (parseFloat(new_amount) <= 50000 && parseFloat(new_amount) >= 500)){
            amount = amount + parseFloat(new_amount);
            document.getElementById('cur-bal').innerHTML = '<b>'+amount+'</b>';
             alert('Your Tnx successfully! Thank You');
            return
        }

        alert('Please Enter vaild Amount, min Amount 500rs, max Amount 50000rs');
        return
    }
    if(action == 'Debit'){
        if(!isNaN(parseFloat(new_amount)) && parseFloat(new_amount) <= amount && parseFloat(new_amount) >= 500){
            if(parseFloat(new_amount) <= (amount - minimum_amount)){
                amount = amount - parseFloat(new_amount);
                document.getElementById('cur-bal').innerHTML = '<b>'+amount+'</b>';
                alert('Your Tnx successfully! Thank You');
                return;
            }else{
                alert('Current balance is not sufficient!');
                    return
                }
               
            } 
                alert('Please Enter vaild Amount');
        return
    }
    if(action == 'Interest'){
        if(!isNaN(parseFloat(interest_rate))){
            amount = amount+((amount*parseFloat(interest_rate)/100)/4);
            document.getElementById('avl-bal').innerHTML = '<b>'+amount+'</b>';
            alert('Congratulations, you get some interest on your money!')
            return
        }

        alert('Please Enter vaild Interest rate');
        return
    }

    alert('Please select correct action.');
        return
}




