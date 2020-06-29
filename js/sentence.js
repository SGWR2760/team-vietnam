const url = "https://vietnam-nagoya.work"

const groupName = {
  jp: 'ベトナム交流会',
  vn: 'Đảng trao đổi việt nam',
  en: 'Meet and greet Vietnam in Nagoya'
}

const informationTitle = {
  jp: 'イベント情報・お役立ち情報',
  vn: '???',
  en: 'Event information / useful information'
}

const eventInfo = {
  jp: 'イベント情報',
  vn: 'In preparation...',
  en: 'Event information'
}
const usefulInfo = {
  jp: 'お役立ち情報',
  vn: 'In preparation...',
  en: 'Useful information'
}
const aboutus = {
  jp: '<a href="' + url + '/jp/aboutus/aboutus.html">チーム概要</a>',
  vn: '<a href="' + url + '/vn/aboutus/aboutus.html">Thông tin Nhóm</a>',
  en: '<a href="' + url + '/en/aboutus/aboutus.html">About us</a>'
}
const donate = {
  jp: '<a href="' + url + '/jp/donate/donate.html"> 寄付</a>',
  vn: 'In preparation...',
  en: '<a href="' + url + '/en/donate/donate.html"> Donate</a>'
}
const contactus = {
  jp: '<a href="' + url + '/jp/contactus/contactus.html" role="button"> お問い合わせ</a>',
  vn: '<a href="' + url + '/vn/contactus/contactus.html" role="button"> Liên hệ & Giải đáp thắc mắc</a>',
  en: '<a href="' + url + '/en/contactus/contactus.html" role="button"> Contact us</a>'
}
const disclaimer = {
  jp: '<a class="headerLink" href="' + url + '/jp/disclaimer/disclaimer.html">免責事項</a>',
  vn: 'disclaimer',
  en: 'disclaimer'
}
const privacyPolicy = {
  jp: '<a class="headerLink" href="' + url + '/jp/disclaimer/privacypolicy.html">プライバシーポリシー</a>',
  vn: 'privacy policy',
  en: 'privacy policy'
}

const allEventsInfo = {
  jp: '<a href="' + url + '/jp/events/"> イベント情報一覧</a>',
  vn: '<a href="' + url + '/vn/events/"> Danh sách thông tin sự kiện</a>',
  en: '<a href="' + url + '/en/events/"> All event info</a>'
}


const allUsefulInfo = {
  jp: '<a href="' + url + '/jp/information/"> お役立ち情報一覧</a>',
  vn: 'In preparation...',
  en: '<a href="' + url + '/en/information/"> All topicks</a>'
}


const allPastEvents = {
  jp: '<a class="headerLink" href="' + url + '/jp/information/allinfo.html">過去のイベント</a>',
  vn: 'In preparation...',
  en: 'Past Events'
}

const pageShowJp = {
  jp:'<a href="'+ url +'/index.html"> 日本語のページを表示</a>',
  vn:'<a href="'+ url +'/index.html"> Hiển thị page Tiếng Nhật</a>',
  en:'<a href="'+ url +'/index.html"> Japanese Page</a>'
}

const pageShowEn = {
  jp:'<a href="'+ url +'/en/index.html">英語のページを表示</a>',
  vn:'<a href="'+ url +'/en/index.html">Hiển thị trang tiếng anh</a>',
  en:'<a href="'+ url +'/en/index.html">English Page</a>'
}

const pageShowVn = {
  jp:'<a href="'+ url +'/vn/index.html"> ベトナム語のページを表示</a>',
  vn:'<a href="'+ url +'/vn/index.html"> Hiển thị trang tiếng việt</a>',
  en:'<a href="'+ url +'/vn/index.html"> Vietnamese Page</a>'
}



const topPage = {
  jp:'<a href="'+ url +'/">トップページ</a>',
  vn:'<a href="'+ url +'/vn/index.html">Home</a>',
  en:'<a href="'+ url +'/en/index.html">Home</a>'
}

function ins(constName) {
  document.write(constName);
}
