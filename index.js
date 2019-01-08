import $ from 'jquery'

var gridllery = function gridllery(args) {
  /*
  containerClass:'gridllery',
  numberoffotos:106,
  folder:"static/",
  bigFolder:"big/",
  smallFolder:"small/"
  */
  console.log(args)
  var $container = $('.'+args.containerClass)
  console.log($container)
  var i;
  for (i = 1; i < (args.numberoffotos+1); i++) {
    var $img = $('<img class="block">')
    $img.attr('src', args.folder+args.smallFolder+i+'.jpg')
    $img.data('big', args.folder+args.bigFolder+i+'.jpg')
    $container.append($img)
  }

  $('<div class="big"></div>').appendTo('body')

  $container.find('.block').on('click',function(){
    var big = $(this).data('big')
  })
}

export default gridllery
