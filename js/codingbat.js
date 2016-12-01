// .js code for the challenge page
// Written in a simple/primitive way

var re = new XMLHttpRequest();

// new ace-aware version
function sendCodeAce(){
  var data = 'id='   + encodeURIComponent(document.codeform.id.value) + '&' +
         'code=' + encodeURIComponent(document.ace_editor.getValue()) + '&' +
         'cuname=' + encodeURIComponent(document.codeform.cuname.value) + '&' +
         'owner=' + encodeURIComponent(document.codeform.owner.value)
  if (document.codeform.parent) {
    data +=  '&parent=' + encodeURIComponent(document.codeform.parent.value)
  } 
  if (document.codeform.outputonly.checked) {
    data += '&outputonly=1'
  }
  if (document.codeform.date) {
    data +=  '&date=' + encodeURIComponent(document.codeform.date.value)
  }
  if (document.codeform.expnext) {  // exp
    data +=  '&expnext=' + encodeURIComponent(document.codeform.expnext.value)
  }
  if (document.codeform.adate) {  // exp
    data +=  '&adate=' + encodeURIComponent(document.codeform.adate.value)
  }
  if(re.readyState > 0 && re.readyState < 4) {  // do nothing if already in flight
    return true;
  }
  re.open("POST", '/run', true);
  re.onreadystatechange = handleDone;  
  re.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  re.send(data);
}

// Send a remark string to /run, doing nothing with response
function sendRemark(remark){
  var data = 'id='   + encodeURIComponent(document.codeform.id.value) + '&' +
         'cuname=' + encodeURIComponent(document.codeform.cuname.value) + '&' +
         'code=&' + // empty code
         'owner=' + encodeURIComponent(document.codeform.owner.value) + '&' +
         'remark=' + encodeURIComponent(remark);
  if (document.codeform.date) {
    data +=  '&date=' + encodeURIComponent(document.codeform.date.value)
  }
  if (document.codeform.adate) {
    data +=  '&adate=' + encodeURIComponent(document.codeform.adate.value)
  }
  var req = new XMLHttpRequest();  // just local, no handler
  req.open("POST", '/run', true);
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.send(data);
}


// edit mode, send the edit data
function sendCode2(verb){
  // loop to encode whole form, leaves extra & at end on purpose
  var data = '';
  for(i=0; i<document.editform.elements.length; i++) {
    if (!document.editform.elements[i].disabled) {
    data += document.editform.elements[i].name + '=' +
      encodeURIComponent(document.editform.elements[i].value) + '&';
    }
  }
  data += 'verb=' + encodeURIComponent(verb);

  if(re.readyState > 0 && re.readyState < 4) {  // do nothing if already in flight
    return true;
  }
  re.open("POST", '/author', true);
  re.onreadystatechange = handleDone;  
  re.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //req.overrideMimeType("text/html");
  re.send(data);
}


// get back answer
function handleDone(){
  if(re.readyState == 1) {  // starting
    document.getElementById('results').innerHTML = 'Running code...';
  }
  else if(re.readyState == 4) {  // done
    console.log('test')
    document.getElementById('results').innerHTML = re.responseText.replace(new RegExp('class=no', 'g'), 'class=ok')
  }
}


// Put cursor blinking at the end of the last code line
function startCursor(editor, lang) {
  var i = editor.session.getLength() - 1;
  while (i >= 1) {
    var line = editor.session.getLine(i);
    if (lang == "java" && line.indexOf('}') != -1) { i--; break; }
    if (lang == "python" && line.length >= 2) break;
    i--;
  }

  if (i > 0) {
    // set cursor at end of line i
    var Range = ace.require("ace/range").Range;
    var line = editor.session.getLine(i);
    var range = new Range(i, line.length, i, line.length);
    editor.selection.setSelectionRange(range, false);
    editor.focus();
  }
}


// Blink the edit area cursor, handy after a button grabs focus
function focusEdit() {
  if (document.ace_editor) {
    document.ace_editor.focus();
  }
}


// GET requests to jam into divs
function getFrag(destid, path) {
  var oReq = new XMLHttpRequest();
  oReq.onload = function(e) {
    document.getElementById(destid).innerHTML=oReq.responseText;
  };
  oReq.open("GET", path);
  oReq.send();
}


// Modernized post to /runx
function sendModern(form, verb, donefn){
  var data = '';
  // hack: picks up ace_editor first as code=
  data = 'code=' + encodeURIComponent(document.ace_editor.getValue()) + '&' 
  // loop to encode whole form, leaves extra & at end on purpose
  for(i=0; i<form.elements.length; i++) {
    if (form.elements[i].name) {  // TODO I think ACE makes an empty elt in there
      data += form.elements[i].name + '=' +
        encodeURIComponent(form.elements[i].value) + '&';
    }
  }
  data += 'verb=' + encodeURIComponent(verb);
  //debugger;

  var oReq = new XMLHttpRequest();
  
  oReq.open('POST', '/runx');
  
  // TODO could have UI for these cases
  //oReq.addEventListener("error", transferFailed);
  //oReq.addEventListener("abort", transferCanceled);
  oReq.onload = donefn;  // this.responseText works in here
  
  oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  oReq.send(data);
}

// Caller specialized for the ChallengeX case
function sendX() {
  var form = document.codeform;  // works because name= set
  document.getElementById('results').innerHTML = '';  // OPTIONAL gives us sort of blink on run
  sendModern(form, 'run', function () {document.getElementById('results').innerHTML = this.responseText;} );
}

// Send with "show" verb
function sendShow() {
  var form = document.codeform;  // works because name= set
  document.getElementById('results').innerHTML = '';  // OPTIONAL gives us sort of blink on run
  sendModern(form, 'show', function () {document.getElementById('results').innerHTML = this.responseText;} );
}
