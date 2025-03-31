const toggleModal = () =>{
    const bodyClassList = document.body.classList;
    if(bodyClassList.contains("open")){
        bodyClassList.remove("open");
        bodyClassList.add("closed");
    }else{
        bodyClassList.remove("closed");
        bodyClassList.add("open");
    }
}

const myprj = document.querySelector('.my_projects')
const body = document.querySelector('body')
const namem = document.querySelector('.name');

myprj.addEventListener('click', ()=> {
    myprj.classList.toggle('active');
});

namem.addEventListener('click', ()=> {
    namem.classList.toggle('active');
});
