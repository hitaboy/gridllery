import $ from 'jquery'
import jQBridget from 'jquery-bridget'
import Packery from 'packery'
import 'node_modules/@hitaboy/gridllery/style.scss'

// make Packery a jQuery plugin
$.bridget( 'packery', Packery, $ );
// now you can use $().packery()

var gridllery = function gridllery(args) {
  /*
  containerClass:'gridllery',
  numberoffotos:106,
  folder:"static/",
  bigFolder:"big/",
  smallFolder:"small/"
  */
  var $container = $('.'+args.containerClass)
  var i;
  for (i = 1; i < (args.numberoffotos+1); i++) {
    var $thumb = $('<img class="gridllery_thumb">')
    var $item = $('<div class="gridllery_item"></div>')
    $thumb.attr('src', args.folder+args.smallFolder+i+'.jpg')
    $item.data('big', args.folder+args.bigFolder+i+'.jpg')
    $item.append($thumb)
    $container.append($item)
  }

  $container.parent().append('<div class="gridllery_big"><svg xmlns="http://www.w3.org/2000/svg" class="gridllery_big_close" width="24.707" height="24.707"><g data-name="Group 1" fill="none" stroke="#ffffff"><path data-name="Line 1" d="M24.354.354l-24 24"/><path data-name="Line 2" d="M.354.354l24 24"/></g></svg><div class="gridllery_big_container"></div><svg xmlns="http://www.w3.org/2000/svg" class="gridllery_big_next" width="12.707" height="24.707"><g data-name="Group 2" fill="none" stroke="#ffffff"><path data-name="Line 1" d="M12.354 12.354l-12 12"/><path data-name="Line 2" d="M.354.354l12 12"/></g></svg><svg xmlns="http://www.w3.org/2000/svg" class="gridllery_big_previous" width="12.707" height="24.707"><g data-name="Group 2" fill="none" stroke="#ffffff"><path data-name="Line 1" d="M.354 12.354l12-12"/><path data-name="Line 2" d="M12.354 24.354l-12-12"/></g></svg></div>')

  packAll()
  setTimeout(function(){
    packAll()
  }, 1000)

  $container.find('.gridllery_item').on('click',function(){
    var big = $(this).data('big')
    $('.gridllery_big').addClass('active')
    $('.gridllery_big_container').css('background-image','url('+big+')')
    $('.gridllery_item').removeClass('active')
    $(this).addClass('active')
  })

  $('.gridllery_big_close').on('click',function(){
    $('.gridllery_big').removeClass('active')
  })

  $('.gridllery_big_next').on('click',function(){
    var $next =$('.gridllery_item.active').next()
    if ($next.length) {
      $next.trigger('click')
    }else{
      $('.gridllery_item').first().trigger('click')
    }
  })

  $('.gridllery_big_previous').on('click',function(){
    var $prev =$('.gridllery_item.active').prev()
    if ($prev.length) {
      $prev.trigger('click')
    }else{
      $('.gridllery_item').last().trigger('click')
    }
  })

  function packAll() {
    $container.packery({
      itemSelector: '.gridllery_item',
      gutter: 10
    })
  }

}

export default gridllery
