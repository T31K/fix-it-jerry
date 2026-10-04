// 301 fixitjerry.com/* → www.fixitjerry.com/* (the canonical host served by the `fij` Worker).
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.hostname = "www.fixitjerry.com";
    return Response.redirect(url.toString(), 301);
  },
};
