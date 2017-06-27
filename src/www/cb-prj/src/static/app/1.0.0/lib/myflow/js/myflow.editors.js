(function($){
var myflow = $.myflow;

$.extend(true, myflow.editors, {
  inputEditor : function(){
    var _props,_k,_div,_src,_r;
    this.init = function(props, k, div, src, r){
      _props=props; _k=k; _div=div; _src=src; _r=r;
      
      var tVal
      if (_k == 'sourceNode') {
        console.log('_src.sourceToTarget() is:')
        console.log(_src.sourceToTarget())
        tVal = _src.sourceToTarget().source
      } else if (_k == 'targetNode') {
        tVal = _src.sourceToTarget().target
      } else {
        tVal = _props[_k].value
      }
      $('<input class="form-control"/>').val(tVal)
      .prop('readOnly', _props[_k].readOnly != undefined ? _props[_k].readOnly:false)
      .change(function(){
        _props[_k].value = $(this).val();
      }).appendTo('#'+_div).click(function(){
        if (_props[_k].click) {
          _props[_k].click($(this));
        }
      });
      
      $('#'+_div).data('editor', this);

      if (_props[k].hide) {
        $('#'+_div).parents('.form-group').hide();
      }
    };
    this.destroy = function(){
      $('#'+_div+' input').each(function(){
        _props[_k].value = $(this).val();
      });
    }
  },
  jsTreePanelEditor : function(store) {
    var _props,_k,_div,_src,_r;
    this.init = function(props, k, div, src, r) {
      _props=props; _k=k; _div=div; _src=src; _r=r;
      
      var storeName = 'store';
      var treeObj = $('<input type="text" class="form-control input-sm" data-jstreeloader-target="jstree-panel"/>')
        .data('keyType', _props[_k].keyType)
        .data('jstreemultiselectStore', storeName);
      treeObj.appendTo('#' + _div);

      treeObj.jstreemultiselect({
        store: store
      }, function() {
        treeObj.jstreemultiVal(_props[_k].value);
      });

      $($('button.dropdown-toggle'), $('#' + _div)).click(function() {
        if (_props[_k].click) {
          _props[_k].click($('#' + _div), _props[_k]);
        }
      });

      $('#'+_div).data('editor', this);
    };
    this.destroy = function() {
      $('#'+_div+' input').each(function() {
        _props[_k].value = $(this).val();
      });
    }
  },
  selectEditor : function(arg) {
    var _props,_k,_div,_src,_r;
    this.init = function(props, k, div, src, r) {
      _props=props; _k=k; _div=div; _src=src; _r=r;
      var sle = $('<select class="form-control"/>').val(_props[_k].value).change(function() {
        if (_props[_k].change) {
          _props[_k].change($(this));
        }
        _props[_k].value = $(this).val();
      }).appendTo('#'+_div);

      if(typeof arg === 'string'){
        
      }else {
        for(var idx=0; idx<arg.length; idx++){
          sle.append('<option value="'+arg[idx].value+'">'+arg[idx].name+'</option>');
        }
        sle.val(_props[_k].value);
      }
      if (_props[k].hide) {
        $('#'+_div).parents('.form-group').hide();
      }

      $('#'+_div).data('editor', this);
    };
    this.destroy = function(){
      $('#'+_div+' input').each(function(){
        _props[_k].value = $(this).val();
      });
    };
  },
  multiSelectEditor : function(arg){
    var _props,_k,_div,_src,_r;
    this.init = function(props, k, div, src, r){
      _props=props; _k=k; _div=div; _src=src; _r=r;

      var sle = $('<select class="form-control" multiple/>').val(_props[_k].value)
        .appendTo('#'+_div).select2().on('change', function(){
          _props[_k].value = $(this).val() == null ? '':$(this).val().join();
      });

      if(typeof arg === 'string') {
        
      }else {
        if (arg) {
          for(var idx=0; idx<arg.length; idx++) {
            sle.append('<option value="'+arg[idx].code+'">'+arg[idx].name+'</option>');
          }
          sle.val(_props[_k].value.split(',')).trigger('change');
        }
      }
      $('#'+_div).data('editor', this);
    };
    this.destroy = function(){
      $('#'+_div+' input').each(function(){
        //_props[_k].value = $(this).val();
      });
    };
  },
  radioEditor : function(arg){
    var _props,_k,_div,_src,_r;
    this.init = function(props, k, div, src, r){
      _props=props; _k=k; _div=div; _src=src; _r=r;

      var sle = $('<select class="form-control"/>')/*.val(props[_k].value)*/.change(function(){
        _props[_k].value = $(this).val();
      }).appendTo('#'+_div);

      if(typeof arg === 'string'){
        
      }else {
        for(var idx=0; idx<arg.length; idx++){
          sle.append('<option value="'+arg[idx].value+'">'+arg[idx].name+'</option>');
        }
        sle.val(_props[_k].value);
      }

      $('#'+_div).data('editor', this);
    };
    this.destroy = function(){
      $('#'+_div+' input').each(function(){
        _props[_k].value = $(this).val();
      });
    };
  }
});

})(jQuery);