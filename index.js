require("sdk/context-menu").Item({
  label: "Baixar Legenda",
  contentScript: 'self.on("click", function (node, data) {' +
                 'var UrlDoSite = node.parentElement.href;'+
                 ' if (UrlDoSite == undefined) UrlDoSite = node.href;'+
                 ' if (UrlDoSite == undefined) UrlDoSite = node.previousSibling.href;'+
                 ' if (UrlDoSite == undefined) UrlDoSite = node.parentNode.previousSibling.href;'+
					'minhaUrl = UrlDoSite.replace("download","downloadarquivo");'+
                 '  window.location.href = minhaUrl;' +
                 '});'
});