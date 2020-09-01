var button = document.querySelectorAll('.dotSlider span');
var banner = document.getElementsByClassName('banner');
var back = document.getElementsByClassName('back');
var next = document.getElementsByClassName('next');

for(var i = 0; i < button.length; i++){
    button[i].onclick = function(){
        for(var k = 0; k < button.length; k++){
            button[k].classList.remove('active')
        }
        this.classList.add('active');
        var btnActive = this;
        var count = 0;
        for(count; btnActive = btnActive.previousElementSibling; count++){
            for(var a = 0; a < banner.length; a++){
                banner[a].classList.remove('active');
                banner[count].classList.add('active');
            }
        }
    }
}
