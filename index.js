module.exports = function gridllery(args) {
  /*
  containerClass:'gridllery',
  numberoffotos:106,
  folder:"static/",
  bigFolder:"big/",
  smallFolder:"small/"
  */
  console.log(args)
  var container = document.getElementsByClassName(args.containerClass)

  var i;
  for (i = 0; i < args.numberoffotos; i++) {
    var img = document.createElement('img');
    img.src = args.folder+args.smallFolder+i+'.jpg'
    container.appendChild(img);
  }

}
