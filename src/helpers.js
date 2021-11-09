// the API returns strings with special html entities like &#39; for apostrophes
// this trick inserts the string into a textarea and returns its value, thereby decoding the html characters
export function decodeHtml(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}
