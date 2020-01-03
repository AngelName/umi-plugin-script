export default function(api, options = {}) {
  const { path = "/config/index.js" } = options;
  if (Array.isArray(path)) {
    path.map(item => {
      if (typeof item !== "string")
        throw new TypeError("script 的 src 路径必须是字符串");
      api.addHTMLHeadScript({
        src: item
      });
    });
  } else {
    if (typeof path !== "string")
      throw new TypeError("script 的 src 路径必须是字符串");
    api.addHTMLHeadScript({
      src: path
    });
  }
}
