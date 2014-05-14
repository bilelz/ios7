$(document).ready(function() {	

var myScroll;
var point, pointStartX, pointStartY, deltaX, deltaY;
	myScroll = new IScroll('#wrapper', {
		scrollX: true,
		scrollY: false,
		click : true,
		eventPassthrough: true,
		preventDefault: false,
		momentum: false,
		snap: true,
		snapSpeed: 400,
		keyBindings: true,
		indicators: {
			el: document.getElementById('indicator'),
			resize: false
		}
	});
	
	$("#home").click(function(){ myScroll.goToPage(0, 0, 1000);});
	$("#prev").click(function(){ myScroll.prev(1000); });
	$("#next").click(function(){ myScroll.next(1000); });
	
	//drag
	
	
});

// Almost final example
(function() {
  var cols_ = document.querySelectorAll('.app-btn[draggable]');
  var dragSrcEl_ = null;

  this.handleDragStart = function(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);

    dragSrcEl_ = this;

    this.style.opacity = '0.4';

    // this/e.target is the source node.
    this.addClassName('moving');
  };

  this.handleDragOver = function(e) {
    if (e.preventDefault) {
      e.preventDefault(); // Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
  };

  this.handleDragEnter = function(e) {
    this.addClassName('over');
  };

  this.handleDragLeave = function(e) {
    // this/e.target is previous target element.

    this.removeClassName('over');
  };

  this.handleDrop = function(e) {
    // this/e.target is current target element.

    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }

    // Don't do anything if we're dropping on the same column we're dragging.
    if (dragSrcEl_ != this) {
    	//dragSrcEl_.innerHTML = this.innerHTML;
      //this.innerHTML = e.dataTransfer.getData('text/html');
    	
    	
    	var tmp = dragSrcEl_.outerHTML;
      	dragSrcEl_.outerHTML = this.outerHTML;
      	this.outerHTML = tmp;
      	
    }

    return false;
  };

  this.handleDragEnd = function(e) {
    // this/e.target is the source node.
    this.style.opacity = '1';

    [].forEach.call(cols_, function (col) {
      col.removeClassName('over');
      col.removeClassName('moving');
    });
  };

  [].forEach.call(cols_, function (col) {
    col.setAttribute('draggable', 'true');  // Enable columns to be draggable.
    col.addEventListener('dragstart', this.handleDragStart, false);
    col.addEventListener('dragenter', this.handleDragEnter, false);
    col.addEventListener('dragover', this.handleDragOver, false);
    col.addEventListener('dragleave', this.handleDragLeave, false);
    col.addEventListener('drop', this.handleDrop, false);
    col.addEventListener('dragend', this.handleDragEnd, false);
  });
})();


// Using this polyfill for safety.
Element.prototype.hasClassName = function(name) {
  return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(this.className);
};

Element.prototype.addClassName = function(name) {
  if (!this.hasClassName(name)) {
    this.className = this.className ? [this.className, name].join(' ') : name;
  }
};

Element.prototype.removeClassName = function(name) {
  if (this.hasClassName(name)) {
    var c = this.className;
    this.className = c.replace(new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)", "g"), "");
  }
};