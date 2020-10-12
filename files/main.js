// var scripts = document.getElementsByTagName('script');
// var myScript = scripts[scripts.length - 1];

// var queryString = myScript.src.replace(/^[^\?]+\??/, '');

// var params = parseQuery(queryString);

// function parseQuery(query) {
//     var Params = {};
//     if (!query) return Params; // return empty object
//     var Pairs = query.split(/[;&]/);
//     for (var i = 0; i < Pairs.length; i++) {
//         var KeyVal = Pairs[i].split('=');
//         if (!KeyVal || KeyVal.length != 2) continue;
//         var key = unescape(KeyVal[0]);
//         var val = unescape(KeyVal[1]);
//         val = val.replace(/\+/g, ' ');
//         Params[key] = val;
//     }
//     return Params;
// }

function showPubs(id) {
  if (id == 0) {
    document.getElementById('selected').style.display = 'block';
    document.getElementById('mlsystems').style.display = 'none';
    document.getElementById('scalableml').style.display = 'none';
    document.getElementById('automl').style.display = 'none';
    document.getElementById('largemlapps').style.display = 'none';
    document.getElementById('all').style.display = 'none';

    document.getElementById('button_selected').style = 'text-decoration:underline;color:#000000';
    document.getElementById('button_mlsystems').style = '';
    document.getElementById('button_scalableml').style = '';
    document.getElementById('button_automl').style = '';
    document.getElementById('button_largemlapps').style = '';
    document.getElementById('button_all').style = '';
  } else if (id == 1) {
    document.getElementById('selected').style.display = 'none';
    document.getElementById('mlsystems').style.display = 'block';
    document.getElementById('scalableml').style.display = 'none';
    document.getElementById('automl').style.display = 'none';
    document.getElementById('largemlapps').style.display = 'none';
    document.getElementById('all').style.display = 'none';

    document.getElementById('button_selected').style = '';
    document.getElementById('button_mlsystems').style = 'text-decoration:underline;color:#000000';
    document.getElementById('button_scalableml').style = '';
    document.getElementById('button_automl').style = '';
    document.getElementById('button_largemlapps').style = '';
    document.getElementById('button_all').style = '';
  } else if (id == 2) {
    document.getElementById('selected').style.display = 'none';
    document.getElementById('mlsystems').style.display = 'none';
    document.getElementById('scalableml').style.display = 'block';
    document.getElementById('automl').style.display = 'none';
    document.getElementById('largemlapps').style.display = 'none';
    document.getElementById('all').style.display = 'none';

    document.getElementById('button_selected').style = '';
    document.getElementById('button_mlsystems').style = '';
    document.getElementById('button_scalableml').style = 'text-decoration:underline;color:#000000';
    document.getElementById('button_automl').style = '';
    document.getElementById('button_largemlapps').style = '';
    document.getElementById('button_all').style = '';
  } else if (id == 3) {
    document.getElementById('selected').style.display = 'none';
    document.getElementById('mlsystems').style.display = 'none';
    document.getElementById('scalableml').style.display = 'none';
    document.getElementById('automl').style.display = 'block';
    document.getElementById('largemlapps').style.display = 'none';
    document.getElementById('all').style.display = 'none';

    document.getElementById('button_selected').style = '';
    document.getElementById('button_mlsystems').style = '';
    document.getElementById('button_scalableml').style = '';
    document.getElementById('button_automl').style = 'text-decoration:underline;color:#000000';
    document.getElementById('button_largemlapps').style = '';
    document.getElementById('button_all').style = '';
  } else if (id == 4) {
    document.getElementById('selected').style.display = 'none';
    document.getElementById('mlsystems').style.display = 'none';
    document.getElementById('scalableml').style.display = 'none';
    document.getElementById('automl').style.display = 'none';
    document.getElementById('largemlapps').style.display = 'block';
    document.getElementById('all').style.display = 'none';

    document.getElementById('button_selected').style = '';
    document.getElementById('button_mlsystems').style = '';
    document.getElementById('button_scalableml').style = '';
    document.getElementById('button_automl').style = '';
    document.getElementById('button_largemlapps').style = 'text-decoration:underline;color:#000000';
    document.getElementById('button_all').style = '';
  } else if (id == 10) {
    document.getElementById('selected').style.display = 'none';
    document.getElementById('mlsystems').style.display = 'none';
    document.getElementById('scalableml').style.display = 'none';
    document.getElementById('automl').style.display = 'none';
    document.getElementById('largemlapps').style.display = 'none';
    document.getElementById('all').style.display = 'block';

    document.getElementById('button_selected').style = '';
    document.getElementById('button_mlsystems').style = '';
    document.getElementById('button_scalableml').style = '';
    document.getElementById('button_automl').style = '';
    document.getElementById('button_largemlapps').style = '';
    document.getElementById('button_all').style = 'text-decoration:underline;color:#000000';
  }
}
