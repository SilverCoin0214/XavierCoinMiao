(function () {
  var fileCache = Object.create(null);
  function readfile(filename, cb) {
    if (filename in fileCache) {
      return fileCache[filename];
    }

    var xhr = new XMLHttpRequest();
    xhr.open("get", filename);
    xhr.onload = () => {
      fileCache[filename] = xhr.responseText;
      cb(xhr.responseText);
    };
    xhr.send();
  }

  // require实现缓存
  require.cache = {};

  function require(filename) {
    if (require.cache.hasOwnProperty(filename)) {
      return require.cache[filename].exports;
    }

    var fileContent = fileCache[filename];
    var modFunc = new Function("require", "module", "exports", fileContent);

    var module = { exports: {} };

    require.cache[filename] = module;

    modFunc(require, module, module.exports);
    return module.exports;
  }

  function use(entryFile) {
    loadAllDeps(entryFile, () => {
      require(entryFile);
    });
  }

  function loadAllDeps(entryFile, cb) {
    readfile(entryFile, (entryCode) => {
      var deps = getAllDeps(entryCode);
      if (deps.length) {
        var loaded = 0;
        deps.forEach((dep) => {
          loadAllDeps(dep, () => {
            loaded++;
            if (loaded === deps.length) {
              cb();
            }
          });
        });
      } else {
        cb();
      }
    });
  }

  function getAllDeps(code) {
    var requireCalls = code.match(/require\s*\(\s*('|").*?\1\s*\)/g);
    if (!requireCalls) {
      return [];
    }
    return requireCalls.map((requireCall) => {
      return requireCall.match(/require\s*\(\s*('|")(.*?)\1\s*\)/)[2];
    });
  }

  var mainScript = document.querySelector("script[data-main");

  debugger;
  if (mainScript) {
    var main = mainScript.dataset.main;
    use(main);
  }
})();
