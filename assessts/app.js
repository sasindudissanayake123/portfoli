const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.github.com/users/nethsarasahan61/repos?sort=updated&per_page=100", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        function checkOutWebsite(card){
            if(card=="card-01"){
                console.log("1");                
            }else if(card=="card-02"){
                console.log("2");                
            }else if(card=="card-03"){
                console.log("3");                
            }else if(card=="card-04"){
                console.log("4");                
            }
        }
        console.log(result);
        
        document.getElementById("card-01").innerHTML=`        
            <div class="card shadow-sm rounded-5">
                <img src="assessts/imgs/Lawfirm.png" alt="Card Image" class="card-img-top rounded-top-5" height="250" style="object-fit: cover; width: 100%"/>
                    <div class="card-body">
                        <h5 class="card-title">${result[1].name}</h5>
                        <p class="card-text">
                            ${result[1].description}
                        </p>
                        <div style="display: flex; align-items: center; justify-content: space-evenly;">
                            <a href="${result[1].html_url}" target="_blank" class="btn-checkOut-link" style="text-decoration: none;">GitHuB Link</a>
                            <a href="https://nethsarasahan61.github.io/${result[1].name}/" target="_blank" class="btn-checkOut" style="text-decoration: none;">CheckOut</a>
                        </div>
                    </div>
                </div>
        `
        document.getElementById("card-02").innerHTML=`
            <div class="card shadow-sm rounded-5">
                <img src="assessts/imgs/weatherApp.png" alt="Card Image" class="card-img-top rounded-top-5" height="250" style="object-fit: cover; width: 100%"/>
                    <div class="card-body">
                        <h5 class="card-title">${result[2].name}</h5>
                        <p class="card-text">
                            ${result[2].description}
                        </p>
                        <div style="display: flex; align-items: center; justify-content: space-evenly;">
                            <a href="${result[2].html_url}" target="_blank" class="btn-checkOut-link" style="text-decoration: none;">GitHuB Link</a>
                            <a href="https://nethsarasahan61.github.io/${result[2].name}/" target="_blank" class="btn-checkOut" style="text-decoration: none;">CheckOut</a>
                        </div>
                    </div>
                </div>
        `
        document.getElementById("card-03").innerHTML=`
            <div class="card shadow-sm rounded-5">
                <img src="assessts/imgs/chatBot.png" alt="Card Image" class="card-img-top rounded-top-5" height="250" style="object-fit: cover; width: 100%"/>
                    <div class="card-body">
                        <h5 class="card-title">${result[3].name}</h5>
                        <p class="card-text">
                            ${result[3].description}
                        </p>
                        <div style="display: flex; align-items: center; justify-content: space-evenly;">
                            <a href="${result[3].html_url}" target="_blank" class="btn-checkOut-link" style="text-decoration: none;">GitHuB Link</a>
                            <a href="https://nethsarasahan61.github.io/${result[3].name}/" target="_blank" class="btn-checkOut" style="text-decoration: none;">CheckOut</a>
                        </div>
                    </div>
                </div>
        `
        document.getElementById("card-04").innerHTML=`
            <div class="card shadow-sm rounded-5">
                <img src="assessts/imgs/taxCalc.png" alt="Card Image" class="card-img-top rounded-top-5" height="250" style="object-fit: cover; width: 100%"/>
                    <div class="card-body">
                        <h5 class="card-title">${result[18].name}</h5>
                        <p class="card-text">
                            ${result[18].description}
                        </p>
                        <div style="display: flex; align-items: center; justify-content: space-evenly;">
                            <a href="${result[18].html_url}" target="_blank" class="btn-checkOut-link" style="text-decoration: none;">GitHuB Link</a>
                            <a href="https://nethsarasahan61.github.io/${result[18].name}/" target="_blank" class="btn-checkOut" style="text-decoration: none;">CheckOut</a>
                        </div>
                    </div>
                </div>
        `
    })
    .catch((error) => console.error(error));

function btnSendOnAction(){
    const name=document.getElementById("user-name").value
    const email=document.getElementById("user-email").value
    const msg=document.getElementById("msg-area").value
    if(name===""){
        return;
    }else if(email===""){
        return;
    }else if(msg===""){
        return;
    }
    
    Swal.fire({
    title: "Message Successfully Sent!",
    icon: "success",
    showClass: { popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
    ` },
    hideClass: { popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
    ` }
    });        
    document.getElementById("user-name").value=""
    document.getElementById("user-email").value=""
    document.getElementById("msg-area").value=""
}
