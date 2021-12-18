var selector = getElementByClass("navLinks");

document.querySelector(selector).addEventListener('click', function(){
    document.querySelector(selector).removeClass('active');
    document.querySelector(this).classList.add('active');
});