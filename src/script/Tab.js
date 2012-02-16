(function() {
  var ccTab;

  window.ccTab = ccTab = (function() {

    function ccTab() {}

    ccTab.prototype._create = function() {
      var $element, $tactive, $tbar, $tcontent;
      $element = $(this.element);
      $tcontent = $element.find('div.TabContent');
      $tbar = $element.find('div.TabBar');
      $tactive = $element.find('div.TabActive');
      $tcontent.find('div').hide().filter(':first').show();
      return $tbar.find('a').click(function(e) {
        var $this;
        $this = $(this);
        $tcontent.find('div').hide();
        $tcontent.find('div').filter(this.hash).show();
        $tactive.find('a.TabActiveLink').text($this.text());
        $tactive.css({
          "left": $this.parent().position().left
        });
        return e.preventDefault();
      });
    };

    ccTab.prototype.destroy = function() {
      return $(this.element).find('div.TabBar a').unbind('click');
    };

    return ccTab;

  })();

  $.widget("cc.ccTab", new ccTab);

}).call(this);
