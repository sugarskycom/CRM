/**
 * Created by Administrator on 2017/4/24.
 */
/*
~function () {
  function getXHR() {
      var xhr = null;
      var ary = [
          function(){
          return new XMLHttpRequest;
      },function () {
          return new ActiveXObject("Microsoft.XMLHTTP");
      },function () {
          return new ActiveXObject("Msxml2.XMLHTTP");
      },function () {
          return  new ActiveXObject("Msxml3.XMLHTTP");
      }
      ];
      for(var i = 0; i< ary.length;i++){
          var cur = ary[i];
          try{
              xhr = cur();
              getXHR = cur;
              break;
          }catch (e){}
      }
      if(xhr = null){
          throw Error('您的浏览器版本太低了，请更新！');
      }
      return xhr;
  }
  function ajax(options) {
      var _defaultOptions = {
          url:'',
          type:'get',
          dataType:'json',
          async:true,
          success:null,
          cache:true,
          data:null
      };
      for(attr in options){
          if(options.hasOwnProperty(attr)){
              _defaultOptions[attr] = options[attr];
          }
      }
      var xhr = getXHR();
      xhr.open(_defaultOptions.type,_defaultOptions.url,_defaultOptions.async);
      if(_defaultOptions.type.toUpperCase() == 'GET' && !_defaultOptions.cache){
          if(_defaultOptions.url.indexOf('?')>(-1)){
              _defaultOptions.url += '&_ran=' + Math.random();
          }else{
              _defaultOptions.url += '?_ran=' + Math.random();
          }
      }
      xhr.responseType = _defaultOptions.dataType;
      xhr.onreadystatechange = function () {
          if(xhr.readyState == 4 && /^2\d{2}/.test(xhr.status)){
              _defaultOptions.success.call(this,this.response);
          }
      };
      xhr.send(_defaultOptions.data);
  }
  window.ajax = ajax;
}();*/
~(function () {
    function getXHR() {
        var xhr = null;
        var ary = [
            function(){
            return new XMLHttpRequest;
        },function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
        },function () {
            return new ActiveXObject("Msxml2.XMLHTTP");
        },function () {
            return  new ActiveXObject("Msxml3.XMLHTTP");
        }
        ];
        for( var i = 0 ; i < ary.length ; i++){
            var cur = ary[i];
            try{
                xhr = cur();
                getXHR = cur;
                break;
            }
            catch (e){}
        }
        if(xhr == null){
            throw Error('您的浏览器版本太低了，请更新至新版本！！！');
        }
        return xhr;
    }
    function ajax(options) {
        var _defaultOptions = {
            url : '',
            data : null,
            dataType : 'json',
            cache : true,
            success : null,
            type : 'get',
            async : true
        };
        for( attr in options){
            if(options.hasOwnProperty(attr)){
                _defaultOptions[attr] = options[attr];
            }
            var xhr = getXHR();
            xhr.open(_defaultOptions.type,_defaultOptions.url,_defaultOptions.async);
            if(_defaultOptions.url.toUpperCase() == 'GET' && !_defaultOptions.cache){
                if(_defaultOptions.url.indexOf('?') > (-1)){
                    _defaultOptions.url += '&_ran=' + Math.random();
                }else{
                    _defaultOptions.url += '?_ran=' + Math.random();
                }
            }
            xhr.responseType = _defaultOptions.dataType;
            xhr.onreadystatechange = function () {
                if(xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
                    _defaultOptions.success.call(this,this.response);
                }
            };
            xhr.send(_defaultOptions.data);
        }
    }
    window.ajax = ajax;
})();