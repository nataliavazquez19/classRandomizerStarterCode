$(document).ready(function(){
var Code2college_Educators = ["Jon ", "stephanie ", "matt ", "chris "];
var Code2college_Students =["sophie ","andrea ","vanessa ", "cindy ", "marlene ", "yaz "];

$("#teacherButton").click(function(){
    var teachername = Code2college_Educators[0]
 teachername=Math.floor(Math.random()*Code2college_Educators.length);
 $("#teacherDisplay").append(Code2college_Educators[teachername])
});
$("#studentButton").click(function(){
     var studentname = Code2college_Students[0]
 studentname=Math.floor(Math.random()*Code2college_Students.length);
 $("#studentDisplay").append(Code2college_Students[studentname])
});
$("#text").click(function(){
    Code2college_Students.push($("#input").val());
});

});
