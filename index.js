
class Personnage {
    constructor(pseudo, classe, sante, attaque){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante  = sante;
        this.attaque= attaque;
        this.niveau = 1;
    }

    get informations(){
        return this.pseudo + "(" + this.classe + ") a : "
        + this.sante + " point de vie ! Et est au niveau : " + this.niveau +
        " !";
    }

    evoluer(){
        this.niveau++;
        console.log(this.pseudo + " passe au niveau " + this.niveau)
    }
    verifierSante(){
        if (this.sante <=0 ) {
            this.sante == 0;
            console.log(this.pseudo + " à perdue !")
        }
    }
}

class Magicien extends Personnage{
    constructor(pseudo){
        super(pseudo, "magicien", 170,90);
    }
    attaquer(Personnage){
        Personnage.sante -= this.attaque;
        console.log( this.pseudo + " attaque " + Personnage.pseudo +
        " en lancant un sort, et lui inflige " + this.attaque + " points de degat..");
        this.evoluer();
        Personnage.verifierSante();
    }
    coupSpecial(Personnage){
        Personnage.sante -= this.attaque * 5;
        console.log( this.pseudo + " attaque " + Personnage.pseudo + 
        " avec son coup special : Puissance des Arcannes. Et lui inflige " + this.attaque * 5 + " points de degat !");
        this.evoluer();
        Personnage.verifierSante();
    }
}

class Guerrier extends Personnage{
    constructor(pseudo){
        super(pseudo, "guerrier", 350, 50);
    }
    attaquer(Personnage){
        Personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + Personnage.pseudo + 
        " avec son epée et lui infliges : " + this.attaque +
        " points de degat..");
        this.evoluer();
        Personnage.verifierSante();
    }
    coupSpecial(Personnage){
        Personnage -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup special Miolnir" + Personnage.pseudo + " avec " + this.attaque*5 + " de degat !");
        this.evoluer();
        Personnage.verifierSante();
    }
}
var gandalf = new Magicien("gandalf");
var thor    = new Guerrier( "thor");

console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);