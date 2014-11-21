$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("jawbone.js",function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
});