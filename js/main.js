gsap.from(".concept",{ y: 50, opacity: 0, duration: 3 });
gsap.from(".concept-1",{ y: 20, opacity: 0, duration: 2 });
gsap.from(".concept-2",{ y: 20, opacity: 0, duration: 2 });
gsap.from(".about-article__prof",{ y: 20, opacity: 0, duration: 2 });
gsap.from(".prof-img__photo",{ y: 20, opacity: 0, duration: 2 });
gsap.fromTo(".fixed_btn",
    {autoAlpha: 0, // アニメーション開始前は透明
    },
    {autoAlpha: 1, // アニメーション後は出現(透過率0)
    scrollTrigger: {
      trigger: ".fixed_btn", // アニメーションが始まるトリガーとなる要素
      start: "top center", // アニメーションの開始位置
    }
});

document.addEventListener("DOMContentLoaded", function () {
  // イベントリスナーを追加し、スクロール時に関数を実行
  window.addEventListener("scroll", function () {
      // スクロール位置が一定の位置を越えた場合、特定の要素を表示
      if (window.scrollY > 300) {
          document.getElementById("about").style.display = "block";
      } else {
          document.getElementById("about").style.display = "none";
      }
  });
});

