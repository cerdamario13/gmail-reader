// Generate test data
function sendEmailData(){
    //Write data to excel
    var sheet_id = "1MYmmTfdE4TC_lCQSK0Fubdq3L_wtYLANE4Lb2FwsXR8";
    var sheet_name = "Sentiment Test Data";
    var sheet = SpreadsheetApp.openById(sheet_id).getSheetByName(sheet_name);
  
    let testData = createData(20);
    for (var i = 0; i < testData.length; i++){
      sheet.getRange(i + 1, 1).setValue(testData[i]);
    }
  
  }
  
  
  function createData(number) {
    let results = []
    for (var i=0; i< number; i++){
      const word_array = ["increase", "decrease"];
      const intro_array = ["Report", "Data"];
      //Number
      let number = getRandomInt(99);
      let word = indefinite_art(word_array);
  
      let sentence = `${selectArrayElement(intro_array)} showed ${word[0]} ${word[1]} by ${number}%`;
      results.push(sentence);
    }
  
    return results;
  }
  
  function getRandomInt(max) {
    return (1 + Math.random() * max).toFixed(2);
  };
  
  function selectArrayElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
  }
  
  function indefinite_art(word_array) {
    // Identify the indefinite article
    let word = selectArrayElement(word_array);
    let = first_letter = word.charAt(0);
    let filler
    if (["a", "e", "i", "o", "u"].includes(first_letter)){
      filler = "an";
    } else {
      filler = "a";
    }
    return [filler, word];
  }
  