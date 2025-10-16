const blocks = [
  {
    name: "Bedrock",
    amount: 1,
    image: "Assets/bedrock.png",
    price: 3.141592653589793,
    type: "Overworld",
  },
  {
    name: "Bookshelf",
    amount: 1,
    image: "Assets/bookshelf.png",
    price: 1,
    type: "Craftable",
  },
  {
    name: "Diamond Block",
    amount: 1,
    image: "Assets/diamondblock.png",
    price: 4,
    type: "Craftable",
  },
  {
    name: "Netherrack",
    amount: 64,
    image: "Assets/netherrack.png",
    price: 1,
    type: "Nether",
  },
  {
    name: "Obsidian",
    amount: 2,
    image: "Assets/obsidian.png",
    price: 1,
    type: "Overworld",
  },
  {
    name: "Cobbled Deepslate",
    amount: 64,
    image: "Assets/cobbledeep.png",
    price: 1,
    type: "Overworld",
  },
  {
    name: "Deepslate",
    amount: 48,
    image: "Assets/deepslate.png",
    price: 1,
    type: "Overworld",
  },
  {
    name: "Cobblestone",
    amount: 32,
    image: "Assets/cobblestone.png",
    price: 1,
    type: "Overworld",
  },
  {
    name: "Stone",
    amount: 48,
    image: "Assets/stone.png",
    price: 1,
    type: "Overworld",
  },
  {
    name: "Oak Leaves",
    amount: 8,
    image: "Assets/oakleaf.png",
    price: 1,
    type: "Overworld",
  },
  {
    name: "Oak Log",
    amount: 4,
    image: "Assets/oaklog.png",
    price: 1,
    type: "Overworld",
  },
  {
    name: "Sand",
    amount: 8,
    image: "Assets/sand.png",
    price: 1,
    type: "Overworld",
  },
  {
    name: "Dirt",
    amount: 64,
    image: "Assets/dirt.png",
    price: 1,
    type: "Overworld",
  },
  {
    name: "Grass Block",
    amount: 32,
    image: "Assets/grassblock.png",
    price: 1,
    type: "Overworld",
  },
];

blocks.forEach((block) => {
  document.querySelector(".containerblocks").insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
            <h2>${block.name}</h2>
            <img src="${block.image}" />
            <p>Price: ${block.price} Emerald</p>
            <p>Amount: ${block.amount}</p>
            <button class="add-to-cart" data-name="${block.name}">Add to Cart</button>
        </div>`
  );
});

const cart = [];

document.addEventListener("click", function (click) {
  if (click.target.classList.contains("add-to-cart")) {
    const cartName = click.target.dataset.name;
    const blockData = blocks.find((b) => b.name === cartName);

    if (blockData) {
      cart.push(blockData);
      console.log(blockData.price);
    }
  }
});
