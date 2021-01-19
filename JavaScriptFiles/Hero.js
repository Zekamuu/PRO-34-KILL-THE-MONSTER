class Heroes{
    constructor(x, y, r){
        var options = {
            restitution:0.4,
            friction:0,
            density:5
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = superhero1Img;
        this.image2 = superhero2Img;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(matterWorld, this.body);
    }
    show(){
        this.c = this.r*2
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 200, 100);
        pop();
    }
}