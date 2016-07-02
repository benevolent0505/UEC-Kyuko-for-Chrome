document.addEventListener('DOMContentLoaded', function() {
  var xhr = new XMLHttpRequest();
  var parser = new DOMParser();

  xhr.open("GET", "http://kyoumu.office.uec.ac.jp/kyuukou/kyuukou.html", true);
  xhr.overrideMimeType('text/plain; charset=shift_jis');

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var kyuko = parser.parseFromString(xhr.responseText, "text/html");
      var table = kyuko.getElementsByTagName('table')[0];

      document.getElementById('insert').innerHTML = table.innerHTML;

      var rows = table.rows;
      var lessons = [];
      var tdArray = '';

      for (var i = 1; i < rows.length; i++) {
        tdArray = [].slice.call(rows[i].cells);

        lessons.push(
          new Lesson(tdArray[0], tdArray[1], tdArray[2],
                     tdArray[3], tdArray[4], tdArray[5])
        );
      }

      var test = new Lesson('テスト', 'test', 'test',
                            'test', 'test', 'test');
      lessons.push(test);
      chrome.storage.local.set({'lessons': lessons});
    }
  }
  xhr.send();
});
