


function phone(nums){
    let phoneStr="(XXX) XXX-XXXX";
    for(let i = 0 ; i<nums.length; i++){
    phoneStr=phoneStr.replace('X',nums[i]);
}
return phoneStr;
}
console.log(phone([6,5,7,8,9,0,8,7,6,5]))


