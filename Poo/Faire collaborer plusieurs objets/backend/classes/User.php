<?php
class User{
    protected int $id;
    protected string $nom;
    protected string $prenom;
    protected string $email;
    protected string $role;

    public function __construct(int $id, string $nom, string $prenom, string $email, string $role){
        $this->id = $id;
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->email = $email;
        $this->role = $role;
    }

    public function getRoleName(): string{
        return "Visiteur anonyme";
    }
}

?>