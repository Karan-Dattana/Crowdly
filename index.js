let like=document.querySelectorAll('.action1');
Array.from(like).forEach(function(ele){
    ele.addEventListener('click',function(){
        if(ele.classList.contains('liked'))
        {
            ele.classList.remove('liked');
            ele.getElementsByTagName('span')[0].innerHTML='Like';
        }
        else{
            ele.classList.add('liked');
            // ele[1].innerHTML('Liked');
            ele.getElementsByTagName('span')[0].innerHTML='Liked';
            let audio=new Audio('mp3/like.mp3');
            audio.play();
        }
    })
})