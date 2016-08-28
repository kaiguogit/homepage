$(function(){

  //filter exercises 
  $("#exercises .filters").on("click", "a", function(){
    event.preventDefault();
    var rows = $("#exercises tr");
    var filter = this.className;
    if(filter !== ""){
     filter = "." + filter; 
    }
    rows.each(function(i, row){
      var label = $(row).find("span"+filter);
      if(label.length > 0){
        $(row).removeClass("flippedup");
        $(row).show();
      }else{
        $(row).addClass("flippedup");
        setTimeout(function(){
          $(row).hide();
        }, 700);
      }
    });
  });
  
  //filter projects
  $("#projects .filters").on("click", "a", function(){
    event.preventDefault();
    var projects = $(".project");
    var filter = this.className;
    if(filter !== ""){
     filter = "." + filter; 
    }
    projects.each(function(i, project){
      var label = $(project).find("span"+filter);
      if(label.length > 0){
        $(project).removeClass("flippedup");
        $(project).show();
      }else{
        $(project).addClass("flippedup");
        setTimeout(function(){
          $(project).hide();
        }, 700);
      }
    });
  });
});