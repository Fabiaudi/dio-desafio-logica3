class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque básico";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const heroi1 = new Heroi("Gandalf", 150, "mago");
heroi1.atacar();

const heroi2 = new Heroi("Conan", 35, "guerreiro");
heroi2.atacar(); 

const heroi3 = new Heroi("Shifu", 45, "monge");
heroi3.atacar(); 

const heroi4 = new Heroi("Naruto", 17, "ninja");
heroi4.atacar(); 
