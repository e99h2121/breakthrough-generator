    var segmenter = new TinySegmenter(); //using http://chasen.org/~taku/software/TinySegmenter/
    function breakthrough() {
        var segmenter = new TinySegmenter();
        var segs = segmenter.segment(document.getElementById('origin').value);
        var conv = "";
        for (const elem of segs) {
            var str = elem;
            str = str.replace("\n^", "。\n^");
            str = str.replace("　", "。");
            str = str.replace("です", "ですぞ");
            str = str.replace("でした", "でしたぞ");
            str = str.replace("ます", "ますまいか");
            str = str.replace("さい", "さいですぞ");
            str = str.replace("た", "たのですぞ");
            str = str.replace("。", "でありますまいか。");
            conv = conv + str;
        }

        const messages = ['問題解決こそが仕事でありますぞ。',
                          '本当の仕事とは、何か大きな問題に直面したときから始まる。',
                          'プロ、もしくはプロであるべきポジションの仕事人の無自覚や無神経さを「まぬけ」と呼びます。',
                          '例えば「どこでもつながる携帯電話」というのを考えるとしましょう。これは理想として言えば、世界中のどこに行ってもつながる、地下だろうが高い山のてっぺんだろうが、太平洋のど真ん中だろうが通話ができるっていうのが理想じゃありませんか？'];
        const messageNo = Math.floor( Math.random() * messages.length);
        //const suffixNo = Math.floor( Math.random() * suffix.length);

        var mackytext = "";
    	//mackytext =  mackytext + '\n' + document.getElementById('origin').value.replace(/。/g, suffix[suffixNo]);
    	mackytext =  conv + '\n';
        mackytext =  mackytext + messages[messageNo] + '\n';
    	document.getElementById('mackytext').value = mackytext;

    }
    function tweet() {
        var left = Math.round(window.screen.width / 2 - 275);
        var top = (window.screen.height > 420) ? Math.round(window.screen.height / 2 - 210) : 0;
        window.open(
            "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById("mackytext").value + " at: https://e99h2121.github.io/breakthrough-generator/" ),
            null,
            "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + left + ",top=" + top);
    }
