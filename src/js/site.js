class Article {
  constructor(title, price, info, imgUrl) {
    this.title = title;
    this.price = price;
    this.info = info;
    this.imgUrl = imgUrl;
  }
}

class CartArticle {
  constructor(title, price, imgUrl) {
    this.title = title;
    this.price = price;
    this.imgUrl = imgUrl;
  }
}

getCat();


const articles = [
  new Article(
    "Arkham Horror",
    599,
    "Arkham Horror is a cooperative board game set in H.P. Lovecraft's Cthulhu Mythos, where players investigate supernatural occurrences in the city of Arkham. Players work together to solve mysteries, battle otherworldly creatures, and prevent ancient horrors from awakening. The game combines elements of strategy, storytelling, and horror, creating an immersive and challenging experience.",
    "../content/bg_covers/arkham_horror_3rd_front.png"
  ),
  new Article(
    "Brass Birmingham",
    649,
    "A strategic economic board game set in the Industrial Revolution, players build industries, develop networks, and navigate the competitive landscape for wealth and success.",
    "../content/bg_covers/brass_birmingham_front.png"
  ),
  new Article(
    "Carcassonne",
    299,
    "A classic tile-laying game set in the medieval French countryside, players build cities, roads, and fields, and compete to claim the most points.",
    "../content/bg_covers/carcassonne_front.jpg"
  ),
  new Article(
    "Cascadia",
    599,
    "A strategic tile-laying game set in the Pacific Northwest, players match and arrange habitats to attract wildlife and score points.",
    "../content/bg_covers/cascadia_front.jpg"
  ),
  new Article(
    "Catan",
    399,
    "A classic resource management game set on the island of Catan, players build settlements, roads, and cities, and compete to claim the most points.",
    "../content/bg_covers/catan_front.png"
  ),
  new Article(
    "Dead of Winter",
    499,
    "A cooperative survival game set in a post-apocalyptic world, players work together to gather resources, complete objectives, and fend off the undead.",
    "../content/bg_covers/dead_of_winter_front.jpg"
  ),
  new Article(
    "Dominion",
    399,
    "A deck-building game set in a medieval fantasy world, players use their cards to gather resources, build their kingdoms, and compete for victory points.",
    "../content/bg_covers/dominion_front.jpg"
  ),
  new Article(
    "Dune",
    699,
    "A strategic negotiation game set in the universe of Frank Herbert's Dune, players take on the roles of different factions competing for control of the desert planet Arrakis.",
    "../content/bg_covers/dune_front.jpg"
  ),
  new Article(
    "Eclipse",
    1599,
    "A strategic space empire game, players explore the galaxy, expand their empires, and compete for control of resources and territory.",
    "../content/bg_covers/eclipse_front.jpg"
  ),
  new Article(
    "Everdell",
    899,
    "A charming worker placement game set in a whimsical woodland, players construct their own cities of anthropomorphic creatures, balancing resources and special abilities for maximum points.",
    "../content/bg_covers/everdell_front.jpg"
  ),
  new Article(
    "Freedom: The Underground Railroad",
    499,
    "A cooperative strategy game set during the American Civil War, players work together to guide slaves to freedom along the Underground Railroad.",
    "../content/bg_covers/freedom_the_underground_railroad_front.jpg"
  ),
  new Article(
    "Gloomhaven",
    999,
    "A legacy-style cooperative campaign game, players take on the roles of wandering adventurers with their own special skills and motives, exploring a dark and dangerous world.",
    "../content/bg_covers/gloomhaven_front.jpg"
  ),
  new Article(
    "Mansions of Madness",
    999,
    "A cooperative horror game set in the world of H.P. Lovecraft's Cthulhu Mythos, players explore haunted mansions, solve mysteries, and battle otherworldly creatures.",
    "../content/bg_covers/mansions_of_madness_front.jpg"
  ),
  new Article(
    "Nemesis",
    999,
    "A semi-cooperative survival game set on a spaceship, players work together to survive an alien infestation, but also compete to achieve their own secret objectives.",
    "../content/bg_covers/nemesis_front.jpg"
  ),

  new Article(
    "Root",
    699,
    "A strategic asymmetrical game set in a woodland, players take on the roles of different animal factions, each with their own special abilities and goals, competing for control and dominance.",
    "../content/bg_covers/root_front.png"
  ),
  new Article(
    "Pandemic",
    299,
    "A cooperative board game set in a world threatened by deadly diseases, players work together to contain outbreaks and find cures before it's too late.",
    "../content/bg_covers/pandemic_front.jpg"
  ),
  new Article(
    "Scythe",
    899,
    "A strategic economic game set in an alternate history 1920s Europe, players build empires, develop technologies, and compete for control of territory and resources.",
    "../content/bg_covers/scythe_front.jpg"  
    ),
  new Article(
    "Spirit Island",
    899,
    "A cooperative strategy game set on a mystical island, players take on the roles of powerful spirits, working together to defend the island from invaders and colonizers.",
    "../content/bg_covers/spirit_island_front.jpg"
  ),
  new Article(
    "Terraforming Mars",
    599,
    "A strategic economic game set on the Red Planet, players compete to transform Mars into a habitable world, balancing resources and infrastructure for maximum points.",
    "../content/bg_covers/terraforming_mars_front.jpg"
  ),
  new Article(
    "The Crew",
    199,
    "A cooperative trick-taking game set in space, players work together to complete missions and communicate without speaking, using only the cards in their hands.",
    "../content/bg_covers/the_crew_front.jpg"
  ),
  new Article(
    "Tyrants of the Underdark",
    799,
    "A strategic deck-building game set in the Dungeons & Dragons universe, players recruit minions, build their armies, and compete for control of the Underdark.",
    "../content/bg_covers/tyrants_of_the_underdark_front.jpg"
  ),
  new Article(
    "Unfathomable",
    899,
    "A semi-cooperative game set on a luxury ocean liner, players work together to survive a series of disasters, but also compete to achieve their own secret objectives.",
    "../content/bg_covers/unfathomable_front.jpg"
  ),
  new Article(
    "Wingspan",
    699,
    "A visually stunning engine-building game centered around bird watching, players attract and care for a variety of bird species to score points.",
    "../content/bg_covers/wingspan_front.png"
  ),
  new Article(
    "Zombicide",
    699,
    "A cooperative survival game set in a world overrun by zombies, players work together to complete missions, gather resources, and fend off the undead.",
    "../content/bg_covers/zombicide_front.jpg"
  ),
];

