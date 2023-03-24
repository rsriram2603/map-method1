const sriram = [
{
	first_name: 'Mike',
	last_name: 'Sheriden',
	age:30
},
{
	first_name: 'Tim',
	last_name: 'Lee',
	age:45
},
{
	first_name: 'John',
	last_name: 'Carte',
	age:25
}
];
	var b=[];
sriram.map(function(x)
{
		b.push(x.last_name);
});
 console.log(b);