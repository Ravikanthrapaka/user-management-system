

let users=[];
let usersConatiner=document.getElementById('usersContainer')
let alert=document.getElementById('alert')





function renderUsers(){

    usersConatiner.innerHTML='';//to not reapeat the usersfirst



   
    //we want to run this in form of loop

    // to get and use map and filters 
    //or use foreach

    users.forEach((user)=>{

        let div=document.createElement('div')

        let name=document.createElement('p')
        let email=document.createElement('p')
        let delBtn = document.createElement('button'); // DELETE BUTTON


        div.classList.add('user')
        name.innerText=user.name
        email.innerText=user.email
        let deleteIcon = document.createElement('span');
        deleteIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-trash3 delete-icon" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
        `;

        
         // Delete user on click
         deleteIcon.onclick = () => {
            users = users.filter(u => u.email !== user.email);
            renderUsers();
        };


        usersConatiner.appendChild(div)
        div.appendChild(name)
        div.appendChild(email)

        div.appendChild(deleteIcon);
      
        //if we added one and again try to add other one

        //its adding a first one again
        //we want tyhat one users will get only one time
        //not to repeat it again


        
    })
}


function doesUserExist(email){

    let user=users.filter((user)=>{

        return user.email == email;


    })

    return user.length > 0? true : false;
}

function hideAlert(){

    setTimeout(()=>{

    alert.classList.remove('success','danger')

    },2000)

}
function addUser(){


    let name=document.getElementById('name')
    let email=document.getElementById("email")

    if (name.value.trim() === '' || email.value.trim() === '') {
        alert.classList.add("danger");
        alert.innerText = 'Please fill in all fields!';
        hideAlert();
        return; // Stop the function if fields are empty
    }

    let user={

        name:name.value,
        email:email.value,
    }

    let userExist = doesUserExist(email.value);
    if(userExist == false){

        users.push(user)

        alert.classList.add("success")
        alert.innerText='User Added Successfully!'
        //to disapper remove
        hideAlert()
    

    }

    else{

        alert.classList.add("danger")
        alert.innerText='Email already exists!'
        //to disapper remove
        hideAlert()
    
    
    
    
    }


    
    renderUsers()

    // console.log(users)
    //here the array inside object we get
    // if we add new name
    //get values
    //visible want main page ob bottom


//good idea to distribute a seperate thing into a seperate function

    


}


