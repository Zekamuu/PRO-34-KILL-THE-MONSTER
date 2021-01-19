class Monsters{
    constructor(x, y, r){
        var options = {
            restitution:0.4,
            friction:0,
            density:1.5
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = monster2Img;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(matterWorld, this.body);
    }
    show(){
        image(this.image, this.body.position.x, this.body.position.y, this.r, this.r)
    }
}