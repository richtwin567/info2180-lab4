$('#search-btn').on('click', (e)=> { 
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/superheroes.php",
        dataType: "html",
        crossDomain:true,
        success: (data, status, obj) =>{
            alert(data);
        },
        error: (data,status,err)=>{
            alert('An error occurred');
        }
    });
    
});
