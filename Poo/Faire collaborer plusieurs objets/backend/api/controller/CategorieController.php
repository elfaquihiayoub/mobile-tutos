<?php
require_once '../classes/GestionCategorie.php';
class CategorieController{
    public function listAllCategorie():void{
        $gestionCategorie = new GestionCategorie();
        $categories = $gestionCategorie->getAll();

        foreach($categories as $categorie){
            echo "Nom: " . $categorie->getNom() . "<br>";
        }
        
    }
}


$controller = new CategorieController();
$controller->listAllCategorie();
?>