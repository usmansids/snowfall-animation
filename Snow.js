class Snow{
    constructor(x, y, width, height) {
      var options = {
        'restitution': 0.8,
        'friction': 1.0,
        'density': 1.0
      }
      this.image=loadImage("snow4.webp")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display() {
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      image(this.image, this.width, this.height);
      pop();
    }
  }