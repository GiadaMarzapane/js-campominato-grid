const play = document.getElementById('play');
const container = document.querySelector('.container');

function numbers(){
    for (let index = 1; index <= 100; index++) {
        const element = index;
        
        const myCell = document.createElement('div');
        myCell.innerHTML += element;
        myCell.classList.add('my-cell');
        container.append(myCell);
    }
}

play.addEventListener('click',
    function(){

        container.classList.remove('hidden');
        container.classList.add('flex');
        numbers();
    }
)