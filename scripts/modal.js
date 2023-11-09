// when #map-img is clicked:
//     remove .hidden from #modal

$("#map-image").click(function() {
  console.log("map click works");
    $("#modal").removeClass("hidden");
  });

// when #close is clicked:
//     add .hidden to #modal

$("#close").click(function() {
  console.log("close click works");
    $("#modal").addClass("hidden");
  });
