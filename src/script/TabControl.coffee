window.ccTabControl = class ccTabControl
	_create: -> 
		
		TabHead = ($ '<div/>').attr(id : "TabHead")  
							  .addClass(@css.TabHead)
		
		if @options.TabIDs[0] == "undefined"
			for divs in $(@element[0].parentNode)[0].children
				if _i>0 then @options.TabIDs[_i-1] = $(@element[0].parentNode)[0].children[_i].id
		
		if @options.TabTitles[0] == "undefined"
			for divs in $(@element[0].parentNode)[0].children
				if _j>0 then @options.TabTitles[_j-1] = $(@element[0].parentNode)[0].children[_j].title
		
		for TabID in @options.TabIDs
			
			if _k == 0
				tempLeft = ($ '<div/>').attr(id : TabID + "_L").addClass(@css.ActiveTabLeft)
				tempMiddle = ($ '<div/>').attr(id : TabID + "_M" ).text(@options.TabTitles[_k]).addClass(@css.ActiveTabMiddle)
				tempRight =($ '<div/>').attr(id : TabID + "_R").addClass(@css.ActiveTabRight)
			else		
				tempLeft = ($ '<div/>').attr(id : TabID + "_L").addClass(@css.InActiveTabLeft)
				tempMiddle = ($ '<div/>').attr(id : TabID + "_M" ).text(@options.TabTitles[_k]).addClass(@css.InActiveTabMiddle)
				tempRight =($ '<div/>').attr(id : TabID + "_R").addClass(@css.InActiveTabRight)
								 
			tempTab = ($ '<div/>').attr(id : TabID + "_TabMenu")
								  .attr(title : _k)
									  .addClass(@css.TabMenu)
									  .append(tempLeft)
									  .append(tempMiddle)
									  .append(tempRight)
								 
			TabHead.append(tempTab)
			
			$(@element[0].parentNode).find('#'+ TabID).attr( style: "display:none" )
													  .addClass(@css.TabContent)
		
		if @options.URLs[0] == "undefined"
			for TabIDs in @options.TabIDs
				@options.URLs[_l] =  '#'+@options.TabIDs[_l]
		else 
			for TabIDs in @options.TabIDs
				if @options.URLs[_m] =="" then @options.URLs[_m] =  '#'+@options.TabIDs[_m] 
				
				
		
			
		Line = ($ '<div/>').addClass(@css.Line).addClass(this.options.Color)        
		
		($ @element).addClass(@css.WrapperTabControl)
					.attr(id : @options.Name)  
					.append(TabHead)
					.append(Line)
		
		$(@element[0].parentNode).find( '#'+ @options.TabIDs[0]).attr( style: "display:block" ).addClass(@css.ActiveTabContent)
		$(@element[0].parentNode).addClass(@css.TabWrapper)
		
		
	_init: ->
		me = this
		($ '#'+@options.Name+" ." +@css.TabMenu).click (event) ->
			#hide the previous tab contents and remove active classes in tab widget 
			$(me.element[0].parentNode).find( '.'+ me.css.ActiveTabContent).attr( style: "display:none" ).removeClass(me.css.ActiveTabContent)
			$(me.element[0].parentNode).find( '.'+ me.css.ActiveTabLeft).removeClass(me.css.ActiveTabLeft).addClass(me.css.InActiveTabLeft)
			$(me.element[0].parentNode).find( '.'+ me.css.ActiveTabMiddle).removeClass(me.css.ActiveTabMiddle).addClass(me.css.InActiveTabMiddle)
			$(me.element[0].parentNode).find( '.'+ me.css.ActiveTabRight).removeClass(me.css.ActiveTabRight).addClass(me.css.InActiveTabRight)
		
			#show the selected tab contents and add active classes in tab widget 
			HtmlTabID = this.id.substring(0, this.id.indexOf('_')) 		
			$(me.element[0].parentNode).find( '#' + HtmlTabID ).attr( style: "display:block" ).addClass(me.css.ActiveTabContent)
			this.childNodes[0].className = me.css.ActiveTabLeft
			this.childNodes[1].className = me.css.ActiveTabMiddle
			this.childNodes[2].className = me.css.ActiveTabRight
			window.location = me.options.URLs[this.attributes[1].value]
		
	options:
		Name: "Default"
		TabIDs : ["undefined"]
		TabTitles: ["undefined"]
		URLs: ["undefined"]
		Color : "Orange"
		

	css:
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
        ActiveTabContent: 'emptyDummy'  #where is this coming from jquery???

			
$.widget "cc.ccTabControl", new ccTabControl