function action( varaibale ,GrandParent,parentID,child)
{

	if (varaibale=="Edit")
	{
		var modal = document.getElementById('myModal');
		var update = document.getElementById('update');
		var cancel = document.getElementById('cancel');
		modal.style.display = "block";

		update.onclick = function() {

			var edittext = $('#edittext').val();
			alert(edittext) ;

			GrandParent.text(edittext); 

			modal.style.display = "none";

		}
		cancel.onclick = function() {
			modal.style.display = "none";
		}
	}

	else if (varaibale=="Delete")
	{

		GrandParent.hide('50') ;
		parentID.hide() ;

	}
	
	else if(varaibale =="Complete")
	{
		top.completed  +=1 ;
		console.log(completed) ;
		child.hide('slow') ;
		child.next().hide('slow') ;
	}
	
	else if (varaibale =="Incomplete")
	{
		top.inCompleted  +=1 ;
		console.log(inCompleted) ;
		child.hide('slow') ;
		child.prev().hide('slow') ;
	}
}