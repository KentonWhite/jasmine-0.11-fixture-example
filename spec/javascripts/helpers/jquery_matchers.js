beforeEach(function() { 
	this.addMatchers({
		toBeSameJqueryObjectAs: function() {
		  if(!expected || !this.actual || this.actual.length != expected.length) {
		    return false;
		  } else {
		    for(var i = 0; i < expected.length; i++) {
		      if (this.actual.get(i) != expected.get(i)) {
		        return false;
		      }
		    }
		  }
		return true;			
		}
	});
	
	this.addMatchers({
		toNotBeSameJqueryObjectAs: function() {
		  if(!expected || !this.actual || this.actual.length != expected.length) {
				return false;
		  } else {
		    for(var i = 0; i < expected.length; i++) {
		      if (this.actual.get(i) == expected.get(i)) {
						return false;
		      }
		    }
		  }
		return true;			
		}
	});
	
	this.addMatchers({
		toBeCleared: function() {
		  var $form = this.actual;
		  expect($form).toBeSingleton();
		  var $textfields = $form.find('input[type=text]');
		  $textfields.each(function() {
		    expect($(this).val()).toEqual('');
		  });
		  var $textareas = $form.find('textarea');
		  $textareas.each(function() {
		    expect($(this).val()).toEqual('');
		  });			
		}
	}); 

	this.addMatchers({
		toBeSingleton: function() {
		  var $element = this.actual;
		  expect($element.length).toEqual(1);			
		}
	});

	this.addMatchers({
		toContainText: function() {
		  var actual = $(this.actual);
		  return actual.text().indexOf(expected) != -1			
		}
	});
	
	this.addMatchers({
		toNotBeChecked: function() {
		  var actual = $(this.actual);
		  return !actual.is(':checked')					
		}
	});
	
	this.addMatchers({
		toExist: function() {
		  return this.actual.length > 0;
		}
	});
	
	this.addMatchers({
		toNotExist: function() {
			return this.actual.length == 0;
		}
	});
	
	this.addMatchers({
		toContainSelector: function() {
		  var actual = $(this.actual);
		  var children = actual.find(expected);
		  return children.length > 0; 		
		}
	});
	
	this.addMatchers({
		toNotContainSelector: function() {
		  var actual = $(this.actual);
		  var children = actual.find(expected);
		  return children.length == 0;			
		}
	});
	
	this.addMatchers({
		toBeVisible: function() {
		  var actual = $(this.actual);
		  return actual.is(':visible');			
		}
	});
	
	this.addMatchers({
		toNotBeVisible: function() {
		  var actual = $(this.actual);
		  return !actual.is(':visible');			
		}
	});
	
	this.addMatchers({
		toBeEmpty: function() {
		  var actual = $(this.actual);
		  return actual.html() == "";			
		}
	});
	
	this.addMatchers({
		toNotBeEmpty: function() {
		  var actual = $(this.actual);
		  return actual.html() != "";			
		}
	});
	
	this.addMatchers({
		toHaveClass: function(expected) {
		  var actual = $(this.actual);
		  return actual.hasClass(expected);			
		}
	});

	this.addMatchers({
		toNotHaveClass: function(expected) {
		  var actual = $(this.actual);
		  return !actual.hasClass(expected);			
		}
	});
	
	this.addMatchers({
		toBeDisabled: function() {
		  var actual = $(this.actual);
		  return actual.is(":disabled");			
		}
	});
	
	this.addMatchers({
		toBeEnabled: function() {
		  var actual = $(this.actual);
		  return actual.is(":enabled");			
		}
	});

	this.addMatchers({
		toBeTag: function(tagName) {
		  var actual = $(this.actual);
		  var actualTagName = "your element";
		  if(actual.length > 0) {
		    actualTagName = actual.get(0).tagName.toLowerCase();
		  }
		  return actual.is(tagName);			
		}
	});
	
	this.addMatchers({
		toHaveAttribute: function(attr, value) {
		  var actual = $(this.actual);
		  var actualValue = actual.attr(attr);
		  return actualValue == value;			
		}
	});
	
});