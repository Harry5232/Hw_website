$("#language").change(
		function() {
			switch (parseInt($(this).val())) {

			default:
				break;
			case 0:
				$("#hwID option").remove();
				break;

			case 1: //Advanced Java
				$("#hwID option").remove();
				var array = [ "hw1", "hw2", "hw3"];

				$.each(array, function(i) {
					$("#hwID").append(
							$("<option value='" + array[i] + "'>" + array[i]
									+ "</option>"));
				});
				break;
			case 2: //ASP
				$("#hwID option").remove();
				var array = [ "hw1", "hw2"];
				// 
				$.each(array, function(i) {
					$("#hwID").append(
							$("<option value='" + array[i] + "'>" + array[i]
									+ "</option>"));
				});
				break;

			case 3: //XML
				$("#hwID option").remove();
				var array = ["hw1", "hw2", "hw3","hw4"];

				$.each(array, function(i) {
					$("#hwID").append(
							$("<option value='" + array[i] + "'>" + array[i]
									+ "</option>"));
				});
				break;
			}
		});