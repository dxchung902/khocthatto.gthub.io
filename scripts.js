
//1 . lấy danh sách tất cả phần tử

// var listFilm = document.getElementsByClassName("halim-thumb");

//2. Duyet qua cac phan tu, lay attributes cua no ("title")
// co the dung vong for cung duong
// for(var i = 0; i < listFilm.length ; i++){
	// // lay ten film
		// var attr =  listFilm[i].getAttribute("title");
		 
// }

// viet su kien cho input: dat ID cho input
// chung ta su dung su kien onchange : co nghia la khi du lieu co thay doi thi thuc hien ham nao do
//- xac dinh phan tu input can add su kien bang ID
// su kien nay enter thi no moi chạy: change
var input =  document.getElementById("inpSearch")
input.addEventListener("change", function(){
	 Search();
});

// thêm sự kiện cho cái nút bên cạnh nữa
// nút bấm nút thì gọi cái sự kiện của input vừa viết bên trên
// đưa cả bộ sử lý vào 1 hàm
function  Search(){
	var input =  document.getElementById("inpSearch")
	// lay gia tri cua input
	var textSearch = input.value;
	textSearch= textSearch.toLowerCase()
	// giờ thì so sánh với các phan tu trong list film 
	var listFilm = document.getElementsByClassName("halim-thumb"); 
	for(var i = 0; i < listFilm.length ; i++){
		// lay ten film
		var tenPhim =  listFilm[i].getAttribute("title");
		// so sanh
		// đổi cả 2 thành chữ thường rồi mới so sánh đc
		tenPhim =  tenPhim.toLowerCase();
		var check = tenPhim.includes(textSearch);
		if( check ==true)
		{
			//alert  neu phim co chua ten Do 
			//alert(tenPhim);
			//-- giờ thì ẩn hiển cái box thôi
			// trong này là hiện
			 listFilm[i].style.display = 'block';
		}
		else{
			// ngoai nay la an
			 listFilm[i].style.display = 'none';
		}
	}
}

// gio them su kien truc tiep vao the button
