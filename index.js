// // // es 6dan oldin

// // function polygon(height,width){
// //     this.name="Polygon";
// //     this.height = height; 
// //     this.width = width;
    
// // }

// // // metod es 6 dan oldin

// // polygon.prototype.sayname = function(){
// //     console.log("hI My name is",this.name);
// // }

// // // shu tepadagi klassni instans hosil qilish



// // let Polygon = new polygon(200,200);

// // Polygon.sayname();
// // // let Polygon1 = new polygon(250,250);
// // // let Polygon2 = new polygon(300,300);


// // //



// // class Polygon2{
// //     constructor(height,width){
// //         this.name="nimadur";
// //         this.width=width;
// //         this.height=height;
// //     }
// //     Sayname(){
// //         console.log("hello my name is ",this.name
// //         );
// //     }
// // }

// // let p = new Polygon2 (300,300);
// // p.Sayname();
// var rang=["orange","#ddd","yellow","green","blue"]; 

// window.onload=function(){
   
//     let g=JSON.parse(localStorage.getItem('qiymat'));
//     g=parseInt(g);

//     sum=g;

//      for (let i = 1; i <= g; i++) {
//         $("#adding").append("<h3 class=i"+i+">Salom"+i+"</h3>");
        
         
//      }
// }


// let sum=0;
// $("#add").click(function(){

//     sum++;
//     $("#adding").append("<h3 class=i"+sum+">Salom"+sum+"</h3>");

//     let arr1 = sum;
//     let str = JSON.stringify(arr1);
//     localStorage.setItem("qiymat",str);
    

// })

// $("#remove").click(function(){

//     sum--;
//     $("#adding h3").last().remove();

//     let arr1 = sum;
//     let str = JSON.stringify(arr1);
//     localStorage.setItem("qiymat",str);
    

// })


$('.blu').click(function(){
    $('.main').toggleClass("activ");
    $('.blu').toggleClass("activ2");
    $('.barmenu').fadeToggle(500).delay(100);
    
})



















