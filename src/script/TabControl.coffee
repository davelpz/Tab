window.TabControl = class TabControl
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
									  .addClass(@css.TabMenu)
									  .append(tempLeft)
									  .append(tempMiddle)
									  .append(tempRight)
								 
			TabHead.append(tempTab)
			
			$(@element[0].parentNode).find('#'+ TabID).attr( style: "display:none" )
													  .addClass(@css.TabContent)
		
		Line = ($ '<div/>').addClass(@css.Line).addClass(this.options.Color)        
		
		($ @element).addClass(@css.WrapperTabControl)
					.attr(id : @options.Name)  
					.append(TabHead)
					.append(Line)
		
		$(@element[0].parentNode).find( '#'+ @options.TabIDs[0]).attr( style: "display:block" ).addClass(@css.ActiveTabContent)
		$(@element[0].parentNode).addClass(@css.TabWrapper)
		
		
	_init: ->
	
		($ '#'+@options.Name+" ." +@css.TabMenu).click (event) =>
			#hide the previous tab contents and remove active classes in tab widget 
			$(@element[0].parentNode).find( '.'+ @css.ActiveTabContent).attr( style: "display:none" ).removeClass(@css.ActiveTabContent)
			$(@element[0].parentNode).find( '.'+ @css.ActiveTabLeft).removeClass(@css.ActiveTabLeft).addClass(@css.InActiveTabLeft)
			$(@element[0].parentNode).find( '.'+ @css.ActiveTabMiddle).removeClass(@css.ActiveTabMiddle).addClass(@css.InActiveTabMiddle)
			$(@element[0].parentNode).find( '.'+ @css.ActiveTabRight).removeClass(@css.ActiveTabRight).addClass(@css.InActiveTabright)
		
			#show the selected tab contents and add active classes in tab widget 
			HtmlTabID = @id.substring(0, @id.indexOf('_')) 																					# manual changes in javascript!!
			$(@element[0].parentNode).find( '#' + HtmlTabID ).attr( style: "display:block" ).addClass(@css.ActiveTabContent)                                                # manual changes in javascript!!
			@childNodes[0].className = @css.ActiveTabLeft
			@childNodes[1].className = @css.ActiveTabMiddle
			@childNodes[2].className = @css.ActiveTabRight
		
		
	options:
		Name: "Default"
		TabIDs : ["undefined"]
		TabTitles: ["undefined"]
		Color : "Orange"
		

	css:
		TabWrapper : 'ui-tab-widget-wrapper'
		WrapperTabControl: 'ui-tab-widget'
		TabHead: "ui-tab-menu-wrapper"
		TabMenu: 'ui-tab-menu'
		ActiveTab: 'ui-menu-active'
		ActiveTabLeft: 'activeLeft'
		ActiveTabMiddle: 'activeMiddle'
		ActiveTabRight: 'activeRight'
		InActiveTabLeft: 'inactiveLeft'
		InActiveTabMiddle: 'inactiveMiddle'
		InActiveTabRight: 'inactiveRight'
		Line: 'ui-tab-line'
		TabContent: 'ui-tab-content'
		ActiveTabContent: 'activeTabContent'

			
$.widget "vdms.TabControl", new TabControl