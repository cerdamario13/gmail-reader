function get_email_subject() {
  
    var sheet_id = "SHEET_ID";
    var sheet_name = "getSubject"
    var sheet = SpreadsheetApp.openById(sheet_id).getSheetByName(sheet_name);
  
    // Get the label by name
    var label_value = sheet.getRange("B2").getValue();
    var label = GmailApp.getUserLabelByName(label_value);
    // Get the threads for all emails in label
    var threads = label.getThreads();
  
    // Making array short for testing
    var slice_value = sheet.getRange("B3").getValue();
    if (slice_value == 'ALL'){
      threads = threads
    }
    else {
      threads = threads.slice(0, parseInt(slice_value));
    }
  
    // Regex to look for
    var regex_value = sheet.getRange("B4").getValue();
    var regExp = new RegExp(regex_value);
  
    //Iterate to get the subject from each email
  
    var subject_array = [];
    var values = [];
  
    for (var i = 0; i <= threads.length; i++){
      try{
        var subjects = threads[i].getMessages();
        var subject = subjects[0].getSubject();
        subject_array.push(subject);
  
        // Regex value to extract
        values.push(regExp.exec(subject_array[i])[0])
  
      }
      catch (err) {
        subject_array.push("");
      }
    }//outer loop
  
  
    Logger.log(values)
  }//main function
  
  
  
  
  