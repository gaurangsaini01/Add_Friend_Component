const friendshipStatus = document.querySelector(".friendshipstatus");
const addBtn = document.querySelector(".add");
let click = 0;
addBtn.addEventListener('click',function(){
    if(click == 0){
        friendshipStatus.textContent = "Sent Request";
        friendshipStatus.style.color = 'green';
        addBtn.textContent = "Cancel Request"
        click = 1;
    }
    else{
        friendshipStatus.textContent = "Stranger";
        friendshipStatus.style.color = 'grey';
        addBtn.textContent = "Add Friend";
        click = 0;
    }
    
})

// console.log(friendshipStatus)