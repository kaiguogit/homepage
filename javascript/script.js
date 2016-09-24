$(function(){

  //filter exercises 
  $("#exercises .filter").on("click", "a", function(){
    event.preventDefault();
    var rows = $("#exercises tbody > tr");

    //get filter name from data-filter attribute, concat with . in front of it
    //eg. data-filter="react"
    //filter = ".react"
    var filter = $(this).data("filter");
    if(filter !== ""){
      filter = "." + filter; 
    }
    $("#exercises .filter>li>a").removeClass("filter-selected");
    $(this).addClass("filter-selected");

    rows.each(function(i, row){

      //Find span with class name email to filter
      //Eg. span.react 
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
  $("#projects .filter").on("click", "a", function(){
    event.preventDefault();
    var projects = $(".project");

    //get filter name from data-filter attribute, concat with . in front of it
    //eg. data-filter="react"
    //filter = ".react"
    var filter = $(this).data("filter");
    if(filter !== ""){
      filter = "." + filter; 
    }

    $("#projects .filter>li>a").removeClass("filter-selected");
    $(this).addClass("filter-selected");

    projects.each(function(i, project){
      //Find span with class name email to filter
      //Eg. span.react 
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

  //Wakeup heroku apps
  function wakeupHerokuApps(){
    $('a[href*="kaiguo.ca"]').each(function(i,a){
      $.ajax({
        url: $(a).attr("href"), 
        method: "get",
        dataType: "json"
      });
    });
  }
  wakeupHerokuApps();
});