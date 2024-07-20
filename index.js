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
    draw(context){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI *2);
        context.fill;
    }
}

class Effect {
    constructor(effect){
        this.canvas =canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particle = [];
        this.numberOfParticles = 20;
        this.createParticles();
    }
    createParticles(){
        for(let i = 0; i < this.numberOfParticles; i++){
            this.particle.push(new Particle(this));
        }
        handleParticles(context){
            this.Particles.forEach(particle => {
                particle.draw(context);
            });
        }
    }
}
const effect = new effect(canvas);

function animate(){

}
