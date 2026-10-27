const API_url="http://localhost:8000/backend/api/controller/CategorieController.php";
const form=document.getElementById("form-thematique")
const btnSubmit=document.getElementById("btnSubmit");
let isloading=false;

function setLoadingState(isloading){
    
    if(isloading){
        btnSubmit.textContent="Enregistrement..."

    }
    else{
         btnSubmit.textContent="Enregistrer"
    }

}
form.addEventListener("submit",e=>{
    e.preventDefault();
    setLoadingState(true);

    fetch(API_url,{
        method: "POST",
        body: new FormData(form)
    })
    .then(response=>response.json())
    .then(data=>{
        showToast("Catégorie ajoutée avec succès", "success")
        form.reset();
    })
    .catch(error=>{
        showToast("Erreur lors de l'enregistrement", "error");
        console.error(error);
    })
    .finally(()=>{
        setLoadingState(false);
    })
});
function showToast(message,type="succes"){

    const container=document.getElementById("toast-container");
    const toastDiv=document.createElement("div");

    toastDiv.className="text-white px-4 py-3 rounded shadow"
    if(type=="succes"){
        toastDiv.className+="bg-green-500"
    }else{
        toastDiv.className+="bg-red-500"
    }
    toastDiv.textContent=message;
    
    container.appendChild(toastDiv);
        setTimeout(() => {
        toastDiv.classList.add("opacity-0");

        setTimeout(() => toastDiv.remove(), 300);
    }, 3000);
}
 

    
    
