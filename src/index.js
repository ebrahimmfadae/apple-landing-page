$(function() {
  var apiURL =
    "https://itunes.apple.com/lookup?id={{ site.ios_app_id }}&callback=?";

  $.getJSON(apiURL, function(json) {
    if (json.results && json.results.length) {
      var appInfo = json.results[0];

      // Set favicon
      $('link[rel="shortcut icon"]').attr("href", appInfo.artworkUrl512);

      // Set page title using the iOS app ID if it is not set manually in _config.yml
      var $pageTitle = $(".page-title");
      if ($.trim($($pageTitle).text()).length == 0) {
        $($pageTitle).html(appInfo.trackName);
      }

      // Set large app icon using the iOS app ID if it is not set manually in _config.yml
      var $appIconLarge = $(".large-icon");
      if (!$appIconLarge.attr("src")) {
        $($appIconLarge).attr("src", appInfo.artworkUrl512);
      }

      // Set header app icon using the iOS app ID if it is not set manually in _config.yml
      var $appIconHeader = $(".header-icon");
      if (!$appIconHeader.attr("src")) {
        $($appIconHeader).attr("src", appInfo.artworkUrl512);
      }

      // Set app name using the iOS app ID if it is not set manually in _config.yml
      var $appName = $(".app-name");
      if ($.trim($($appName).text()).length == 0) {
        $($appName).html(appInfo.trackName);
      }

      var $headerName = $(".header-name");
      if ($.trim($($headerName).text()).length == 0) {
        $($headerName).html(appInfo.trackName);
      }

      // Set price using the iOS app ID if it is not set manually in _config.yml
      var $appPrice = $(".app-price");
      if ($.trim($($appPrice).text()).length == 0) {
        $($appPrice).html(appInfo.formattedPrice);
      }

      // Set App Store link using the iOS app ID if it is not set manually in _config.yml
      var $appStoreLink = $(".app-storelink");
      if ($.trim($appStoreLink.attr("href")).length == 0) {
        $($appStoreLink).attr("href", appInfo.trackViewUrl);
      }
    }
  });
});
