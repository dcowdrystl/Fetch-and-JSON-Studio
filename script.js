window.addEventListener("load", function() { 
    // let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json);
            const astronauts = document.getElementById("container");
            
            container.innerHTML = ` <div class = astronaut>
                                    <h3> ${json[0].firstName} ${json[0].lastName}</h3> 
                                    <ul>
                                    <li>Hours in space: ${json[0].hoursInSpace}</li>
                                    <li>Active: ${json[0].active}<li>
                                    <li>Skills: ${json[0].skills}</li>
                                     </ul>
                                    <img class = avatar src=${json[0].picture}></img>
                                    </div>`
                                    
                                    
                                    ;

        });
    });
});