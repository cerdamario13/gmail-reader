function menu() {

    var menuEntry = [
      {name: "Get Email Subject", functionName: "get_email_subject"},
    ];
  
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    sheet.addMenu("Get Gmail Data", menuEntry);
  
  
  } //main function brace
  