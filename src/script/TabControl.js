(function () {

    var TabControl;

    window.TabControl = TabControl = (function () {

        function TabControl() { }

        TabControl.prototype._create = function () {
            var Line, TabHead, TabID, divs, tempLeft, tempMiddle, tempRight, tempTab, _i, _j, _k, _len, _len2, _len3, _ref, _ref2, _ref3;
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
                }).addClass(this.css.TabMenu).append(tempLeft).append(tempMiddle).append(tempRight);
                TabHead.append(tempTab);
                $(this.element[0].parentNode).find('#' + TabID).attr({
                    style: "display:none"
                }).addClass(this.css.TabContent);
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

        TabControl.prototype._init = function () {
            var _this = this;
            return ($('#' + this.options.Name + " ." + this.css.TabMenu)).click(function (event) {
                var HtmlTabID;
                $(_this.element[0].parentNode).find('.' + _this.css.ActiveTabContent).attr({
                    style: "display:none"
                }).removeClass(_this.css.ActiveTabContent);
                $(_this.element[0].parentNode).find('.' + _this.css.ActiveTabLeft).removeClass(_this.css.ActiveTabLeft).addClass(_this.css.InActiveTabLeft);
                $(_this.element[0].parentNode).find('.' + _this.css.ActiveTabMiddle).removeClass(_this.css.ActiveTabMiddle).addClass(_this.css.InActiveTabMiddle);
                $(_this.element[0].parentNode).find('.' + _this.css.ActiveTabRight).removeClass(_this.css.ActiveTabRight).addClass(_this.css.InActiveTabRight);
                HtmlTabID = this.id.substring(0, this.id.indexOf('_'));
                $(_this.element[0].parentNode).find('#' + HtmlTabID).attr({
                    style: "display:block"
                }).addClass(_this.css.ActiveTabContent);
                this.childNodes[0].className = _this.css.ActiveTabLeft;
                this.childNodes[1].className = _this.css.ActiveTabMiddle;
                return this.childNodes[2].className = _this.css.ActiveTabRight;
            });
        };

        TabControl.prototype.options = {
            Name: "Default",
            TabIDs: ["undefined"],
            TabTitles: ["undefined"],
            Color: "Orange"
        };

        TabControl.prototype.css = {
            TabWrapper: 'ui-tab-widget-wrapper',
            WrapperTabControl: 'ui-tab-widget',
            TabHead: "ui-tab-menu-wrapper",
            TabMenu: 'ui-tab-menu',
            ActiveTab: 'ui-menu-active',
            ActiveTabLeft: 'activeLeft',
            ActiveTabMiddle: 'activeMiddle',
            ActiveTabRight: 'activeRight',
            InActiveTabLeft: 'inactiveLeft',
            InActiveTabMiddle: 'inactiveMiddle',
            InActiveTabRight: 'inactiveRight',
            Line: 'ui-tab-line',
            TabContent: 'ui-tab-content',
            ActiveTabContent: 'activeTabContent'
        };

        return TabControl;

    })();

    $.widget("vdms.TabControl", new TabControl);

}).call(this);