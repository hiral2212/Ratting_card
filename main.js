//document.querySelectorAll('.rating').forEach(element => element.addEventListener('click', rate))
let selection 


function dotask(number){
    selection = number
    document.querySelectorAll('.rating').forEach(element => element.classList.remove('selected'))
    //document.getElementsByClassName('rating')
    document.getElementById(number).classList.add('selected')
    console.log(number)
}

function submission()
{
    if (isNaN(selection)){
        //isNan function returns true if the argument is not a number; 
        //otherwise, it is false.


    } else 
    {
        document.getElementById('rating-state').classList.add('hidden')
        document.getElementById('chosen-rating').innerText = selection // innerText is <h2> you select</h2>
        document.getElementById('thanks-state').classList.remove('hidden')
    }    
}