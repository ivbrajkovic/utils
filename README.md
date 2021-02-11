# Vanilla JS Uility Functions

Collection of vanilla JS utility functions ES2015 compatibile

## Function list

```js
/* Fetch */
fetchTextAsync; // Fetch text response async
fetchTextAbortCb; // Fetch text response with abort (callback)
fetchJsonAsync; // Fetch JSON response async
fetchJsonAbortCb; // Fetch JSON response with abort (callback)

/* Inline */
fetchSimpleTextAsync; // Fetch text
fetchSimpleJsonAsync; // Fetch JSON
isObjectEmpty; // Check if an objet is empty
deleteAllChild; // Delete all child of HTML element
randomIntFast; // Generate random integer (~~)
radToDeg; // Convert radian to degree
degToRad; // Convert degree to radian
isPowerOf2; // Check if number is power of two (bitwise check)
fixToOne; // Round number to one decimal (fast)
fixToTwo; // Round number to two decimal (fast)
trimLeadingZeros; // Remove leading 0's from string
logObject; // Pretty print object to console
absValue; // Absolute value of a 32 bit number (like Math.abs but faster)

/* DOM */
createElement; // Create a DOM element

/* Other */
debounce; // Simple debounce with setTimeout
random; // Generate random number (decimal option)
truncStr; // Truncate string if exceed max length

/* Debug (chromium API) */
getElementEvents; // Get HTML element registered events
```

## TODO

1. Add terser script to minify js :heavy_check_mark:
2. Add more functions :blush:
