
<?php 

class category {
    public $id;
    public $nom;
    public $couleur;
    public $icone;

    public function __construct($id,$nom,$couleur,$icone)
    {
        $this->nom=$nom;
        $this->id=$id;
        $this->couleur=$couleur;
        $this->icone=$icone;

    }
    public function afficher(){
        echo "le category est ".$this->nom." - ".$this->couleur." - ".$this->icone ;
    }

}


?>