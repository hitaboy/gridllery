import $ from 'jquery'
module.exports = function gridllery(args) {
  /*
  containerClass:'gridllery',
  numberoffotos:106,
  folder:"static/",
  bigFolder:"big/",
  smallFolder:"small/"
  */
  console.log(args)
  var $container = $(args.containerClass)
  console.log($container)
  var i;
  for (i = 0; i < args.numberoffotos; i++) {
    var img = $('<img class="block">')
    img.attr('src', args.folder+args.smallFolder+i+'.jpg')
    $container.append(img)
  }

}
