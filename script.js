let cards = [
  {
    img: "src/img/img_slider_1.jpg",
    city: "Rostov-on-Don <br> LCD admiral",
    area: "81 m2",
    repair: "3.5 months",
    cost: "Upon request",
  },
  {
    img: "src/img/img_slider_2.jpg",
    city: "Sochi Thieves",
    area: "105 m2",
    repair: "4 months",
    cost: "Upon request",
  },
  {
    img: "src/img/img_slider_3.jpg",
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    repair: "3 months",
    cost: "Upon request",
  },
];

const prev = document.querySelector(".left-arrow");
const next = document.querySelector(".right-arrow");
const img = document.querySelector(".slider-images");
const city = document.getElementById("city");
const area = document.getElementById("area");
const repair = document.getElementById("repair");
const cost = document.getElementById("cost");
const dots = document.querySelectorAll(".dot");
const tabs = document.querySelectorAll(".tab");

const setImg = (index) => {
  img.style.backgroundImage = `url(${cards[index].img})`;
};
const setCity = (index) => {
  city.innerHTML = `${cards[index].city}`;
};
const setArea = (index) => {
  area.innerHTML = `${cards[index].area}`;
};
const setRepair = (index) => {
  repair.innerHTML = `${cards[index].repair}`;
};
const setCost = (index) => {
  cost.innerHTML = `${cards[index].cost}`;
};

let currentIndex = 0;

function showActive(n) {
  for (let i = 0; i < tabs.length; i++) {
    if (n == i) {
      tabs[i].classList.add("active");
      dots[i].classList.add("active");
    } else {
      tabs[i].classList.remove("active");
      dots[i].classList.remove("active");
    }
  }
}

function currentSlide(n) {
  showActive((currentIndex = n));
}

dots.forEach((dot, currentIndex) => {
  dot.addEventListener("click", () => {
    setImg(currentIndex);
    setCity(currentIndex);
    setArea(currentIndex);
    setRepair(currentIndex);
    setCost(currentIndex);
  });
});

tabs.forEach((tab, currentIndex) => {
  tab.addEventListener("click", () => {
    setImg(currentIndex);
    setCity(currentIndex);
    setArea(currentIndex);
    setRepair(currentIndex);
    setCost(currentIndex);
  });
});

prev.addEventListener("click", () => {
  currentIndex > 0 ? currentIndex-- : (currentIndex = cards.length - 1);
  showActive(currentIndex);
  setImg(currentIndex);
  setCity(currentIndex);
  setArea(currentIndex);
  setRepair(currentIndex);
  setCost(currentIndex);
});

next.addEventListener("click", () => {
  currentIndex < cards.length - 1 ? currentIndex++ : (currentIndex = 0);
  showActive(currentIndex);
  setImg(currentIndex);
  setCity(currentIndex);
  setArea(currentIndex);
  setRepair(currentIndex);
  setCost(currentIndex);
});
