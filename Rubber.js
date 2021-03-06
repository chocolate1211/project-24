class Rubber{
   //constructor(x) {
     // var options = {
       // 'density':1,
        //'friction': 5,
        //'restitution':0.3
      
      //this.body = Bodies.ellipsele(x, y,  50, options);
      //this.width = 150;
      //this.height = 50;
      //Matter.bodies.circle(100,300,50);
      //World.add(world, this.body);
    //};
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('orange')
      
      pop();
    }
  }