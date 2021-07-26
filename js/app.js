const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  }
];

// storing selectors
const menuContainer = document.getElementById('mainMenuContainer');
const btnsContainer = document.querySelector('.btnContainer');

// display menu on load
window.addEventListener('DOMContentLoaded', () => {
  displayMenu(menu)
  displayMenuBtns()
})

// pushing thae menu array to the html

function displayMenu(menuItems) {
  let menuMap = menuItems.map((item) => {
    return `<div class="col-lg-6 row menuContainer text-left p-2 m-0">   
    <!-- foodImg -->     
    <div class="foodImg col-lg-5 p-0">
    <img class="w-100" src=${item.img} alt="">
    </div>
    <!-- menuTitle -->
    <div class="col-lg-7 px-0 pl-lg-3 mt-lg-0 mt-3">
    <div class="d-flex align-items-center mb-2 border-bottom pb-2">
        <h2 class="menuTitle m-0 text-capitalize">${item.title}</h2>
        <span class="menuPrice ml-auto">$${item.price}</span>              
      </div>
      <p class="menuText m-0">${item.desc}</p>            
    </div>
  </div> `
  });
  menuMap = menuMap.join("");
  menuContainer.innerHTML = menuMap
}
function displayMenuBtns() {
  const categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values
  }, ["all"]);
  const categoryBtns = categories.map((category) => {
    return `<button data-category=${category} class="btn text-capitalize">${category}</button>`
  }).join("")
  btnsContainer.innerHTML = categoryBtns
  const btns = btnsContainer.querySelectorAll('.btn');
  btns[0].classList.add("active")
  // buttons functionality

  btns.forEach((x) => {
    x.addEventListener('click', (thisBtn) => {
      const btnTarget = thisBtn.currentTarget;
      btns.forEach((removeActive) => {
        removeActive.classList.remove("active")
      })
      btnTarget.classList.add("active");
      const menuFilter = thisBtn.currentTarget.dataset.category;
      const menuCategory = menu.filter((e) => {
        if (e.category === menuFilter) {
          return e;
        }
      });
      if (menuFilter === "all") {
        displayMenu(menu)
      } else {
        displayMenu(menuCategory)
      }
    })
  })
}
