require(["gitbook", "jQuery"], function(gitbook, $) {

    gitbook.events.bind("page.change", function() {

    // Retreieve configuration
    var navbar = gitbook.state.config.pluginsConfig.navbar || {};

    var logo = navbar.logo;
    var menu = navbar.menu;

    var background = navbar.style.background;
    var height = navbar.style.height;

    // Adjust existing book elements
    $(".book-body").css("top", height + "px");
    $(".book-summary").css("top", height + "px");

    // Compose & inject navbar into book
    var $header = $("<header class=\"header-navbar\">" +
                      "<div class=\"container\">" +
                        "<div class=\"row\">" +
                          "<div class=\"logo-container\">" +
                            "<a href=\"" + logo.link + "\" class=\"logo-link\">" +
                              "<img src=\"" + logo.image + "\" alt=\"" + logo.alt + "\" class=\"logo\"/>" +
                            "</a>" +
                          "</div>" +
                          "<div class=\"menu-container\">" +
                            "<ul></ul>" +
                          "</div>" +
                        "</div>" +
                      "</div>" +
                    "</header>");

    $(".book-summary").before($header);

    for (var m = 0; m < menu.items.length; m++) {
      $(".menu-container ul").append("<li>" +
                                       "<a href=\"" + menu.items[m].link + "\">" +
                                         menu.items[m].text +
                                       "</a>" +
                                     "</li>");
    }

    
  });
});
