const pagepath = "https://vietnam-nagoya.work"

function insertHeader2(type, depth) {
  var completePath = buildPath(depth);
  var html = "";
  html += '<div class="pos-f-t">';
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
    html += '      <li class="list-group-item bg-primary"><script>ins(pageShowJp.' + type + ');</script></li>';
  }
  if (type != "en") {
    html += '      <li class="list-group-item bg-primary"></img><script>ins(pageShowEn.' + type + ');</script></li>';
  }
  if (type != "vn") {
    html += '      <li class="list-group-item bg-primary"></img><script>ins(pageShowVn.' + type + ');</script></li>';
  }
  html += '    </ul>';
  html += '  </div>';

  html += '</div>';
  document.write(html);
}

function insertFooter(type, depth) {
  var completePath = buildPath(depth);
  var html = "";
  html += '  <div class="jumbotron">';
  html += '    <ul class="list-group">';
  // 　日本語のページを表示
  html += '      <li class="list-group-item"><script>ins(pageShowJp.' + type + ')</script></li>';
  //  英語のページを表示
  html += '      <li class="list-group-item"><script>ins(pageShowEn.' + type + ')</script></li>';
  //  ベトナム語のページを表示
  html += '      <li class="list-group-item"><script>ins(pageShowVn.' + type + ')</script></li>';
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
  html += '     <li class="list-group-item"><script>ins(allEventsInfo.' + type + ');</script></li>';
  // html += '     <li class="list-group-item"><img src="./' + completePath + 'images/pastevents.svg"> <script>ins(allPastEvents.' + type + ');</script></li>';

  html += '     <li class="list-group-item"><script>ins(allUsefulInfo.' + type + ');</script></li>';
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

window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
  // spinner.remove();
}

function insertLoading() {
  var html = "";
  html += '<div id="loading">';
  html += '  <div class="spinner">';
  html += '    <div class="dot1"></div>';
  html += '    <div class="dot2"></div>';
  html += '  </div>';
  html += '  <div class="loadingText">';
  html += '    <script> ins(groupName.jp) </script>';
  html += '  </div>';
  html += '</div>';
  document.write(html);
}

function insertHeader(type, depth) {
  var html = "";
  html += '<link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">';
  html += '<nav class="navbar navbar-expand-lg navbar-dark bg-primary">';
  html += '  <a class="navbar-brand" href="#"><script>ins(groupName.jp)</script></a>';
  html += '  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
  html += '    <i class="fas fa-chevron-circle-down"></i>';
  html += '  </button>';
  html += '  <div class="collapse navbar-collapse" id="navbarSupportedContent">';
  html += '    <ul class="navbar-nav mr-auto ml-2">';
  html += '      <li class="nav-item active">';
  html += '        <script>ins(topPage.' + type + ')</script>';
  html += '      </li>';
  html += '      <li class="nav-item active">';
  html += '        <script>ins(allEventsInfo.' + type + ')</script>';
  html += '      </li>';
  html += '      <li class="nav-item active">';
  html += '        <script>ins(allUsefulInfo.' + type + ')</script>';
  html += '      </li>';
  html += '      <li class="nav-item active">';
  html += '        <script>ins(aboutus.' + type + ')</script>';
  html += '      </li>';
  html += '      <li class="nav-item active">';
  html += '        <script>ins(pageShowEn.' + type + ')</script>';
  html += '      </li>';
  html += '      <li class="nav-item active">';
  html += '        <script>ins(pageShowVn.' + type + ')</script>';
  html += '      </li>';
  html += '      <li class="nav-item active">';
  html += '        <script>ins(contactus.' + type + ')</script>';
  html += '      </li>';
  html += '    </ul>';
  html += '  </div>';
  html += '</nav>';
  document.write(html);

}
