//HTML
const formAlert = document.querySelector('.form-alert')
const result = document.querySelector('.result');
var selectFilterFood = (document.querySelector('#filter-food')).value;
var selectPriceSort = (document.querySelector('#price-sort')).value;

const fetchMenus = async() => {
  try {
    selectFilterFood = (document.querySelector('#filter-food')).value;
    selectPriceSort = (document.querySelector('#price-sort')).value;
    const {data} = (await axios.get('/api/menus'))

    if(selectPriceSort == 'High to Low'){
      data.data.sort((a, b) => {
        return b.price - a.price;
      });
    }else if(selectPriceSort == 'Low to High'){
      data.data.sort((a, b) => {
        return a.price - b.price;
      });
    }

    console.log(data) 
    const menus = data.data.map((menu) => {
      if(menu.category == selectFilterFood.toLowerCase() || selectFilterFood == "All"){
        
        return `<div class="menu-item" id="menu-${menu.id}">
        <h3>${menu.title}</h3>
        <h5>${menu.desc}</h5>
        <h5>$${menu.price}</h5>
        <img src="${menu.img}"/>
      </div>`
      }
      return
    })
    result.innerHTML = menus.join('')
  } catch (err) {
    // console.log(err.response);
    formAlert.textContent = err.response.data.msg
  }
}
fetchMenus()