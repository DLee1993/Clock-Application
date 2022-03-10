const btn = document.querySelector(".expand-btn");
var btnFirstChild = btn.querySelector(".btn-text");
var btnIcon = btn.querySelector("svg");
var mainContent = document.getElementsByTagName("main")
var expandableContainer = document.querySelector(".expandable-container"); 


btn.addEventListener("click", () => {
    if(btnFirstChild.innerHTML === 'more'){
        btnFirstChild.innerHTML = 'less'
        btnIcon.style.transform = 'rotate(0deg)';
        expandableContainer.style.display = 'flex'
        window.scrollTo(0,expandableContainer.scrollHeight)
    } else {
        btnFirstChild.innerHTML = 'more'
        btnIcon.style.transform = 'rotate(180deg)';
        window.scrollTo(0,0)
        setTimeout("expandableContainer.style.display = 'none'", 500)
    }
}); 