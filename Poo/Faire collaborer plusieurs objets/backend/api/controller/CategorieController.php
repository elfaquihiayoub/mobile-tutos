<?php
require_once __DIR__ . '/../../classes/GestionCategorie.php';
require_once __DIR__ . '/../../classes/auteur.php';
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

$users=[
    new User(1,"salmoune","ayman","ayman.salmoune@example.com","utilisateur"),
    new Auteur(2,"dupont","jean","jean.dupont@example.com","auteur","Biographie de Jean Dupont")
];
foreach($users as $user){
    echo "ROLE NAME: " . $user->getRoleName() . "<br>";
}
?>