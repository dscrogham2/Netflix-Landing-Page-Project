const tabItems = document.querySelectorAll('.tab-item'); //will sort tabitems into a node list//
const tabContentItems = document.querySelectorAll('.tab-content-item'); //grab from the DOM//

//Select tab content item//
function selectItem(e) {
    this.classList.add('tab-border');
}

tabItems.forEach(item => item.addEventListener('click', selectItem)); //Listen for tab click//