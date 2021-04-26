let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let section = document.querySelector('.section');
let dashboard = document.querySelector('.dashboard');
let first = document.querySelector('.first');



function onToggle(){
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

function mainSection(){

    dashboard.classList.toggle("active");
    first.classList.toggle('remove');
    // section.children.remove('.first');
    
    

}