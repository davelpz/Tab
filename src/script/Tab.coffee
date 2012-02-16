window.ccTab = class ccTab
	_create: -> 
		$element = $(this.element)
		$tcontent = $element.find('div.TabContent')
		$tbar = $element.find('div.TabBar')
		$tactive = $element.find('div.TabActive')

		$tcontent.find('div').hide().filter(':first').show()

		$tbar.find('a').click((e)->
			$this=$(this)
			$tcontent.find('div').hide()
			$tcontent.find('div').filter(this.hash).show()
			$tactive.find('a.TabActiveLink').text($this.text())
			$tactive.css( {"left": $this.parent().position().left})
			e.preventDefault()
		)

	destroy: ->
		$(this.element).find('div.TabBar a').unbind('click')
		
		
$.widget "cc.ccTab", new ccTab