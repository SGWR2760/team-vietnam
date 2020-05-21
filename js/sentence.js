const url = "https://vietnam-nagoya.work"

const groupName = {
  jp: 'ベトナム交流会',
  vn: 'Đảng trao đổi việt nam',
  en: 'Vietnam Exchange Party'
}

const informationTitle = {
  jp: 'イベント情報・お役立ち情報',
  vn: '???',
  en: 'Event information / useful information'
}

const eventInfo = {
  jp: 'イベント情報',
  vn: '?????????????????????',
  en: 'Event information'
}
const usefulInfo = {
  jp: 'お役立ち情報',
  vn: '?????????????????????',
  en: 'Useful information'
}
const aboutus = {
  jp: '<a class="nav-link" href="' + url + '/jp/aboutus/aboutus.html"><i class="fas fa-users"></i> チーム概要</a>',
  vn: 'vn???????',
  en: '<a class="nav-link" href="' + url + '/en/aboutus/aboutus.html"><i class="fas fa-users"></i> About us</a>'
}
const donate = {
  jp: '<a class="nav-link" href="' + url + '/jp/donate/donate.html"><i class="fas fa-hand-holding-usd"></i> 寄付</a>',
  vn: 'vn???????',
  en: '<a class="nav-link" href="' + url + '/en/donate/donate.html"><i class="fas fa-hand-holding-usd"></i> Donate</a>'
}
const contactus = {
  jp: '<a class="btn btn-warning headerContactus w-100" href="' + url + '/jp/contactus/contactus.html" role="button"> お問い合わせ</a>',
  vn: 'vn????????',
  en: '<a class="btn btn-warning headerContactus w-100" href="' + url + '/en/contactus/contactus.html" role="button"> Contact us</a>'
}
const disclaimer = {
  jp: '<a class="headerLink" href="' + url + '/jp/disclaimer/disclaimer.html">免責事項</a>',
  vn: 'vn????????',
  en: 'disclaimer'
}

const allEventsInfo = {
  jp: '<a class="nav-link" href="' + url + '/jp/events/"><i class="far fa-calendar-alt"></i> イベント情報一覧</a>',
  vn: 'vn????????',
  en: '<a class="nav-link" href="' + url + '/en/events/"><i class="far fa-calendar-alt"></i> All event info</a>'
}


const allUsefulInfo = {
  jp: '<a class="nav-link" href="' + url + '/jp/information/"><i class="fas fa-info-circle"></i> お役立ち情報一覧</a>',
  vn: 'vn??????',
  en: '<a class="nav-link" href="' + url + '/en/information/"><i class="fas fa-info-circle"></i> All topicks</a>'
}


const allPastEvents = {
  jp: '<a class="headerLink" href="' + url + '/jp/information/allinfo.html">過去のイベント</a>',
  vn: 'vn??????',
  en: 'Past Events'
}

const pageShowJp = {
  jp:'<a class="nav-link" href="'+ url +'/index.html"><i class="fas fa-globe-asia"></i> 日本語のページを表示</a>',
  vn:'vn??????',
  en:'<a class="nav-link" href="'+ url +'/index.html"><i class="fas fa-globe-asia"></i>  Japanese Page</a>'
}

const pageShowEn = {
  jp:'<a class="nav-link" href="'+ url +'/en/index.html"><i class="fas fa-globe-americas"></i> English Page</a>',
  vn:'vn??????',
  en:'<a class="nav-link" href="'+ url +'/en/index.html"><i class="fas fa-globe-americas"></i> English Page</a>'
}

const pageShowVn = {
  jp:'<a class="nav-link" href="'+ url +'/vn/index.html"><i class="fas fa-globe-asia"></i> ベトナム語のページを表示</a>',
  vn:'vn??????',
  en:'<a class="nav-link" href="'+ url +'/vn/index.html"><i class="fas fa-globe-asia"></i> Vietnamese Page</a>'
}



const topPage = {
  jp:'<a class="nav-link headerLink" href="'+ url +'/"><i class="fas fa-home"></i> トップページ</a>',
  vn:'',
  en:'<a class="nav-link headerLink" href="'+ url +'/en/index.html"><i class="fas fa-home"></i> Home</a>'
}

function ins(constName) {
  document.write(constName);
}
