var add = document.getElementById('addElem');
var list = document.getElementById('list');

add.addEventListener('click', function() {
    var element = document.createElement('li');    
    var length = document.getElementsByTagName('li').length;
    
    element.innerHTML = 'item ' + length;
    
    list.appendChild(element);
});