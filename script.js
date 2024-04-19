const content = document.querySelector(".content");
const quoteBtn = document.querySelector(".btn");
const quoteAreaDiv = document.querySelector(".quote-area");
const writerDiv = document.querySelector(".writer");

quoteBtn.addEventListener("click", function (event) {
  event.preventDefault();

  getAPI(realurl);
});

const realurl = "https://api.quotable.io/quotes/random";

const getAPI = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  quoteAreaDiv.innerHTML = `<h3>${data[0].content}</h3>`;
  writerDiv.innerHTML = `<p>${data[0].author}</p>`;
};
