const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
const nav = document.querySelectorAll("header nav a");
nav.forEach((item, index) => {
  let j = index + 1;
  item.textContent = siteContent["nav"]["nav-item-" + j];
  item.setAttribute("class", "italic");
});

const images = document.querySelectorAll("img");
images[0].src = siteContent["images"]["logo-img"];
images[1].src = siteContent["images"]["cta-img"];
images[2].src = siteContent["images"]["accent-img"];

document.querySelector("h1").textContent = siteContent["cta"]["h1"];
document.querySelector("button").textContent = siteContent["cta"]["button"];

const h4s = document.querySelectorAll(".main-content h4");
h4s[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
h4s[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
h4s[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
h4s[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
h4s[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const ps = document.querySelectorAll(".main-content p");
ps[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
ps[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
ps[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
ps[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
ps[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

const contacth = document.querySelectorAll(".contact h4");
contacth[0].textContent = siteContent.iletisim["iletişim-h4"];

const contactp = document.querySelectorAll(".contact p");
contactp[0].textContent = siteContent.iletisim.adres;
contactp[1].textContent = siteContent.iletisim.telefon;
contactp[2].textContent = siteContent.iletisim.email;

document.querySelector("footer a").textContent = siteContent.footer.copyright;
document.querySelector("footer a").setAttribute("class", "bold");
