const tabItems = document.querySelectorAll('.tab-item'); //will sort tabitems into a node list//
const tabContentItems = document.querySelectorAll('.tab-content-item'); //grab from the DOM//

//Select tab content item//
function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    //Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}


function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem)); //Listen for tab click//