let shoppingCartArr = [];

const articlesList = document.querySelector("#articles");

for (const game of articles) {
  //Skapa kortet
  const li = document.createElement("li");
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardBody = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const cardPrice = document.createElement("h7");
  const cardText = document.createElement("p");
  const cardBtn = document.createElement("button");
  const cardInfoBtn = document.createElement("button");

  //Skapa shopping modal
  const modalContainer = document.createElement("div");
  const modalDialog = document.createElement("div");
  const modalContent = document.createElement("div");
  const modalHeader = document.createElement("div");
  const modalTitle = document.createElement("h1");
  const closeButton = document.createElement("button");
  const modalBody = document.createElement("div");
  const modalFooter = document.createElement("div");
  const closeButtonFooter = document.createElement("button");

  //Skapa info modal
  const modalContainer2 = document.createElement("div");
  const modalDialog2 = document.createElement("div");
  const modalContent2 = document.createElement("div");
  const modalHeader2 = document.createElement("div");
  const modalTitle2 = document.createElement("h1");
  const closeButton2 = document.createElement("button");
  const modalBody2 = document.createElement("div");
  const modalFooter2 = document.createElement("div");
  const closeButtonFooter2 = document.createElement("button");

  applyStyles(
    li,
    card,
    cardImg,
    cardBody,
    cardTitle,
    cardPrice,
    cardText,
    cardBtn,
    cardInfoBtn,
    modalContainer,
    modalDialog,
    modalContent,
    modalHeader,
    modalTitle,
    closeButton,
    modalBody,
    modalFooter,
    closeButtonFooter,
    modalContainer2,
    modalDialog2,
    modalContent2,
    modalHeader2,
    modalTitle2,
    closeButton2,
    modalBody2,
    modalFooter2,
    closeButtonFooter2
  );

  const modalIdTitle = game.title.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "_");

  cardImg.setAttribute("src", game.imgUrl);
  cardPrice.innerHTML = `<b>Price:</b> ${game.price} SEK`;
  cardTitle.innerText = game.title;
  // cardText.innerText = game.info;
  cardBtn.innerText = "Add to cart";
  cardInfoBtn.innerText = "More info";

  cardBtn.setAttribute("data-bs-target", `#shopModal_${modalIdTitle}`);
  cardBtn.setAttribute("data-bs-toggle", "modal");
  cardInfoBtn.setAttribute("data-bs-target", `#infoModal_${modalIdTitle}`);
  cardInfoBtn.setAttribute("data-bs-toggle", "modal");

  modalContainer.setAttribute("id", "shopModal_" + modalIdTitle);
  modalContainer.setAttribute("data-bs-backdrop", "static");
  modalContainer.setAttribute("data-bs-keyboard", "false");
  modalContainer.setAttribute("tabindex", "-1");
  modalContainer.setAttribute("aria-labelledby", "staticBackdropLabel");
  modalContainer.setAttribute("aria-hidden", "true");
  modalTitle.id = "staticBackdropLabel";
  modalTitle.textContent = "Added to cart";
  closeButton.type = "button";
  closeButton.setAttribute("data-bs-dismiss", "modal");
  closeButton.setAttribute("aria-label", "Close");
  modalBody.innerHTML = `<b>${game.title}</b> has been added to your cart!`;
  closeButtonFooter.setAttribute("data-bs-dismiss", "modal");
  closeButtonFooter.textContent = "Close";

  modalContainer2.setAttribute("id", "infoModal_" + modalIdTitle);
  modalContainer2.setAttribute("data-bs-backdrop", "static");
  modalContainer2.setAttribute("data-bs-keyboard", "false");
  modalContainer2.setAttribute("tabindex", "-1");
  modalContainer2.setAttribute("aria-labelledby", "staticBackdropLabel");
  modalContainer2.setAttribute("aria-hidden", "true");
  modalTitle2.id = "staticBackdropLabel";
  modalTitle2.textContent = "More info";
  closeButton2.type = "button";
  closeButton2.setAttribute("data-bs-dismiss", "modal");
  closeButton2.setAttribute("aria-label", "Close");
  modalBody2.innerHTML = game.info;
  closeButtonFooter2.setAttribute("data-bs-dismiss", "modal");
  closeButtonFooter2.textContent = "Close";

  cardBtn.onclick = () => {
    addItemToCart(game.title, game.price, game.imgUrl);
  };

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardBtn);
  cardBody.appendChild(cardInfoBtn);
  card.appendChild(cardImg);
  card.appendChild(cardBody);

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);
  modalFooter.appendChild(closeButtonFooter);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modalContainer.appendChild(modalDialog);

  modalHeader2.appendChild(modalTitle2);
  modalHeader2.appendChild(closeButton2);
  modalFooter2.appendChild(closeButtonFooter2);
  modalContent2.appendChild(modalHeader2);
  modalContent2.appendChild(modalBody2);
  modalContent2.appendChild(modalFooter2);
  modalDialog2.appendChild(modalContent2);
  modalContainer2.appendChild(modalDialog2);

  li.appendChild(card);
  li.appendChild(modalContainer);
  li.appendChild(modalContainer2);
  articlesList.appendChild(li);
}

