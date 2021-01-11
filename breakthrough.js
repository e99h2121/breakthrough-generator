    var segmenter = new TinySegmenter(); //using http://chasen.org/~taku/software/TinySegmenter/
    function breakthrough() {
        var segmenter = new TinySegmenter();
        var segs = segmenter.segment(document.getElementById('origin').value);
        var conv = "";
        for (const elem of segs) {
            var str = elem;
            str = str.replace("\n^", "�B\n^");
            str = str.replace("�@", "�B");
            str = str.replace("�ł�", "�ł���");
            str = str.replace("�ł���", "�ł�����");
            str = str.replace("�܂�", "�܂��܂���");
            str = str.replace("����", "�����ł���");
            str = str.replace("��", "���̂ł���");
            str = str.replace("�B", "�ł���܂��܂����B");
            conv = conv + str;
        }

        const messages = ['�������������d���ł���܂����B',
                          '�{���̎d���Ƃ́A�����傫�Ȗ��ɒ��ʂ����Ƃ�����n�܂�B',
                          '�v���A�������̓v���ł���ׂ��|�W�V�����̎d���l�̖����o�△�_�o�����u�܂ʂ��v�ƌĂт܂��B',
                          '�Ⴆ�΁u�ǂ��ł��Ȃ���g�ѓd�b�v�Ƃ����̂��l����Ƃ��܂��傤�B����͗��z�Ƃ��Č����΁A���E���̂ǂ��ɍs���Ă��Ȃ���A�n�����낤�������R�̂Ă��؂񂾂낤���A�����m�̂ǐ^�񒆂��낤���ʘb���ł�����Ă����̂����z���Ⴀ��܂��񂩁H'];
        const messageNo = Math.floor( Math.random() * messages.length);
        //const suffixNo = Math.floor( Math.random() * suffix.length);

        var mackytext = "";
    	//mackytext =  mackytext + '\n' + document.getElementById('origin').value.replace(/�B/g, suffix[suffixNo]);
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
