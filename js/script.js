var imageObj, className, index;

imageObj = document.getElementById('images');
index = 1;
className = [
    'imageOne',
    'imageTwo'
];

function updateIndex(){
    if(index === 0){
        index = 1;
    }else{
        index = 0;
    }
}

imageObj.onclick = function(e){
    e.currentTarget.className = className[index];
    updateIndex();
}
