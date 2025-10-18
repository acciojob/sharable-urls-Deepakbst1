// your code here
document.addEventListner('DOMContentLoaded',()=>{
	const baseUrl='https://localhost:8080/';

	
	const nameInput=dcoument.createElement('input');
	nameInput.type='text';
	nameInput.id='name';
	nameInput.name='name';
	nameInput.placeholder='Enter Name';
	

	const yearInput = document.createElement('input');
	yearInput.type = 'number';
    yearInput.id = 'year';
    yearInput.name = 'year';
    yearInput.placeholder = 'Enter year';

	const button = document.createElement('button');
	button.id = 'button';
	button.textContent = 'Submit';

	const urlDisplay=document.createElement('h3');
	urlDisplay.id='url';
	urlDisplay.textContenet=baseUrl;


	document.body.appendChild(nameInput);
	document.body.appendChild(document.createElement('br'));
	document.body.appendChild(yearInput);
	document.body.appendChild(document.createElement('br'));
	document.body.appendChild(button);
	document.body.appendChild(urlDisplay);

	body.addEventListner('click',()=>{
	const name = nameInput.value.trim();
    const year = yearInput.value.trim();

    const params = [];
    if (name) params.push(`name=${encodeURIComponent(name)}`);
    if (year) params.push(`year=${encodeURIComponent(year)}`);

    urlDisplay.textContent = params.length > 0 ? baseUrl + '?' + params.join('&') : baseUrl;
	});
	
});