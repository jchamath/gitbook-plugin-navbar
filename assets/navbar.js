require(['gitbook', 'jQuery'], function(gitbook, $) {

    gitbook.events.bind("page.change", function() {

    // Retreieve configuration
    var navbar = gitbook.state.config.pluginsConfig.navbar || {};

    var height = navbar.style.height;

    // Adjust existing book elements
    $('.book-body').css('top', height + 'px');
    $('.book-summary').css('top', height + 'px');

    // Compose navbar elements
    var $header = $('<header>This be header</header>');

    // Inject navbar into book
    $('.book-summary').before($header);
  });
});
