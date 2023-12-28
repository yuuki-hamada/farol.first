gsap.from(".concept",{ y: 50, opacity: 0, duration: 3 });
gsap.from(".concept-1",{ y: 20, opacity: 0, duration: 2 });
gsap.from(".concept-2",{ y: 20, opacity: 0, duration: 2 });
gsap.from(".about-article__prof",{ y: 20, opacity: 0, duration: 2 });
gsap.from(".prof-img__photo",{ y: 20, opacity: 0, duration: 2 });


document.addEventListener('DOMContentLoaded', function () {
  // スクロール時の処理を追加
  window.addEventListener('scroll', function () {
      // すべてのsection要素を取得
      var sections = document.querySelectorAll('.contents-container');

      // 各section要素に対して処理を行う
      sections.forEach(function (section) {
          // 要素がビューポート内に入ったら
          if (isElementInViewport(section)) {
              // アニメーションを適用して要素を表示させる
              section.style.opacity = 1;
              section.style.transform = 'translateY(0)';
          }
      });
  });

  // 要素がビューポート内に入っているかを判定する関数
  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('.contents-container');

  var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
          if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, { threshold: 0.5 }); // 50%以上がビューポート内に入ったらコールバックを実行

  sections.forEach(function (section) {
      observer.observe(section);
  });
});

// document.addEventListener('DOMContentLoaded', function () {
//   var scrollButton = document.getElementById('scrollButton');

//   window.addEventListener('scroll', function () {
//       var scrollPosition = window.scrollY;

//       // ボタンをスクロールに合わせてゆっくりと追従させる
//       scrollButton.style.opacity = 1;
//       scrollButton.style.transform = 'translateY(' + scrollPosition + 'px)';
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  // スクロール時の処理を追加
  window.addEventListener('scroll', function () {
      // すべてのsection要素を取得
      var sections = document.querySelectorAll('.fixed_btn');

      // 各section要素に対して処理を行う
      sections.forEach(function (section) {
          // 要素がビューポート内に入ったら
          if (isElementInViewport(section)) {
              // アニメーションを適用して要素を表示させる
              section.style.opacity = 1;
              section.style.transform = 'translateY(0)';
          }
      });
  });

  // 要素がビューポート内に入っているかを判定する関数
  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
});