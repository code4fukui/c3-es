# c3-es

c3-es は、D3.jsベースの再利用可能なチャートライブラリ「c3」のES modulesバージョンです。c3はWebアプリケーションにより深く統合されたチャートを実現します。

## デモ
[デモ](https://code4fukui.github.io/c3-es/)

## 機能
- ES modules対応
- D3.js v5対応

## 使い方

```html
<div id="chart"></div>

<script type="module">
import { initC3 } from "https://code4fukui.github.io/c3-es/c3-es.js";

const c3 = initC3(window);

const chart = c3.generate({
  bindto: '#chart',
  data: {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ]
  }
});
</script>
```

## ドキュメント
- [Getting Started](http://c3js.org/gettingstarted.html) 
- [Examples](http://c3js.org/examples.html)
- [API Reference](https://c3js.org/reference.html)

## コミュニティ
- [Google Group](https://groups.google.com/forum/#!forum/c3js)
- [Gitter](https://gitter.im/c3js/c3)

## ライセンス
MIT