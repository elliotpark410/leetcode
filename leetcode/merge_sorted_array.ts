// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


// Constraints:
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index1 = m - 1; // Index of the last element in nums1
  let index2 = n - 1; // Index of the last element in nums2
  let indexMerged = m + n - 1; // Index of the last element in the merged array

  // Merge elements from the end of both arrays into nums1 from end to beginning
  while (index1 >= 0 && index2 >= 0) {
      if (nums1[index1] > nums2[index2]) {
          nums1[indexMerged] = nums1[index1];
          index1--;
      } else {
          nums1[indexMerged] = nums2[index2];
          index2--;
      }
      indexMerged--;
  }

  // Merge any remaining elements from nums2 (if any)
  while (index2 >= 0) {
      nums1[indexMerged] = nums2[index2];
      index2--;
      indexMerged--;
  }
};

const nums1: number[] = [1,2,3,0,0,0];
const nums2: number[] = [2, 5, 6];
const m: number = 3;
const n: number = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1,2,2,3,5,6]


// visual
/*
Initial state:
nums1: [1, 2, 3, 0, 0, 0]  (m = 3)
nums2: [2, 5, 6]            (n = 3)

Step 1:
nums1: [1, 2, 3, 0, 0, 6]  (m = 3)
nums2: [2, 5, 6]            (n = 2)
           ^                 ^
       index1            indexMerged
                    index2

Step 2:
nums1: [1, 2, 3, 0, 5, 6]  (m = 3)
nums2: [2, 5, 6]            (n = 1)
           ^              ^
       index1         indexMerged
                    index2

Step 3:
nums1: [1, 2, 3, 3, 5, 6]  (m = 3)
nums2: [2, 5, 6]            (n = 0)
        ^              ^
    index1         indexMerged
                    index2

Final state:
nums1: [1, 2, 2, 3, 5, 6]   (merged array)
*/
