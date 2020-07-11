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
  html += '<div class="footerContent">';
  html += '  <div class="footerPageMenu mb-4">';
  html += '    <ul>';
  html += '      <li><script>ins(topPage.' + type + ')</script></li>';
  html += '      <li><script>ins(aboutus.' + type + ')</script></li>';
  html += '      <li><script>ins(allEventsInfo.' + type + ')</script></li>';
  html += '      <li><script>ins(allUsefulInfo.' + type + ')</script></li>';
  html += '      <li><script>ins(donate.' + type + ')</script></li>';
  html += '      <li><script>ins(contactus.' + type + ')</script></li>';
  html += '    </ul>';
  html += '  </div>';
  html += '  <div class="footerLanguage mb-4">';
  html += '    <ul>';

  if (type == "jp") {
    html += '      <li>';
    html += '        <a href="https://vietnam-nagoya.work/en/">';
    html += '          English page<br>';
    html += '          <span class="otherLang">英語のページを表示</span>';
    html += '        </a>';
    html += '      </li>';

    html += '      <li>';
    html += '        <a href="https://vietnam-nagoya.work/vn/">';
    html += '          Trang tiếng việt<br>';
    html += '          <span class="otherLang mb-4">ベトナム語のページを表示</span>';
    html += '        </a>';
    html += '      </li>';
  }

  if (type == "vn") {

    html += '      <li>';
    html += '        <a href="https://vietnam-nagoya.work/">';
    html += '          日本語のページを表示<br>';
    html += '          <span class="otherLang mb-4">Japanese Page</span>';

    html += '        </a>';
    html += '      </li>';

    html += '      <li>';
    html += '        <a href="https://vietnam-nagoya.work/en/">';
    html += '          English page<br>';
    html += '          <span class="otherLang">英語のページを表示</span>';
    html += '        </a>';
    html += '      </li>';

  }
  if (type == "en") {

    html += '      <li>';
    html += '        <a href="https://vietnam-nagoya.work/">';
    html += '          日本語のページを表示<br>';
    html += '          <span class="otherLang mb-4">Japanese Page</span>';

    html += '        </a>';
    html += '      </li>';

    html += '      <li>';
    html += '        <a href="https://vietnam-nagoya.work/vn/">';
    html += '          Trang tiếng việt<br>';
    html += '          <span class="otherLang mb-4">ベトナム語のページを表示</span>';
    html += '        </a>';
    html += '      </li>';

  }



  html += '';
  html += '    </ul>';
  html += '  </div>';
  html += '  <div class="footerMenuOther footerPageMenu">';
  html += '    <ul>';
  html += '      <li><script>ins(disclaimer.' + type + ')</script></li>';
  html += '      <li><script>ins(privacyPolicy.' + type + ')</script></li>';
  html += '    </ul>';
  html += '  </div>';
  html += '</div>';
  html += '<div class="footerCR">';
  html += '<div class="cr">';
  html += '©vietnam-nagoya.work';
  html += '</div>';
  html += '</div>';
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
  // var completePath = buildPath(depth);
  // var html = "";
  // html += ' <div class="listContent">';
  // html += '   <ul class="list-group">';
  // html += '     <li class="list-group-item"><script>ins(allEventsInfo.' + type + ');</script></li>';
  // // html += '     <li class="list-group-item"><img src="./' + completePath + 'images/pastevents.svg"> <script>ins(allPastEvents.' + type + ');</script></li>';
  //
  // html += '     <li class="list-group-item"><script>ins(allUsefulInfo.' + type + ');</script></li>';
  // html += '   </ul>';
  // html += ' </div>';
  // document.write(html);
}

function buildPath(depth) {
  var tmp = "";
  for (i = 0; i < depth; i++) {
    tmp += "../";
  }
  return tmp;
}

window.onload = function() {
  // const spinner = document.getElementById('loading');
  // spinner.classList.add('loaded');
  // // spinner.remove();
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
  html += '<div id="navArea">';
  html += '  <nav>';
  html += '    <div class="inner">';
  html += '      <ul>';
  html += '        <li><script>ins(topPage.' + type + ')</script></li>';
  html += '        <li><script>ins(aboutus.' + type + ')</script></li>';
  html += '        <li><script>ins(allEventsInfo.' + type + ')</script></li>';
  html += '        <li><script>ins(allUsefulInfo.' + type + ')</script></li>';
  html += '        <li><script>ins(donate.' + type + ')</script></li>';
  html += '        <li><script>ins(contactus.' + type + ')</script></li>';
  html += '      </ul>';
  html += '      <p class="mt-5">Global Menu</p>';
  html += '      <ul>';
  if (type == "jp") {
    html += '        <li><script>ins(pageShowEn.en)</script></li>';
    html += '        <li><script>ins(pageShowVn.vn)</script></li>';
  }
  if (type == "vn") {
    html += '        <li><script>ins(pageShowJp.jp)</script></li>';
    html += '        <li><script>ins(pageShowEn.en)</script></li>';

  }
  if (type == "en") {
    html += '        <li><script>ins(pageShowJp.jp)</script></li>';
    html += '        <li><script>ins(pageShowVn.vn)</script></li>';
  }
  html += '      </ul>';
  html += '    </div>';
  html += '  </nav>';
  html += '  <div class="toggle_btn">';
  html += '    <span></span>';
  html += '    <span></span>';
  html += '    <span></span>';
  html += '  </div>';
  html += '  <div id="mask"></div>';
  html += '';
  html += '</div>';
  document.write(html);

}

function insertEnglishFooter() {
  var html = "";

  html += '<div class="footerBackground p-5">';
  html += '  <ul>';
  html += '    <li class="footerlist pr-4"><a href="https://vietnam-nagoya.work/en/aboutus/aboutus.html">About us</a></li>';
  html += '    <li class="footerlist pr-4"><a href="https://vietnam-nagoya.work/en/contactus/contactus.html">Contact us</a></li>';
  html += '    <li class="footerlist pr-4"><a href="https://vietnam-nagoya.work/">Japanese page</a></li>';
  html += '  </ul>';
  html += '</div>';

  document.write(html);

}
