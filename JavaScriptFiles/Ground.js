class Barriers{
    constructor(x, y, w, h){
        var options = {
            restitution:0.4,
            friction:0.1,
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(matterWorld, this.body);
    }
    show(){
        rectMode(CENTER);
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }
}