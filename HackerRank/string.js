/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Ex. 1
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Ex. 2
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef

Ex. 3
Input: s = "3[a2[c]]"
Output: "accaccacc"

s: 3 a 2cc
digit: 3
word: accaccacc
