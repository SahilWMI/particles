const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
console.log(ctx);

class Particle {
    constructor(effect){
        this.effect = effect;
        this.x = math.random() * this.effect.width;
        this.y = Math.random() *this.effect.height;
        this.radius = 15;
    }
}

class Effect {
      constructor(effect){
        this.canvas =canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
}

function animate(){

}
