/* 
  Checklist:
  1.  we need a rectangle - CHECKED;
  2. We need 4 inputs - CHECKED;
  3. Use JS to get the values of the inputs - CHECKED;
  4. console.log inputTopLeft.value - CHECKED;
  5. Set up the function to change the border-radius top-left - CHECKED;
  6. Set up the function to change the border-radius top-right - CHECKED;
  7. Set up the function to change the border-radius bottom-right - CHECKED;
  8. Set up the function to change the border-radius bottom-left - CHECKED;
  9. Create a textarea to storage the code; - CHECKED;
  10. When insert a value in input copy the HTML to textarea - CHECKED;
  11. Make functions and event listeners for all borders to copy code to textarea without replace the existing textContent; - CHECKED;
  12. Make a button to copy the textarea content; - CHECKED;
  13. Make a JS object to hold all border-radius properties for webkit, moz, and normal border-radius - CHECKED;
  14. Make a function to fill in that object when input or blur happens; - CHECKED;
  15. Make the functions works together without replace each other. - 
  16. Make a function to put the object property values in the textarea on webpage
*/

const rectangle = document.querySelector('#rectangle');
const inputTopLeft = document.querySelector('#top-left');
const inputTopRight = document.querySelector('#top-right');
const inputBottomLeft = document.querySelector('#bottom-left');
const inputBottomRight = document.querySelector('#bottom-right');
const textarea = document.querySelector('#border-values');
const copyBtn = document.querySelector('#copy-code');
let bordersCSSText = {
  webkit: {
    "-webkit-border-top-left-radius": '0%',
    "-webkit-border-top-right-radius": '0%',
    "-webkit-border-bottom-right-radius": '0%',
    "-webkit-border-bottom-left-radius": '0%',
  },
  moz: {
    "-moz-border-top-left-radius": '0%',
    "-moz-border-top-right-radius": '0%',
    "-moz-border-bottom-right-radius": '0%',
    "-moz-border-bottom-left-radius": '0%',
  },
  borderR: {
    "border-top-left-radius": '0%',
    "border-top-right-radius": '0%',
    "border-bottom-right-radius": '0%',
    "border-bottom-left-radius": '0%',
  }
};

// function sendObjectValues(topL, topR, botL, botR) {
//   return bordersCSSText = { 
//       webkit: {
//         "-webkit-border-top-left-radius": `${topL}%`, 
//         "-webkit-border-top-right-radius": `${topR}%`,
//         "-webkit-border-bottom-right-radius": `${botL}%`,
//         "-webkit-border-bottom-left-radius": `${botR}%`
//       },
//       moz: { 
//         "-moz-border-top-left-radius": `${topL}%`,
//         "-moz-border-top-right-radius": `${topR}%`,
//         "-moz-border-bottom-right-radius": `${botL}%`,
//         "-moz-border-bottom-left-radius": `${botR}%`
//       },
//       borderR: {  
//         "border-top-left-radius": `${topL}%`,
//         "border-top-right-radius": `${topR}%`,
//         "border-bottom-right-radius": `${botL}%`,
//         "border-bottom-left-radius": `${botR}%`
//       }
//   };
// }


// EVENT HANDLER FUNCTIONS
function borderRTopLeft(borderRadius) {
  rectangle.style.borderTopLeftRadius = `${borderRadius}%`;
}

function borderRTopRight(borderRadius) {
  rectangle.style.borderTopRightRadius = `${borderRadius}%`;
}

function borderRBottomLeft(borderRadius) {
  rectangle.style.borderBottomLeftRadius = `${borderRadius}%`;
}

function borderRBottomRight(borderRadius) {
  rectangle.style.borderBottomRightRadius = `${borderRadius}%`;
}

// Adds input value to textarea for BORDER-TOP-LEFT
function borderTLValue(borderValue) {
  textarea.textContent += `border-top-left-radius: ${borderValue}%;
-webkit-border-top-left-radius: ${borderValue}%;
-moz-border-radius-topleft: ${borderValue}%;`;
}

// Adds input value to textarea for BORDER-TOP-RIGHT
function borderTRValue(borderValue) {
  textarea.textContent += `border-top-right-radius: ${borderValue}%;
-webkit-border-top-right-radius: ${borderValue}%;
-moz-border-radius-topright: ${borderValue}%;`;
}

// Adds input value to textarea for BORDER-BOTTOM-LEFT
function borderBLValue(borderValue) {
  textarea.textContent += `border-bottom-left-radius: ${borderValue}%;
-webkit-border-bottom-left-radius: ${borderValue}%;
-moz-border-radius-bottomleft: ${borderValue}%;`;
}

// Adds input value to textarea for BORDER-BOTTOM-RIGHT
function borderBRValue(borderValue) {
  textarea.textContent += `border-bottom-right-radius: ${borderValue}%;
-webkit-border-bottom-right-radius: ${borderValue}%;
-moz-border-radius-bottomright: ${borderValue}%;`;
}

// EVENT LISTENERS INPUT 
inputTopLeft.addEventListener('input', event => {
  borderRTopLeft(event.target.value);
});

inputTopRight.addEventListener('input', event => {
  borderRTopRight(event.target.value);
});

inputBottomLeft.addEventListener('input', event => {
  borderRBottomLeft(event.target.value);
});

inputBottomRight.addEventListener('input', event => {
  borderRBottomRight(event.target.value);
});

//EVENT LISTENERS BLUR  // What type of array we are doing? Literal?  we are doing an object literal, dont underline, I cant read kkkkk, no worries, Im miope  Sorry! kkkkk
// here's some sample code
/*
// Clone with spread
***Here the object is made.***
const myObject = { name: "Mary" , lastName: "Smith"};
const cloneSpread = {...myObject}; So here YES, he cloned, and the original, dont changes any time?
console.log(cloneSpread);
 
// Clone with modifying the `lastName`
*** Here the object is changed but only one property...lastName property***
const cloneSpreadModified = {...myObject, lastName: "Lee"}; And here is cloning again and including the original but also makes one change, and the original didnt change? YES
console.log(cloneSpreadModified);
*/

inputTopLeft.addEventListener('blur', event => {
  bordersCSSText.webkit = {...webkit, "-webkit-border-top-left-radius": `${event.target.value}%` };
  bordersCSSText.moz = {...moz, "-moz-border-top-left-radius": `${event.target.value}%` };
  bordersCSSText.borderR = {...borderR, "border-top-left-radius": `${event.target.value}%` };
  console.log(bordersCSSText);
});


inputTopRight.addEventListener('blur', event => {
  bordersCSSText.webkit = {...webkit, "-webkit-border-top-right-radius": `${event.target.value}%` };
  bordersCSSText.moz = {...moz, "-moz-border-top-right-radius": `${event.target.value}%` };
  bordersCSSText.borderR = {...borderR, "border-top-right-radius": `${event.target.value}%` };
  console.log(bordersCSSText);
});

// inputBottomLeft.addEventListener('blur', event => {
//   sendObjectValues(botL=`${event.target.value}`);
//   console.log(bordersCSSText);
// });

// inputBottomRight.addEventListener('blur', event => {
//    (botR=`${event.target.value}`);
//   console.log(bordersCSSText);
// });

// COPY CODE BUTTON
function copyCode() {
  textarea.select();
  document.execCommand('copy');
}

copyBtn.addEventListener('click', copyCode);