function applyStyles(
  li,
  card,
  cardImg,
  cardBody,
  cardTitle,
  cardPrice,
  cardText,
  cardBtn,
  cardInfoBtn,
  modalContainer,
  modalDialog,
  modalContent,
  modalHeader,
  modalTitle,
  closeButton,
  modalBody,
  modalFooter,
  closeButtonFooter,
  modalContainer2,
  modalDialog2,
  modalContent2,
  modalHeader2,
  modalTitle2,
  closeButton2,
  modalBody2,
  modalFooter2,
  closeButtonFooter2
) {
  li.classList.add(
    "list-group-item",
    "background-shop",
    "d-flex",
    "justify-content-center",
    "border",
    "border-0"
  );
  card.classList.add("card");
  cardImg.classList.add("card-img-top");
  cardBody.classList.add("card-body", "place-content-bottom");
  cardTitle.classList.add("card-title");
  cardPrice.classList.add("card-title");
  cardText.classList.add("card-text");
  cardBtn.classList.add("btn", "btn-outline-primary", "ms-3");
  cardInfoBtn.classList.add("btn", "btn-outline-secondary", "me-3");

  modalContainer.classList.add("modal", "fade");
  modalDialog.classList.add("modal-dialog", "modal-dialog-centered");
  modalContent.classList.add("modal-content");
  modalHeader.classList.add("modal-header");
  modalTitle.classList.add("modal-title", "fs-5");
  closeButton.classList.add("btn-close");
  modalBody.classList.add("modal-body");
  modalFooter.classList.add("modal-footer");
  closeButtonFooter.classList.add("btn", "btn-outline-primary");

  modalContainer2.classList.add("modal", "fade");
  modalDialog2.classList.add("modal-dialog", "modal-dialog-centered");
  modalContent2.classList.add("modal-content");
  modalHeader2.classList.add("modal-header");
  modalTitle2.classList.add("modal-title", "fs-5");
  closeButton2.classList.add("btn-close");
  modalBody2.classList.add("modal-body");
  modalFooter2.classList.add("modal-footer");
  closeButtonFooter2.classList.add("btn", "btn-outline-primary");
}

