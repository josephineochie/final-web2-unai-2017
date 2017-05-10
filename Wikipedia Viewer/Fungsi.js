$(document).ready(function() {
   $("#kosong").hide();
   
   $("#btn").click(function(e) {
      $("#list").html(""); 
      
      if ($("#kotak").val() === "") {
         $("#kosong").show(500);
      } else {
         $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&grnnamespace=0&prop=extracts&exlimit=max&explaintext&exintro&gsrsearch=" + $("#kotak").val() + "&callback=?", function(result) {
         if (result.hasOwnProperty("query")) {
            $.each(result.query.pages, function(key, page){
               var extract = page.extract.length > 464 ? page.extract.substring(0,464) + "..." : page.extract;
               $("#list").show(1000);
               $("#list").append('<li><h3><a target="_blank" href="http://en.wikipedia.org/?curid=' + page.pageid + '">' + page.title + '</a></h2>' + '<p>' + extract + '</p>' + '</li>');
               });
            }
          });
         $("#kosong").hide();
      }
      e.preventDefault();
   });
   $("#close").click(function() {
				$('#kotak').val("");
        		$('#list').html("");
			}); 
});

