<?php
require_once 'User.php';
class Auteur extends User{
    private string $biographie;
    public function __construct(int $id, string $nom, string $prenom, string $email, string $role, string $biographie){
        parent::__construct($id, $nom, $prenom, $email, $role);
        $this->biographie = $biographie;
    }

      public function getRoleName(): string {
        return "Auteur publié";
    }

}
?>