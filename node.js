
//A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.

// http://www.w3schools.com/js/js_object_prototypes.asp
// http://www.w3schools.com/js/js_function_closures.asp
// http://www.w3schools.com/js/js_function_invocation.asp
// http://www.w3schools.com/js/js_function_closures.asp
// http://www.w3schools.com/js/tryit.asp?filename=tryjs_function_counter3




// var animals=[
//   {species:'Lion',name:'King'},
//   {species:'Whale',name:'Fail'}
//   ];

// for(var i=0;i<animals.length;i++){
//   console.log('#' + i + ' ' + animals[i].species+ ': ' + animals[i].name)
// }
    // functional javascript
// for(var i=0;i<animals.length;i++){
//   (function(i){
//     this.print=function(){
//       console.log('#' + i + ' ' + this.species+ ': ' + this.name);
//     };
//     this.print();
//   }).call(animals[i],i);
// }

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call



function generate_xml_sitemap(){
    // var urls = ['about.html', 'javascript.html', 'css.html', 'html5.html'];
    var urls=[
      {ns:"",priority:1},
      {ns:"/showcase",priority:0.5},
      {ns:"/comeontutors",priority:0.3}
    ]
    var root_path = 'http://langtime.me';
    
    var freq = 'monthly';
    var xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    for (var i in urls) {
        xml += '<url>';
        xml += '<loc>'+ root_path + urls[i].ns + '</loc>';
        xml += '<changefreq>'+ freq +'</changefreq>';
        xml += '<priority>'+ urls[i].priority +'</priority>';
        xml += '</url>';
        i++;
    }
    xml += '</urlset>';
    return xml;
}

console.log(generate_xml_sitemap())




// console.log("this is process.argv  "+process.argv)
// console.log(process.argv)
// a=process.argv +"1"+"2"+"3"
// console.log(a)
// process.env.xxx="xxx"
// console.log(process.env.xxx)
// process.env.MEADDED="what is this thinggggg?"
// console.log(process.env.MEADDED)
// console.log(process.env)

// console.log("this is process.env  "+process.env)
// console.log(process.env.PORT)
// console.log("this is process  "+ process)
// console.log(process)
// console.log(typeof process)


// process.argv.forEach(function(val, index, array) {
//   console.log(index + ': ' + val);
// });




//========== JS learn

// var string = "This is James Bond";
// var array = ["doc","my","desk"];
// console.log(array.join(" "));
// // console.log(string.split());

// var doh="doh";
// console.log(typeof doh);
// console.log(typeof doh.toUpperCase);
// console.log(typeof doh.what);
// console.log(doh.toUpperCase);
// console.log(doh.toUpperCase());

//============  page 68
// console.log(typeof [1,2]+"   wow, surprise, it's correct")
// var a = [];
// console.log(typeof a);
// var b = "this is a string"
// console.log(b)
// console.log(typeof b)



// var object={
//   left:1,
//   right:2
// }

// console.log("left" in object);
// delete object.left;
// console.log("left" in object);
// object.right=undefined;
// console.log(object.right)
// console.log(object)
// var a = object.right;
// console.log("a is  "+ a);
// object.right=2;
// console.log(object.right);
// console.log("a is  " +a )

