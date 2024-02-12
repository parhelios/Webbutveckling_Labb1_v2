class Article {
  constructor(title, price, info, imgUrl) {
    this.title = title;
    this.price = price;
    this.info = info;
    this.imgUrl = imgUrl;
  }
}

const articles = [
  new Article(
    "Arkham Horror",
    599,
    "Arkham Horror is a cooperative board game set in H.P. Lovecraft's Cthulhu Mythos, where players investigate supernatural occurrences in the city of Arkham. Players work together to solve mysteries, battle otherworldly creatures, and prevent ancient horrors from awakening. The game combines elements of strategy, storytelling, and horror, creating an immersive and challenging experience.",
    "https://m.media-amazon.com/images/I/61wUiOvhH2L._AC_SL1075_.jpg"
  ),
  new Article(
    "Wingspan",
    699,
    "A visually stunning engine-building game centered around bird watching, players attract and care for a variety of bird species to score points.",
    "https://www.spelexperten.com/bilder/artiklar/zoom/STM910SE_1.jpg"
  ),
  new Article(
    "Brass Birmingham",
    649,
    "A strategic economic board game set in the Industrial Revolution, players build industries, develop networks, and navigate the competitive landscape for wealth and success.",
    "../content/bg_covers/brass_birmingham_front.png"
  ),
  new Article(
    "Everdell",
    899,
    "A charming worker placement game set in a whimsical woodland, players construct their own cities of anthropomorphic creatures, balancing resources and special abilities for maximum points.",
    "../content/bg_covers/everdell_front.jpg"
  ),
];

const articlesList = document.querySelector("#articles");

console.log(articles);

for (const game of articles) {
  const li = document.createElement("li");
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardBody = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const cardPrice = document.createElement("h7");
  const cardText = document.createElement("p");
  const cardBtn = document.createElement("a");

  li.classList.add(
    "list-group-item",
    "bg-dark",
    "d-flex",
    "justify-content-center",
    "border",
    "border-0"
  );
  card.classList.add("card");
  cardImg.classList.add("card-img-top");
  cardBody.classList.add("card-body");
  cardTitle.classList.add("card-title");
  cardPrice.classList.add("card-title");
  cardText.classList.add("card-text");
  cardBtn.classList.add("btn", "btn-outline-primary");

  cardBtn.innerText = "Add to cart";

  cardImg.setAttribute("src", game.imgUrl);
  cardPrice.innerText = `Price: ${game.price} SEK`;
  cardTitle.innerText = game.title;
  cardText.innerText = game.info;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardBtn);
  card.appendChild(cardImg);
  card.appendChild(cardBody);
  li.appendChild(card);

  articlesList.appendChild(li);
}

function addItemToCart(title, price, img) {}
