var object;

function preload(){
    
}

function setup(){
   createCanvas(400,400);
   object = new umbrella(20,200);
    var maxDrops=100;
for (var i=0; i<maxDrops; i++){
    maxDrops.push(new createDrop(random(0,400), random(0,400)));
}
}


function draw(){
 umbrella.display();
 drops.display();
 update();   
}   

