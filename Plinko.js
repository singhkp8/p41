class Plinko {
  constructor(x, y) {
    this.image = loadImage("mam.png");

    var options = {
      restitution: 1,
      friction: 0,
      isStatic: true,
    };
    this.r = 240;
    this.body = Bodies.circle(x, y, this.r, options);

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);

    noStroke();
    fill("black");
    ellipseMode(RADIUS);
    ellipse(400, 400, this.r, this.r);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
