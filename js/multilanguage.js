const pagepath = "https://clever-mirzakhani-8e276f.netlify.app"

function insertHeader(type, depth) {
  var completePath = buildPath(depth);
  var html = "";
  html += '<div class="pos-f-t">';
  html += '  <div class="collapse" id="navbarToggleExternalContent">';
  html += '    <div class="bg-primary p-4">';
  // グループ名
  html += '      <h5 class="text-white h4">';
  html += '        <script>';
  html += '          ins(groupName.' + type + ');';
  html += '        </script>';
  html += '      </h5>';
  html += '      <span class=""></span>';
  html += '    </div>';
  html += '    <ul class="list-group list-group-flush">';
  html += '      <li class="list-group-item bg-primary"><script>ins(aboutus.' + type + ');</script></li>';
  html += '      <li class="list-group-item bg-primary"><script>ins(contactus.' + type + ');</script></li>';
  if (type != "jp") {
    html += '      <li class="list-group-item bg-primary"><img src="./' + completePath + 'images/index/language.svg"></img><script>ins(pageShowJp.' + type + ');</script></li>';
  }
  if (type != "en") {
    html += '      <li class="list-group-item bg-primary"><img src="./' + completePath + 'images/index/language.svg"></img><script>ins(pageShowEn.' + type + ');</script></li>';
  }
  if (type != "vn") {
    html += '      <li class="list-group-item bg-primary"><img src="./' + completePath + 'images/index/language.svg"></img><script>ins(pageShowVn.' + type + ');</script></li>';
  }
  html += '    </ul>';
  html += '  </div>';
  html += '  <nav class="navbar navbar-dark bg-primary">';
  html += '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">';
  html += '      <span class=""><svg class="bi bi-justify" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
  html += '          <path fill-rule="evenodd"';
  html += '            d="M2 12.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z"';
  html += '            clip-rule="evenodd" />';
  html += '';
  html += '    </button>';
  html += '    <!-- <span class="text-white">text</span> -->';
  html += '  </nav>';
  html += '</div>';
  document.write(html);
}

function insertFooter(type, depth) {
  var completePath = buildPath(depth);
  var html = "";
  html += '  <div class="jumbotron">';
  html += '    <ul class="list-group">';
  // 　日本語のページを表示
  html += '      <li class="list-group-item"><img src="./' + completePath + 'images/index/language.svg"></img><script>ins(pageShowJp.' + type + ');</script></li>';
  //  英語のページを表示
  html += '      <li class="list-group-item"><img src="./' + completePath + 'images/index/language.svg"></img><script>ins(pageShowEn.' + type + ');</script></li>';
  //  ベトナム語のページを表示
  html += '      <li class="list-group-item"><img src="./' + completePath + 'images/index/language.svg"></img><script>ins(pageShowVn.' + type + ');</script></li>';
  html += '    </ul>';
  html += '    <ul class="list-group">';
  html += '      <li class="list-group-item aboutus"><script>ins(aboutus.' + type + ');</script></li>';
  html += '      <li class="list-group-item donate"><script>ins(donate.' + type + ');</script></li>';
  html += '      <li class="list-group-item contactus"><script>ins(contactus.' + type + ');</script></li>';
  html += '    </ul>';
  html += '    <div class="copyright">';
  html += '      <a href="#"><script>ins(disclaimer.' + type + ');</script></a>';
  html += '      | copyright';
  html += '    </div>';
  html += '  </div>';
  document.write(html);
}

function headerAlert() {
  var html = "";
  // html += '  <div class="alert alert-warning alert01" role="alert">';
  // html += '    <svg class="bi bi-exclamation-triangle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
  // html += '      <path fill-rule="evenodd"';
  // html += '        d="M8.982 1.566a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0l.35-3.507A.905.905 0 008 5zm.002 6a1 1 0 100 2 1 1 0 000-2z"';
  // html += '        clip-rule="evenodd" />';
  // html += '    </svg>このページは作成中です。';
  // html += '  </div>';
  document.write(html);
}

function insertReccomentdation(type, depth) {
  var completePath = buildPath(depth);
  var html = "";
  html += ' <div class="listContent">';
  html += '   <ul class="list-group">';
  html += '     <li class="list-group-item"><img src="./' + completePath + 'images/events/allevents.svg"> <script>ins(allEventsInfo.' + type + ');</script></li>';
  // html += '     <li class="list-group-item"><img src="./' + completePath + 'images/pastevents.svg"> <script>ins(allPastEvents.' + type + ');</script></li>';

  html += '     <li class="list-group-item"><img src="./' + completePath + 'images/info/alltopicks.svg"> <script>ins(allUsefulInfo.' + type + ');</script></li>';
  html += '   </ul>';
  html += ' </div>';
  document.write(html);
}




function buildPath(depth) {
  var tmp = "";
  for (i = 0; i < depth; i++) {
    tmp += "../";
  }
  return tmp;
}