function addItemToCart(title, price, img) {
  const shoppingCartList = document.querySelector("#shoppingCartDisplayList");

  shoppingCartList.innerText = "";

  const cartArticle = new CartArticle(
    title.innerText = title,
    price.innerText = price,
    img.src = img
  );
  shoppingCartArr.push(cartArticle);


  for (const article of shoppingCartArr) {
    const tr = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdPrice = document.createElement("td");
    const tdRemove = document.createElement("td");
    const removeBtn = document.createElement("button");
  
    tdTitle.innerText = article.title;
    tdPrice.innerText = `${article.price} SEK`;
    removeBtn.classList.add("btn", "btn-outline-danger", "float-end");
    removeBtn.innerText = "Remove";
  
    removeBtn.onclick = () => {
      removeItemFromCart(article.title);
    };
  
    tdRemove.appendChild(removeBtn);
    tr.appendChild(tdTitle);
    tr.appendChild(tdPrice);
    tr.appendChild(tdRemove);
    shoppingCartList.appendChild(tr);
  }
}

function removeItemFromCart(title) {
  const shoppingCartList = document.querySelector("#shoppingCartDisplayList");

  const indexToRemove = shoppingCartArr.findIndex(item => item.title === title);
  if (indexToRemove !== -1) {
    shoppingCartArr.splice(indexToRemove, 1);
  }

    shoppingCartList.childNodes.forEach((child) => {
      if (child.innerText && child.innerText.includes(title)) {
        shoppingCartList.removeChild(child);
      }
  });

  console.log(shoppingCartArr); 
}


async function getCat() {
  const catContainer = document.querySelector("#catquoteoftheday");

  const url = "https://cat-fact.herokuapp.com/facts";
  const response = await fetch(url);
  const data = await response.json(); 

  const randomIndex = Math.floor(Math.random() * 5); 
  const randomText = data[randomIndex].text;

  const p = document.createElement("p");
  p.classList.add("fw-light", "mx-auto");
  p.innerText = randomText;
  catContainer.appendChild(p);
}

const clearCartBtn = document.querySelector("#clearCartBtn");
const shoppingCartList = document.querySelector("#shoppingCartDisplayList");

clearCartBtn.addEventListener('click', function() {

    console.log(shoppingCartArr);
    shoppingCartArr = [];
    shoppingCartList.innerText = "";
});
