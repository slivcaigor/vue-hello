const { createApp } = Vue;

createApp({
  data() {
    return {
      title: '_Ciao Vue!👋',
      titleClass: "myTitle",
      imgSrc: "./img/logo.png",
      imgClass: 'myImg',
      altText: 'Vue Js Logo'
    }
  }
}).mount('#app')




