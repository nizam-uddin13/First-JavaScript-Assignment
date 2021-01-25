/**=============================================== Assignment Start ======================================*/

// Problem - (01) Conversion from kilometers to meters.
function kilometerToMeter (kilometer){
    if (kilometer > 1) {
        var meter = kilometer * 1000;
        return meter;
    }else{
        console.log("aponi thick kore kilomiter then.")
    }
}
var totalMeter = kilometerToMeter(10);
console.log(totalMeter); 



// Problem - (02) (budget Calculator) => Watch Price 50 taka, Mobile Price 100 taka, Laptop Price 500 taka.
function budgetCalculator( watch, mobile, laptop){
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}
var totalCost = budgetCalculator(10,8,2);
console.log(totalCost);


// Problem - (03) (Hotel Booking Calculation) => fast 10 days 100 taka, second 10 days 80 taka, Then next others days 50 taka.
function hotelCost (days){
    var rate = 0;
    if(days <= 10){
        rate = days * 100;
    }else if(days <= 20){
        var firstTenDays = 10 *100;
        var payable = days - 10;
        var secondTenDays = payable * 80;
        rate = firstTenDays + secondTenDays;
    }else{
        var firstTenDays = 10 *100;
        var secondTenDays = 10 * 80;
        var payable = days - 20;
        var othersDays = payable * 50;
        rate = firstTenDays + secondTenDays + othersDays;
    }
    return rate;
}
var totalRate = hotelCost(50);
console.log(totalRate);


// Problem - (04) (largest name Search) =>  Find the big name inside the names of all the friends.
var  friendsName = [ 'manzur-E-elahi','abubakar zakaria', 'razzak bin yousuf', 'abdullah jahangir'];
var maxWord = friendsName[0];
function megaFriend (){
    for ( var i = 0 ;i < friendsName.length ; i++){
        var element = friendsName [i];
        if( element.length > maxWord.length){
            maxWord = element;
        }
    }
    return maxWord;
}
var largestName = megaFriend(friendsName)
console.log(largestName);

/**=============================================== Assignment Done ======================================*/