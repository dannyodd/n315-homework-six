var PRODUCTS = [
    {
        productTitle: "Hiking Daypack",
        productImgThumb: "backpack_150.jpg",
        productImgFull: "backpack_300.jpg",
        productDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        productDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        productPrice: 19.99,
    },
    {
        productTitle: "Hiking Boot",
        productImgThumb: "boot_150.jpg",
        productImgFull: "boot_300.jpg",
        productDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        productDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        productPrice: 39.99,  
    },
    {
        productTitle: "Folding Chair",
        productImgThumb: "chair_150.jpg",
        productImgFull: "chair_300.jpg",
        productDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        productDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        productPrice: 14.99,  
    },
    {
        productTitle: "Hammock Kit",
        productImgThumb: "hammock_150.jpg",
        productImgFull: "hammock_300.jpg",
        productDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        productDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        productPrice: 29.99,  
    },
    {
        productTitle: "Dual-Fuel Lantern",
        productImgThumb: "lantern_150.jpg",
        productImgFull: "lantern_300.jpg",
        productDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        productDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        productPrice: 18.99,  
    },
    {
        productTitle: "Purifier Bottle",
        productImgThumb: "purifier_150.jpg",
        productImgFull: "purifier_300.jpg",
        productDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        productDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        productPrice: 24.99,  
    },
    {
        productTitle: "Sleeping Bag",
        productImgThumb: "sleepingbag_150.jpg",
        productImgFull: "sleepingbag_300.jpg",
        productDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        productDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        productPrice: 34.99,  
    },
    {
        productTitle: "Camp Stove",
        productImgThumb: "stove_150.jpg",
        productImgFull: "stove_300.jpg",
        productDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        productDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        productPrice: 49.99,  
    },
    {
        productTitle: "2-Person Tent",
        productImgThumb: "tent_150.jpg",
        productImgFull: "tent_300.jpg",
        productDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        productDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        productPrice: 59.99,  
    },
    {
        productTitle: "Trekking Poles",
        productImgThumb: "trekpole_150.jpg",
        productImgFull: "trekpole_300.jpg",
        productDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        productDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        productPrice: 19.99,  
    },
];



function loadData(){
    $.each(PRODUCTS, function(index, product){
        $("#app").append(`<div id="${index}" class="productItem">
        <div class="productImg">
            <img src="images/thumb/${product.productImgThumb}" alt="${product.productTitle}">
        </div>
        <h4>${product.productTitle}</h4>
        <div class="briefPrice">
            <div class="briefDsc">
                ${product.productDscBrief}
            </div>
            <div class="price">Price: $${product.productPrice}</div>
        </div>
    </div>`);
        // console.log(product.productTitle);
        // console.log(product.productImgThumb);
        // console.log(product.productImgFull);
        // console.log(product.productDscBrief);
        // console.log(product.productDsc);
        // console.log(product.productPrice);
    })

    initListeners();

    // for (let i = 0; i < PRODUCTS.length; i++){
    //     console.log(PRODUCTS[i].productTitle)
    // }
    
}

function initListeners() {
    $(".productItem").click(function(e){
        let productIndex = e.currentTarget.id;

        //console.log(productIndex);
        $("#app").html(`<div class="productDetails">
            <div class="productDetailsImg">
                <img src="images/${PRODUCTS[productIndex].productImgFull}" alt="${PRODUCTS[productIndex].productTitle}">
            </div>
            <div class="productDetailsText">
                <h4>${PRODUCTS[productIndex].productTitle}</h4>
                <p>${PRODUCTS[productIndex].productDsc}</p>
                <h6>Price: $${PRODUCTS[productIndex].productPrice}</h6>
                <div class="closeBtn">CLOSE</div>
            </div>
        </div>`);

        addCloseListener();
    });
    // $("a").click(function(e){
    //     // This stores the id from the anchor tag
    //     let aID = e.currentTarget.id;
    //     MODEL.changePageContent(aID);
    // });
}

//Adds listener to reload the main page when closing a details page
function addCloseListener(){
    $(".closeBtn").click(function(){
        $("#app").html("");
        loadData();
    });
}


$(document).ready(function() {
    loadData();
    //MODEL.changePageContent("home");
});