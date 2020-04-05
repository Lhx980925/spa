$(function() {
  console.log("hello world");
  //get dom elem
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area');

  /* calc button click event */
  $btnCal.click(function(){
    if(!validate($width) || !validate($height)) return;
  //get value
  var w=Number($width.val()),
      h=Number($height.val());

  //calculate
  var p=(w+h)*2,
      a=w*h;
      
  var p2=Math.round(p*Math.pow(10,2))/Math.pow(10,2),
      a2=Math.round(a*Math.pow(10,2))/Math.pow(10,2);

  //output
  $perimeter.val(p2);
  $area.val(a2);
  });

  $width.keypress(function(e) {
    filterKey(e);
  });

  $height.keypress(function(e) {
    filterKey(e);
  });

  function filterKey(e) {
    var pos = e.target.selectionStart,
        content = e.target.value;

    if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)) {
      e.preventDefault();
      return;
    }

    if(e.key === '.') {
      if(pos === 0 || content.indexOf('.') !== -1) {
        e.preventDefault();
        return;
      }
      if(pos  === 1 && content.substring(0,1) === '-') {
        e.preventDefault();
        return;
      }
    }
  
    if(e.key === 'e') {
      if(pos === 0 || content.indexOf('e') !== -1 || content.indexOf('E') !== -1) {
        e.preventDefault();
        return;
      }

      if(pos === 1 && content.substring(0,1) === '-') {
        e.preventDefault();
        return;
      }
    }
  
    if(e.key === 'E') {
      if(pos === 0 || content.indexOf('e') !== -1 || content.indexOf('E') !== -1) {
        e.preventDefault();
        return;
      }

      if(pos === 1 && content.substring(0,1) === '-') {
        e.preventDefault();
        return;
      }
    }
  }

  function validate(field){
    var $data    = $(field);
        $message = $($(field).selector + '-validation-message');
    if($data.val() === '') {
      $message.html('不能为空！');
      $data.select();
      return false;
    }

    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())) {
      $message.html('必须是数值');
      $data.select();
      return false;
    }

    if(Number($data.val()) < 0) {
      $message.html('必须大于零');
      $data.select();
      return false;
    }

    $message.html('');
    return true;
  }
})
