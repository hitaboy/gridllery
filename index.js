module.exports = function gridllery(args) {
  /*
  containerClass:'gridllery',
  numberoffotos:106,
  folder:"static/",
  bigFolder:"big/",
  smallFolder:"small/"
  */
  console.log(args)
  var containers = document.getElementsByClassName(args.containerClass)
  var container = containers[0]
  console.log(container)
  var i;
  for (i = 0; i < args.numberoffotos; i++) {
    var img = document.createElement('img');
    img.src = args.folder+args.smallFolder+i+'.jpg'
    container.appendChild(img);
  }

}
