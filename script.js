function majorityElement(nums) {
    // Initialize variables to keep track of the majority element and its count
    let majorityElement = nums[0];
    let count = 1;

    // Loop through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // If the count is zero, update the majority element
        if (count === 0) {
            majorityElement = nums[i];
            count = 1;
        } else if (nums[i] === majorityElement) {
            // If the current element is the majority element, increment the count
            count++;
        } else {
            // If the current element is not the majority element, decrement the count
            count--;
        }
    }

    return majorityElement;
}