function a(instance, properties, context) {
  instance.publishState("number_of_pages", properties.data_source.length());
  var magazinePages = properties.data_source.get(
    0,
    properties.data_source.length()
  );
  var magazineImage = properties.image;
  var pageID = properties.id;

  const magazine = document.getElementsByClassName("magazine")[0];

  for (let i = 0; i < magazinePages.length; i++) {
    var image = magazinePages[i].get(magazineImage);
    var id = magazinePages[i].get(pageID);

    var pageHTML = `<div style="background-image:url(${image}); background-size: 100% 100%"></div>`;

    //$('.magazine').turn('addPage', element[pageHTML,i+1])
    magazine.innerHTML += pageHTML;
  }

  function loadApp() {
    $(".magazine").turn({
      width: properties.bubble.width(),
      height: Math.min(properties.bubble.height(), properties.bubble.width()),
      gradients: true,
      acceleration: true,
      autoCenter: true,
    });
    $(window)
      .resize(function () {
        // Ensure resizeViewport is called only after successful initialization
        if ($(".magazine").data("turn")) {
          // Check if 'turn' is initialized
          console.log("Calling resizeViewport");
          resizeViewport();
        }
      })
      .bind("orientationchange", function () {
        // Same check for orientation change
        if ($(".magazine").data("turn")) {
          console.log("Calling resizeViewport");
          resizeViewport();
        }
      });

    $(document).keydown(function (e) {
      var previous = 37,
        next = 39,
        esc = 27;

      switch (e.keyCode) {
        case previous:
          // left arrow
          $(".magazine").turn("previous");
          e.preventDefault();

          break;
        case next:
          //right arrow
          $(".magazine").turn("next");
          e.preventDefault();

          break;
        case esc:
          $(".magazine-viewport").zoom("zoomOut");
          e.preventDefault();

          break;
      }
    });

    //     function zoomTo(event) {
    //
    // 		setTimeout(function() {
    // 			if ($('.magazine-viewport').data().regionClicked) {
    // 				$('.magazine-viewport').data().regionClicked = false;
    // 			} else {
    // 				if ($('.magazine-viewport').zoom('value')==1) {
    // 					$('.magazine-viewport').zoom('zoomIn', event);
    // 				} else {
    // 					$('.magazine-viewport').zoom('zoomOut');
    // 				}
    // 			}
    // 		}, 1);
    //
    // }
  }

  loadApp();

  var css = `

.magazine-viewport {
	position:absolute;
	margin:auto;
	width: 100%;
}

.exit-message{
	position: absolute;
	top:10px;
	left:0;
	width:100%;
	height:40px;
	z-index:10000;
}

.exit-message > div{
	width:140px;
	height:30px;
	margin:auto;
	background:rgba(0,0,0,0.5);
	text-align:center;
	font:12px arial;
	line-height:30px;
	color:white;
	-webkit-border-radius:10px;
	-moz-border-radius:10px;
	-ms-border-radius:10px;
	-o-border-radius:10px;
	border-radius:10px;
}


.zoom-icon{
	position:absolute;
	z-index:1000;
	width:22px;
	height:22px;
	top:10px;
	right:10px;
	background-image:url(https://icons-for-free.com/iconfiles/png/512/zoom+icon-1320196833813829308.png);
	background-size: 100% 100%;
}

.zoom-icon-in{
	background-position:0 0;
	cursor: pointer;
}

.zoom-icon-in.zoom-icon-in-hover{
	background-position:-22px 0;
	cursor: pointer;
}

.zoom-icon-out{
	background-position:-44px 0;
}

.zoom-icon-out.zoom-icon-out-hover{
	background-position:-66px 0;
	cursor: pointer;
}



`;

  $("<style>" + css + "</style>").appendTo("head");
}
