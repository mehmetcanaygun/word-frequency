// DOM Elements
document.getElementById("count-btn").addEventListener("click", countWords);
const freqTable = document.getElementById("freq-table");
const wordFreqList = document.getElementById("word-freq-list");

// Variables
let wordsArr = [];
let uniqueArr = [];
let freqArr = [];

// Get text on button click
function countWords() {
  reset();

  let text = document.getElementById("text").value.toLowerCase();

  if (text === "") {
    // Show an alert if text field is empty
    alert("Text field is empty.");
  } else {
    // Split by white space
    wordsArr = text.split(" ");
    // Remove punctuation
    wordsArr.forEach((val, index, arr) => {
      arr[index] = val.replace(/[.!?,;:]/g, "");
    });
    // Capitalize first letters
    wordsArr.forEach((val, index, arr) => {
      arr[index] = val.charAt(0).toUpperCase() + val.slice(1);
    });
    // Create unique array
    wordsArr.forEach(w => {
      if (!uniqueArr.includes(w)) {
        uniqueArr.push(w);
      }
    });
    // Find occurences
    for (let i = 0; i < uniqueArr.length; i++) {
      let obj = {};
      let word = uniqueArr[i];
      let freq = 0;
      for (let j = 0; j < wordsArr.length; j++) {
        if (uniqueArr[i] === wordsArr[j]) {
          freq++;
        }
      }

      obj.key = word;
      obj.value = freq;
      freqArr.push(obj);
    }
    // Sort the array by descending order
    freqArr.sort(function(a, b) {
      return b.value - a.value;
    });

    // Print the result
    print();
  }
}

// Print function
function print() {
  freqArr.forEach(f => {
    let tr = document.createElement("tr");
    let tdWord = document.createElement("td");
    let tdFreq = document.createElement("td");
    tdWord.innerText = f.key;
    tdFreq.innerText = f.value;
    tr.appendChild(tdWord);
    tr.appendChild(tdFreq);
    wordFreqList.appendChild(tr);
    freqTable.classList.remove("d-none");
  });
}

// Reset function
function reset() {
  wordsArr = [];
  uniqueArr = [];
  freqArr = [];
  descArr = [];
  wordFreqList.innerHTML = "";
}
