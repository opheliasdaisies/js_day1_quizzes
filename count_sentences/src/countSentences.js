function countSentences(str) {
  if (str.indexOf("." || "?" || "!") == -1){
    return 0;
  } else {
    return str.split("." || "?" || "!").length;
  }
}