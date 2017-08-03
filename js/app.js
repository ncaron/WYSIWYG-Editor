var App = {
  chooseCommand: function(target) {
    var command = target.id;

    if (command === 'createLink') {
      this.createLink();
    } else {
      document.execCommand(command);
    }
  },
  createLink: function() {
    var url = prompt('Enter the URL:');

    document.execCommand('createLink', false, url);
  },
  toggleButtons: function() {
    var isBold = document.queryCommandValue('bold') === 'true';
    var isItalic = document.queryCommandValue('italic') === 'true';
    var isUnderline = document.queryCommandValue('underline') === 'true';
    var isStrikethrough = document.queryCommandValue('strikethrough') === 'true';
    var isSubscript = document.queryCommandValue('subscript') === 'true';
    var isSuperscript = document.queryCommandValue('superscript') === 'true';
    var isInsertOrderedList = document.queryCommandValue('insertOrderedList') === 'true';
    var isInsertUnorderedList = document.queryCommandValue('insertUnorderedList') === 'true';
    var isJustifyLeft = document.queryCommandValue('justifyLeft') === 'true';
    var isJustifyCenter = document.queryCommandValue('justifyCenter') === 'true';
    var isJustifyRight = document.queryCommandValue('justifyRight') === 'true';
    var isJustifyFull = document.queryCommandValue('justifyFull') === 'true';
    
    document.getElementById('bold').classList.toggle('active', isBold);
    document.getElementById('italic').classList.toggle('active', isItalic);
    document.getElementById('underline').classList.toggle('active', isUnderline);
    document.getElementById('strikethrough').classList.toggle('active', isStrikethrough);
    document.getElementById('subscript').classList.toggle('active', isSubscript);
    document.getElementById('superscript').classList.toggle('active', isSuperscript);
    document.getElementById('insertOrderedList').classList.toggle('active', isInsertOrderedList);
    document.getElementById('insertUnorderedList').classList.toggle('active', isInsertUnorderedList);
    document.getElementById('justifyLeft').classList.toggle('active', isJustifyLeft);
    document.getElementById('justifyCenter').classList.toggle('active', isJustifyCenter);
    document.getElementById('justifyRight').classList.toggle('active', isJustifyRight);
    document.getElementById('justifyFull').classList.toggle('active', isJustifyFull);
  },
  bind: function() {
    document.addEventListener('click', function(e) {
      e.preventDefault();

      if (e.target.tagName === 'BUTTON') {
        document.getElementById('text-box').focus();
        this.chooseCommand(e.target);
        this.toggleButtons();
      }
    }.bind(this));

    document.addEventListener('selectionchange', function(e) {
      this.toggleButtons();
    }.bind(this));
  },
  init: function() {
    this.bind();
  }
};

App.init();