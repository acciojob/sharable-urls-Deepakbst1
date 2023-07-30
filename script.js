// your code here
 document.getElementById("button").addEventListener("click", function(){
	  const name = document.getElementById("name").value;
      const year = document.getElementById("year").value;

	  const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
	  const urlElement = document.getElementById("url");
	 urlElement.textContent = "https://localhost:8080/" + queryString;

 })