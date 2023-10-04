let allUsers = []

function newField(){
 let firstName = document.querySelector('#firstName');
 let name = document.querySelector('#lastName');
 let email = document.querySelector('#email');
 let telephone = document.querySelector('#telephone');

 if(firstName.value == "") {
    alert("firstname is required");
    return false;
 }
 if(name.value === "") {
    alert("name is required");
    return false;
 }
 if(email === "") {
    alert("name is required");
    return false;
 }
 if(telephone === "") {
    alert("name is required");
    return false;
 }
 
    return true;
 
}

let button = document.querySelector('.btn')
button.addEventListener('click', function(e) {
    e.preventDefault()

    let user = {
firstName : document.querySelector('#firstName').value,
name : document.querySelector('#lastName').value,
email : document.querySelector('#email').value,
telephone : document.querySelector('#telephone').value,

}
    allUsers.push(user);

    console.log(user)

    const ligne = document.querySelector(".employee-list")
    ligne.innerHTML += 
    `<tr> 
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.telephone}</td>
        <td>
        <a href="#" class="btn btn-warning btn-sm modifier">modifier</a>
        <a href="#" class="btn btn-danger btn-sm supprimer">supprimer</a>
        </td>
    </tr>`

    showAlert("Employee Added", "success");
})








