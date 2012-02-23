(function() {
  var ccTabControl;

  ﻿window.ccTabControl = ccTabControl = (function() {

    function ccTabControl() {}

    ccTabControl.prototype._create = function() {
      var Line, TabHead, TabID, TabIDs, divs, tempLeft, tempMiddle, tempRight, tempTab, _i, _j, _k, _l, _len, _len2, _len3, _len4, _len5, _m, _ref, _ref2, _ref3, _ref4, _ref5;
      TabHead = ($('<div/>')).attr({
        id: "TabHead"
      }).addClass(this.css.TabHead);
      if (this.options.TabIDs[0] === "undefined") {
        _ref = $(this.element[0].parentNode)[0].children;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          divs = _ref[_i];
          if (_i > 0) {
            this.options.TabIDs[_i - 1] = $(this.element[0].parentNode)[0].children[_i].id;
          }
        }
      }
      if (this.options.TabTitles[0] === "undefined") {
        _ref2 = $(this.element[0].parentNode)[0].children;
        for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
          divs = _ref2[_j];
          if (_j > 0) {
            this.options.TabTitles[_j - 1] = $(this.element[0].parentNode)[0].children[_j].title;
          }
        }
      }
      _ref3 = this.options.TabIDs;
      for (_k = 0, _len3 = _ref3.length; _k < _len3; _k++) {
        TabID = _ref3[_k];
        if (_k === 0) {
          tempLeft = ($('<div/>')).attr({
            id: TabID + "_L"
          }).addClass(this.css.ActiveTabLeft);
          tempMiddle = ($('<div/>')).attr({
            id: TabID + "_M"
          }).text(this.options.TabTitles[_k]).addClass(this.css.ActiveTabMiddle);
          tempRight = ($('<div/>')).attr({
            id: TabID + "_R"
          }).addClass(this.css.ActiveTabRight);
        } else {
          tempLeft = ($('<div/>')).attr({
            id: TabID + "_L"
          }).addClass(this.css.InActiveTabLeft);
          tempMiddle = ($('<div/>')).attr({
            id: TabID + "_M"
          }).text(this.options.TabTitles[_k]).addClass(this.css.InActiveTabMiddle);
          tempRight = ($('<div/>')).attr({
            id: TabID + "_R"
          }).addClass(this.css.InActiveTabRight);
        }
        tempTab = ($('<div/>')).attr({
          id: TabID + "_TabMenu"
        }).attr({
          title: _k
        }).addClass(this.css.TabMenu).append(tempLeft).append(tempMiddle).append(tempRight);
        TabHead.append(tempTab);
        $(this.element[0].parentNode).find('#' + TabID).attr({
          style: "display:none"
        }).addClass(this.css.TabContent);
      }
      if (this.options.URLs[0] === "undefined") {
        _ref4 = this.options.TabIDs;
        for (_l = 0, _len4 = _ref4.length; _l < _len4; _l++) {
          TabIDs = _ref4[_l];
          this.options.URLs[_l] = '#' + this.options.TabIDs[_l];
        }
      } else {
        _ref5 = this.options.TabIDs;
        for (_m = 0, _len5 = _ref5.length; _m < _len5; _m++) {
          TabIDs = _ref5[_m];
          if (this.options.URLs[_m] === "") {
            this.options.URLs[_m] = '#' + this.options.TabIDs[_m];
          }
        }
      }
      Line = ($('<div/>')).addClass(this.css.Line).addClass(this.options.Color);
      ($(this.element)).addClass(this.css.WrapperTabControl).attr({
        id: this.options.Name
      }).append(TabHead).append(Line);
      $(this.element[0].parentNode).find('#' + this.options.TabIDs[0]).attr({
        style: "display:block"
      }).addClass(this.css.ActiveTabContent);
      return $(this.element[0].parentNode).addClass(this.css.TabWrapper);
    };

    ccTabControl.prototype._init = function() {
      var me;
      me = this;
      return ($('#' + this.options.Name + " ." + this.css.TabMenu)).click(function(event) {
        var HtmlTabID;
        $(me.element[0].parentNode).find('.' + me.css.ActiveTabContent).attr({
          style: "display:none"
        }).removeClass(me.css.ActiveTabContent);
        $(me.element[0].parentNode).find('.' + me.css.ActiveTabLeft).removeClass(me.css.ActiveTabLeft).addClass(me.css.InActiveTabLeft);
        $(me.element[0].parentNode).find('.' + me.css.ActiveTabMiddle).removeClass(me.css.ActiveTabMiddle).addClass(me.css.InActiveTabMiddle);
        $(me.element[0].parentNode).find('.' + me.css.ActiveTabRight).removeClass(me.css.ActiveTabRight).addClass(me.css.InActiveTabRight);
        HtmlTabID = this.id.substring(0, this.id.indexOf('_'));
        $(me.element[0].parentNode).find('#' + HtmlTabID).attr({
          style: "display:block"
        }).addClass(me.css.ActiveTabContent);
        this.childNodes[0].className = me.css.ActiveTabLeft;
        this.childNodes[1].className = me.css.ActiveTabMiddle;
        this.childNodes[2].className = me.css.ActiveTabRight;
        return window.location = me.options.URLs[this.attributes[1].value];
      });
    };

    ccTabControl.prototype.options = {
      Name: "Default",
      TabIDs: ["undefined"],
      TabTitles: ["undefined"],
      URLs: ["undefined"],
      Color: "Orange"
    };

    ccTabControl.prototype.css = {
      TabWrapper: 'ccTabControl-widget-wrapper',
      WrapperTabControl: 'ccTabControl-widget',
      TabHead: "ccTabControl-menu-wrapper",
      TabMenu: 'ccTabControl-menu',
      ActiveTabLeft: 'ccTabControl-activeLeft',
      ActiveTabMiddle: 'ccTabControl-activeMiddle',
      ActiveTabRight: 'ccTabControl-activeRight',
      InActiveTabLeft: 'ccTabControl-inactiveLeft',
      InActiveTabMiddle: 'ccTabControl-inactiveMiddle',
      InActiveTabRight: 'ccTabControl-inactiveRight',
      Line: 'ccTabControl-line',
      TabContent: 'ccTabControl-content',
      ActiveTabContent: 'emptyDummy'
    };

    return ccTabControl;

  })();

  $.widget("cc.ccTabControl", new ccTabControl);

}).call(this);
