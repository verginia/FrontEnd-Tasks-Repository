function checkType() {
    let char = document.getElementById("charInput").value;
    let type;
    
    if (!isNaN(char)) {
        if(char.toString().length <= 15){
            type = "number";
        }else{
            type = "bigint";
        }
    } else if (char === "true" || char === "false") {
      type = "boolean";
    } else if (char === "null") {
      type = "null";
    } else if (char === "undefined") {
      type = "undefined";
    } else if (typeof char === "symbol") {
      type = "symbol";
    } else if (typeof char === "string") {
        type = "string";
    } else {
      type = "unknown";
    }
    
    document.getElementById("result").innerText = "Primitive type of '" + char + "' is: " + type;
  }