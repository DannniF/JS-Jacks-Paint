function configureListeners() {
    let images = document.getElementsByTagName('img')    // here we are creating a varible of 'images' which gets the img tag elements from our html page. 


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners
        document.getElementById(images[i].id).addEventListener('mouseover',addOpacity,) // we are grabing images from index.html. each image by their id. the addEventListener looks for the mouse going over. addOpacity we are calling the function which we are defining below
        document.getElementById(images[i].id).addEventListener('mouseout',removeOpacity,) //same as above for getElementById. for the addEventListener the event is a mouseout which checks if the mouse is no longer hovering over the element which is our image.  function is removeOpacity, and our optional boolean value which im not sure what it does but it is in the example code.
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    // if (!this.classList.contains('dim')){
        this.classList.add('dim')    //classList is getting .dim from styles.css. and is adding it too every element we have from getElementById which happens to be images[i].
        // Why does the example code have an if statement, not sure what it does or accomplishes. 
    // }    
//i had alot of trouble figureing this section out. until i checked the CSS of this project. i didnt know what was going 
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
    //  if (this.classList.contains('dim')){
        this.classList.remove('dim');
    // }
// same question as above for lines 13-16. 
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {   //here we are setting up a call back function. which will 
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':    
            price = '$14.99'
            colorName = 'Lime Green'
            updatePrice(colorName,price)
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price  
            price = '$11.14'
            colorName = 'Medium Brown'
            updatePrice(colorName,price)  
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price 
            price = '$22.99'
            colorName = 'Royal Blue'
            updatePrice(colorName,price) 
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            price = '13.42'
            colorName= 'Solid Red'
            updatePrice(colorName,price)
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price  
            price = '$21.98'
            colorName = 'Solid White'
            updatePrice(colorName,price)     
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price  
            price = '$4.99'
            colorName = 'Solid Black'
            updatePrice(colorName,price)      
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = '$8.22'
            colorName = 'Solid Cyan'
            updatePrice(colorName,price)
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price  
            price = '$11.99'
            colorName = 'Solid Purple'
            updatePrice(colorName,price) 
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '$14.99'
            colorName = 'Solid Yellow'
            updatePrice(colorName, price)
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price')
        // select element with corresponding id
        // display price
        colorPrice.textContent = price; // this code adds the price to the 
        
        let color = document.getElementById('color-name')// select element with corresponding id
        //display color name
        color.textContent = colorName; // these lines of code is what adds text to both h2. 
    }
    
}
