# Vanilla JS Uility Functions

Collection of vanilla JS utility functions ES2015 compatibile

## Function list

```js
/* Fetch */
fetchJsonAsync; // fetch JSON response
fetchJsonAbortCb; // fetch JSON response with abort (callback)

/* Inline */
fetchSimpleTextAsync; // fetch text
fetchSimpleJsonAsync; // fetch JSON
isObjectEmpty; // Check if an objet is empty
deleteAllChild; // Delete all child of HTML element
randomIntFast; // Generate random integer (~~)
radToDeg; // Convert radian to degree
degToRad; // Convert degree to radian
isPowerOf2; // Check if number is power of two (bitwise check)
fixToOne; // Round number to one decimal (fast)
fixToTwo; // Round number to two decimal (fast)

/* DOM */
createElement; // Create a DOM element

/* Other */
debounce; // Simple debounce with setTimeout
random; // Generate random number (decimal option)

/* Debug (chromium API) */
getElementEvents; // Get HTML element registered events
```

## TODO

1. Add terser script to minify js
2. Add more functions
