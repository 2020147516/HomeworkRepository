fetch('product.json')
  .then(response => response.json())
  .then(data => {
    const products = data.product;
    const num = products.length;
    for(let i=0; i<num; i++){
        pro_list = document.querySelectorAll(".image_info");
        pro_list[i].innerHTML="<h2> "+products[i].name+"</h2><br><p>Category: "+products[i].category+"<br><br>Price: $"+products[i].price+"<br><br>Product Info: "+products[i].info+"</p>";
    }
  })
  .catch(error => {
    console.log('데이터를 불러오는 중 오류가 발생했습니다:', error);
  });

function info(a){
    info_list = document.querySelectorAll(".image_info");
    if(info_list[a].style.opacity == 0){
        info_list[a].style.opacity = 1;
    }
    else{
        info_list[a].style.opacity = 0;
    }
}