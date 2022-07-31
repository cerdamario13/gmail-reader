function get_email_subject() {
  
    var ss = SpreadsheetApp.getActiveSheet();
  
    // Get the label by name
    var label = GmailApp.getUserLabelByName('House Emails');
    // Get the threads for all emails in label
    var threads = label.getThreads();
  
    // Making array short for testing
    threads = threads.slice(0, 5);
  
    // Regex to look for
    var regExp = new RegExp(/\$\d+/);
  
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
  }//main function
  
  
  
  