$("#search-btn").on("click", (e) => {
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/superheroes.php?query="+$('#search-box').val(),
		dataType: "html",
		crossDomain: true,
		success: (data, status, obj) => {
            $('#result').html(data);
		},
		error: (data, status, err) => {
			alert("An error occurred");
		},
	});
});

$('form').on('submit', (e)=> {
    e.preventDefault();
});