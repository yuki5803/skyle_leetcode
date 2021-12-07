// https://leetcode-cn.com/problems/numbers-with-same-consecutive-differences/
// 967. 连续差相同的数字
// Done


/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
 var numsSameConsecDiff = function(n, k) {
    const result = []
    function backTrack(nums){
        if(nums.length > 1){
            let num1 = Number(nums[nums.length-1])
            let num2 = Number(nums[nums.length-2])
            if(Math.abs(num1-num2) !== k){
                return
            }
        }
        if(nums.length === n){
            result.push(Number(nums))
            return
        }
        for(let i=0;i<10;i++){
            if(!nums && i===0){
                continue
            }
            nums = nums+i.toString()
            backTrack(nums)
            nums = nums.slice(0,nums.length-1)
        }
    }
    backTrack('')
    return result
};