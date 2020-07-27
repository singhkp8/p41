class Particle {
  constructor(x, y, r) {
    var options = {
      restitution: 0.4,
    };
    this.r = r;

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
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(0, 0, 5, 5);
    pop();
  }
}
