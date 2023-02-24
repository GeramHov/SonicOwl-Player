const likeBtn = document.getElementById('likebutton');
const textSuccess = document.getElementById('likesuccess');

likeBtn.addEventListener('click', function(){
    textSuccess.style.display = 'block !important';
})