<?php
require_once 'Categorie.php';

class GestionCategorie {
    public function getAll(): array {
        return [
            new Categorie(1, "web development", "red", "fa-code"),
            new Categorie(2, "Design", "blue", "fa-paint-brush")
        ];
    }
}
?>