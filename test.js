var searchInsert = function(nums, target) {
       
       let str = 0;
       let end = nums.length;
       while(str < end){
              if(nums[str] == target){
                     return str;
              }
              if(nums[str] > target){
            return str;
        }
        str++;
    }
    return nums.length;
};



console.log(searchInsert([1,3,5,6],9));