window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function() {
    var list = document.getElementById('list');

    list.style.height = (parseInt(document.getElementById('flat-black-player-container').offsetHeight) - 135) + 'px';

    document.getElementById('list-screen').classList.remove('slide-out-top');
    document.getElementById('list-screen').classList.add('slide-in-top');
    document.getElementById('list-screen').style.display = 'block';
});

/*
  Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function() {
    document.getElementById('list-screen').classList.remove('slide-in-top');
    document.getElementById('list-screen').classList.add('slide-out-top');
    document.getElementById('list-screen').style.display = 'none';
});

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function(e) {
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage(parseFloat(x) / parseFloat(this.offsetWidth) * 100);
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

var songs = [
    {
        'name': '在你的雙眼遇見',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/在你的雙眼遇見.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '湖心里的船',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/湖心里的船.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '微光',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/微光.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '星河',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/星河.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '後來',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/後來.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '把話說完',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/把話說完.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '象牙舟',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/象牙舟.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '吳青峰翻唱合輯',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/吳青峰翻唱合輯.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '皆可',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/皆可.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '蘇打綠串燒',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/蘇打綠串燒.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '他舉起右手點名',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/他舉起右手點名.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '痛快的哀艷',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/痛快的哀艷.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '彼此',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/彼此.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '距離',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/距離.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '可惜不是你',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/可惜不是你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '分手快樂',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/分手快樂.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '孤單北半球',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/孤單北半球.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '寧夏',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/寧夏.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '曖昧',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/曖昧.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '我們都傻',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/我們都傻.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '心牆',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/心牆.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '小幸運',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/小幸運.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '那些年',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/那些年.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '失落沙洲',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/失落沙洲.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '浮生未歇',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/浮生未歇.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '誰 廖俊濤',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/誰 廖俊濤.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '絲路',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/絲路.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '偶陣雨',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/偶陣雨.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '無條件為你',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/無條件為你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '如果有一天',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/如果有一天.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Fly away',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/Fly away.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '瘦瘦的',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/瘦瘦的.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '小手拉大手',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/小手拉大手.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '暖暖',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/暖暖.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '兒歌',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/兒歌.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '親親',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/親親.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '夏天的風',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/夏天的風.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '不想睡',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/不想睡.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '缺氧',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/缺氧.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '青春住了誰',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/青春住了誰.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '年輪說',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/年輪說.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '路過人間',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/路過人間.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '微加幸福',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/微加幸福.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '獨家記憶',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/獨家記憶.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '好朋友只是朋友',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/好朋友只是朋友.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '美好的旅行',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/美好的旅行.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '如果有如果',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/如果有如果.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '你的情歌',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/你的情歌.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '給我你的愛',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/給我你的愛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '成全',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/成全.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '浪費',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/浪費.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '煙火裡的塵埃',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/煙火裡的塵埃.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '蜉蝣',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/蜉蝣.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '孩子',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/孩子.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '與火星的孩子對話',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/與火星的孩子對話.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '易燃易爆炸',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/易燃易爆炸.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '無聊人',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/無聊人.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '我離孤單幾公里',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/我離孤單幾公里.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '荒野魂鬥羅',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/荒野魂鬥羅.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '地球之鹽',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/地球之鹽.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '你要相信這不是最後一天',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/你要相信這不是最後一天.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '我的滑板鞋2016',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/我的滑板鞋2016.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '異類',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/異類.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '智商二五零',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/智商二五零.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '五月天',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/五月天.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '私奔到月球',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/私奔到月球.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '別說對不起',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/別說對不起.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '天堂',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/天堂.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '第一次',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/第一次.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '聽袁惟仁彈吉他',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/聽袁惟仁彈吉他.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '金鐘罩鐵布衫',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/金鐘罩鐵布衫.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '星瞬',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/星瞬.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '全世界都停電',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/全世界都停電.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '好眼淚壞眼淚',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/好眼淚壞眼淚.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '愛笑的眼睛',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/愛笑的眼睛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '愛你',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/愛你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '當你',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/當你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '愛的天國',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/愛的天國.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '對望',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/對望.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '北極星的眼淚',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/北極星的眼淚.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '我可以',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/我可以.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '為你寫詩',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/為你寫詩.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '牽牽牽手',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/牽牽牽手.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '地球上最浪漫的一首歌',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/地球上最浪漫的一首歌.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '說好不哭',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/說好不哭.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '夜曲',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/夜曲.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '止戰之殤',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/止戰之殤.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '以父之名',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/以父之名.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '半島鐵盒',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/半島鐵盒.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '簡單愛',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/簡單愛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '時光機',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/時光機.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '稻香',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/稻香.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '有點甜',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/有點甜.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '威廉古堡',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/威廉古堡.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '雙截棍',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/雙截棍.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '以後別做朋友',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/以後別做朋友.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '擱淺',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/擱淺.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '雪落下的聲音',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/雪落下的聲音.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '大魚',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/大鱼.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '簡簡單單',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/簡簡單單.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '豆漿油條',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/豆漿油條.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '她說',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/她說.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '被風吹過的夏天',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/被風吹過的夏天.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '期待愛',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/期待愛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '發現愛',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/發現愛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '表達愛',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/表達愛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '小瓶子',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/小瓶子.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '我很想愛他',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/我很想愛他.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '平行線',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/平行線.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '櫻花草',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/櫻花草.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '甜甜圈 Sweety',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/甜甜圈 Sweety.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '夠愛',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/夠愛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '甜甜圈 小薰阿本',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/甜甜圈 小薰阿本.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Better',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/Better.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '月光 Moonlight',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/月光 Moonlight.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '觸電',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/觸電.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '我和你',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/我和你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '星瞬',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/星瞬.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '你是我心內的一首歌',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/你是我心內的一首歌.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '今天妳要嫁給我',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/今天妳要嫁給我.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '珊瑚海',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/珊瑚海.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '屋頂',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/屋頂.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '明明很愛你',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/明明很愛你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '愛情',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/愛情.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '對你有感覺',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/對你有感覺.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '只能抱著你',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/只能抱著你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '心愛的',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/心愛的.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '多少',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/多少.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '聖誕結',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/聖誕結.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'K歌之王國',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/K歌之王國.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '十年',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/十年.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '浮誇',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/浮誇.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '我們',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/我們.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '飛機',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/飛機.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '生生',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/生生.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '老街',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/老街.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '麻雀',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/麻雀.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '我睡不著',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/我睡不著.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '半生緣',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/半生緣.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '末日飛船',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/末日飛船.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '陪我長大',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/陪我長大.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '不哭',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/不哭.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Scarborough Fair',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/Scarborough Fair.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Try to remember',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/Try to remember.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '故事細膩',
        'artist': '林俊傑',
        'album': 'n/a',
        'url': 'music/故事細膩.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '星瞬',
        'artist': 'Anly',
        'album': 'n/a',
        'url': 'music/星瞬.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '來互相傷害',
        'artist': '八三夭831',
        'album': 'n/a',
        'url': 'music/來互相傷害.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '八三夭831串燒1',
        'artist': '八三夭831',
        'album': 'n/a',
        'url': 'music/八三夭831串燒1.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '八三夭831串燒2',
        'artist': '八三夭831',
        'album': 'n/a',
        'url': 'music/八三夭831串燒2.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '天黑請閉眼',
        'artist': '陳零九',
        'album': 'n/a',
        'url': 'music/天黑請閉眼.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '那女孩對我說',
        'artist': 'Uu',
        'album': 'n/a',
        'url': 'music/那女孩對我說.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '追光者',
        'artist': '汪蘇龍',
        'album': 'n/a',
        'url': 'music/追光者.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '女孩Girl',
        'artist': '韋禮安',
        'album': 'n/a',
        'url': 'music/女孩Girl.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '慢慢等',
        'artist': '韋禮安',
        'album': 'n/a',
        'url': 'music/慢慢等.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '愛在夏天',
        'artist': '告五人',
        'album': 'n/a',
        'url': 'music/愛在夏天.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '跳舞的梵谷',
        'artist': '大牛/鄧典',
        'album': 'n/a',
        'url': 'music/跳舞的梵谷.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '我是真的很好',
        'artist': '葉禹含',
        'album': 'n/a',
        'url': 'music/我是真的很好.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '瘋人院',
        'artist': '華晨宇',
        'album': 'n/a',
        'url': 'music/瘋人院.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '好想愛這個世界啊',
        'artist': '華晨宇',
        'album': 'n/a',
        'url': 'music/好想愛這個世界啊.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '求救訊號',
        'artist': 'Vast and Hazy',
        'album': 'n/a',
        'url': 'music/求救訊號.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '喜歡你',
        'artist': '徐佳瑩',
        'album': 'n/a',
        'url': 'music/喜歡你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '自己按門鈴自己聽',
        'artist': '周深',
        'album': 'n/a',
        'url': 'music/自己按門鈴自己聽.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '天堂島之歌',
        'artist': '周深',
        'album': 'n/a',
        'url': 'music/天堂島之歌.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '曇花一現及時雨',
        'artist': '周深/鄭雲龍',
        'album': 'n/a',
        'url': 'music/曇花一現及時雨.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '梅香如故',
        'artist': '周深/毛不易',
        'album': 'n/a',
        'url': 'music/梅香如故.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '不染',
        'artist': '毛不易',
        'album': 'n/a',
        'url': 'music/不染.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '終わりの世界から',
        'artist': '麻枝准',
        'album': 'n/a',
        'url': 'music/終わりの世界から.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '心境探訪interviewer インタビュア',
        'artist': '96貓',
        'album': 'n/a',
        'url': 'music/心境探訪interviewer インタビュア.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'All Alone with You',
        'artist': '罪惡王冠',
        'album': 'n/a',
        'url': 'music/All Alone with You.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '白',
        'artist': '葉禹含/田燚',
        'album': 'n/a',
        'url': 'music/白.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Euterpe エウテルペ',
        'artist': '罪惡王冠',
        'album': 'n/a',
        'url': 'music/Euterpe エウテルペ.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'orange オレンジ',
        'artist': '四月是你的謊',
        'album': 'n/a',
        'url': 'music/orange オレンジ.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '你還會記得嗎',
        'artist': '四月是你的謊',
        'album': 'n/a',
        'url': 'music/你還會記得嗎.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '藍染',
        'artist': '蔡恩雨',
        'album': 'n/a',
        'url': 'music/藍染.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '吉原哀歌唄 吉原ラメント',
        'artist': '96貓',
        'album': 'n/a',
        'url': 'music/吉原哀歌唄 吉原ラメント.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '逐漸變快 だんだん早くなる',
        'artist': '96貓',
        'album': 'n/a',
        'url': 'music/逐漸變快 だんだん早くなる.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '思春期 テレカクシ',
        'artist': 'n/a',
        'album': 'n/a',
        'url': 'music/思春期 テレカクシ.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Last one 的號哭 ロストワンの号哭',
        'artist': '優十',
        'album': 'n/a',
        'url': 'music/Last one 的號哭 ロストワンの号哭.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '視力檢查 シリョクケンサ',
        'artist': '優十',
        'album': 'n/a',
        'url': 'music/視力檢查 シリョクケンサ.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '文乃的幸福理論',
        'artist': 'ゆめこ',
        'album': 'n/a',
        'url': 'music/文乃的幸福理論.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '飛鳥和蟬',
        'artist': '蔡恩雨',
        'album': 'n/a',
        'url': 'music/飛鳥和蟬.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '不想上班',
        'artist': '黃明志',
        'album': 'n/a',
        'url': 'music/不想上班.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '伍佰',
        'artist': '黃明志',
        'album': 'n/a',
        'url': 'music/伍佰.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '超跑情人夢',
        'artist': '卜學亮',
        'album': 'n/a',
        'url': 'music/超跑情人夢.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '老媽最常說的十句話',
        'artist': '八三夭831',
        'album': 'n/a',
        'url': 'music/老媽最常說的十句話.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '阿媽我真的吃飽了',
        'artist': '曾博恩',
        'album': 'n/a',
        'url': 'music/阿媽我真的吃飽了.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '大悲咒',
        'artist': '藥師寺',
        'album': 'n/a',
        'url': 'music/大悲咒.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'that',
        'artist': 'halyosy',
        'album': 'n/a',
        'url': 'music/that.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Connecting',
        'artist': 'halyosy',
        'album': 'n/a',
        'url': 'music/Connecting.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '般若心經',
        'artist': 'halyosy',
        'album': 'n/a',
        'url': 'music/般若心經.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '知得太多所以瘋了',
        'artist': '初音ミク',
        'album': 'n/a',
        'url': 'music/知得太多所以瘋了.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Mother',
        'artist': '96貓',
        'album': 'n/a',
        'url': 'music/Mother.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '灰色と青',
        'artist': '米津玄師',
        'album': 'n/a',
        'url': 'music/灰色と青.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '彼女使用說明書',
        'artist': 'kobasolo',
        'album': 'n/a',
        'url': 'music/彼女使用說明書.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Lemon',
        'artist': '米津玄師',
        'album': 'n/a',
        'url': 'music/Lemon.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '瑟魯之歌',
        'artist': '地海戰記',
        'album': 'n/a',
        'url': 'music/瑟魯之歌.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'remember',
        'artist': 'Uru',
        'album': 'n/a',
        'url': 'music/remember.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '夏目友人帳串燒',
        'artist': 'None',
        'album': 'n/a',
        'url': 'music/夏目友人帳串燒.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '兜圈',
        'artist': '林宥嘉',
        'album': 'n/a',
        'url': 'music/兜圈.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Mojito',
        'artist': '周杰倫',
        'album': 'n/a',
        'url': 'music/Mojito.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '星晴',
        'artist': '周杰倫',
        'album': 'n/a',
        'url': 'music/星晴.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '因為愛',
        'artist': '韋禮安',
        'album': 'n/a',
        'url': 'music/因為愛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '偽裝',
        'artist': '碧琪',
        'album': 'n/a',
        'url': 'music/偽裝.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '愛情怎麼了嗎',
        'artist': '盧廣仲',
        'album': 'n/a',
        'url': 'music/愛情怎麼了嗎.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '行星',
        'artist': '理想混蛋',
        'album': 'n/a',
        'url': 'music/行星.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '如何忘記你',
        'artist': '王若凡',
        'album': 'n/a',
        'url': 'music/如何忘記你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '懸日',
        'artist': '田馥甄',
        'album': 'n/a',
        'url': 'music/懸日.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '滯留鋒',
        'artist': '理想混蛋',
        'album': 'n/a',
        'url': 'music/滯留鋒.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '願溫柔的妳被世界溫柔以待',
        'artist': '綠繡眼',
        'album': 'n/a',
        'url': 'music/願溫柔的妳被世界溫柔以待.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '惡作劇',
        'artist': '王藍茵',
        'album': 'n/a',
        'url': 'music/惡作劇.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '台灣二十年偶像劇神曲串燒1',
        'artist': 'None',
        'album': 'n/a',
        'url': 'music/台灣二十年偶像劇神曲串燒1.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '台灣二十年偶像劇神曲串燒2',
        'artist': 'None',
        'album': 'n/a',
        'url': 'music/台灣二十年偶像劇神曲串燒2.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '我喜歡你',
        'artist': '洪安妮',
        'album': 'n/a',
        'url': 'music/我喜歡你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '但願你笑是真的開心',
        'artist': '洪安妮',
        'album': 'n/a',
        'url': 'music/但願你笑是真的開心.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'You  Me',
        'artist': '林逸欣',
        'album': 'n/a',
        'url': 'music/You  Me.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Perfect',
        'artist': '鄧典',
        'album': 'n/a',
        'url': 'music/Perfect.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '幾分之幾',
        'artist': '盧廣仲',
        'album': 'n/a',
        'url': 'music/幾分之幾.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '尋人啟事',
        'artist': '徐佳瑩',
        'album': 'n/a',
        'url': 'music/尋人啟事.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '無眠',
        'artist': '吳青峰',
        'album': 'n/a',
        'url': 'music/無眠.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '窗',
        'artist': '吳青峰',
        'album': 'n/a',
        'url': 'music/窗.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '藍色眼睛',
        'artist': '梁文音',
        'album': 'n/a',
        'url': 'music/藍色眼睛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '追光者',
        'artist': '岑寧兒',
        'album': 'n/a',
        'url': 'music/追光者.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '調色盤',
        'artist': '徐佳瑩',
        'album': 'n/a',
        'url': 'music/調色盤.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '誰 李友廷',
        'artist': '李友廷',
        'album': 'n/a',
        'url': 'music/誰李友廷.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '心拍數0822',
        'artist': 'Akie秋繪',
        'album': 'n/a',
        'url': 'music/心拍數0822.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '毛不易精選串燒',
        'artist': '毛不易',
        'album': 'n/a',
        'url': 'music/毛不易精選串燒.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '樹海森',
        'artist': 'None',
        'album': 'n/a',
        'url': 'music/樹海森.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'again',
        'artist': '96貓',
        'album': 'n/a',
        'url': 'music/again.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '黑白貓',
        'artist': '96貓',
        'album': 'n/a',
        'url': 'music/黑白貓.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '天之弱',
        'artist': '96貓',
        'album': 'n/a',
        'url': 'music/天之弱.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Eine Kleine',
        'artist': '米津玄師',
        'album': 'n/a',
        'url': 'music/Eine Kleine.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '國王與乞丐',
        'artist': '華晨宇',
        'album': 'n/a',
        'url': 'music/國王與乞丐.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '煙花易冷',
        'artist': '周深',
        'album': 'n/a',
        'url': 'music/煙花易冷.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '好好',
        'artist': '周深',
        'album': 'n/a',
        'url': 'music/好好.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '世界末日',
        'artist': '吳青峰',
        'album': 'n/a',
        'url': 'music/世界末日.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '我還沒有作好被打倒的準備',
        'artist': '理想混蛋',
        'album': 'n/a',
        'url': 'music/我還沒有作好被打倒的準備.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '留給你的我從未',
        'artist': '甜約翰',
        'album': 'n/a',
        'url': 'music/留給你的我從未.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '永不失聯的愛',
        'artist': '周興哲',
        'album': 'n/a',
        'url': 'music/永不失聯的愛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '夏夜煙火',
        'artist': '理想混蛋',
        'album': 'n/a',
        'url': 'music/夏夜煙火.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '我們的歌',
        'artist': '王力宏',
        'album': 'n/a',
        'url': 'music/我們的歌.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '可惜沒如果',
        'artist': '林俊傑',
        'album': 'n/a',
        'url': 'music/可惜沒如果.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '讓你飛',
        'artist': '光良',
        'album': 'n/a',
        'url': 'music/讓你飛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '多想愛你',
        'artist': '季彥霖',
        'album': 'n/a',
        'url': 'music/多想愛你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '絕地花園',
        'artist': '理想混蛋 + 廖文強',
        'album': 'n/a',
        'url': 'music/絕地花園.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'CHANGE',
        'artist': '瘦子E.SO',
        'album': 'n/a',
        'url': 'music/CHANGE.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '末日之戀',
        'artist': '張智成',
        'album': 'n/a',
        'url': 'music/末日之戀.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '凌晨三點鐘',
        'artist': '張智成',
        'album': 'n/a',
        'url': 'music/凌晨三點鐘.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '空白格',
        'artist': '蔡健雅',
        'album': 'n/a',
        'url': 'music/空白格.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '無底洞',
        'artist': '蔡健雅',
        'album': 'n/a',
        'url': 'music/無底洞.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '陌生人',
        'artist': '蔡健雅',
        'album': 'n/a',
        'url': 'music/陌生人.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '路口',
        'artist': '蔡健雅',
        'album': 'n/a',
        'url': 'music/路口.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '那女孩對我說',
        'artist': '黃義達',
        'album': 'n/a',
        'url': 'music/那女孩對我說.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '目擊者',
        'artist': '黃義達',
        'album': 'n/a',
        'url': 'music/目擊者.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Forever Young',
        'artist': '艾怡良',
        'album': 'n/a',
        'url': 'music/Forever Young.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '流星雨',
        'artist': 'F4',
        'album': 'n/a',
        'url': 'music/流星雨.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '多愛我一天',
        'artist': 'Energy',
        'album': 'n/a',
        'url': 'music/多愛我一天.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '葉子',
        'artist': '阿桑',
        'album': 'n/a',
        'url': 'music/葉子.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '存在',
        'artist': '5566',
        'album': 'n/a',
        'url': 'music/存在.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '離人',
        'artist': '林志炫',
        'album': 'n/a',
        'url': 'music/離人.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '不是因為天氣晴朗才愛你',
        'artist': '理想混蛋',
        'album': 'n/a',
        'url': 'music/不是因為天氣晴朗才愛你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '丟了你',
        'artist': '井朧',
        'album': 'n/a',
        'url': 'music/丢了你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '五月夜話',
        'artist': '水神&史蒂芬',
        'album': 'n/a',
        'url': 'music/五月夜話.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '刻在我心底的名字',
        'artist': '盧廣仲',
        'album': 'n/a',
        'url': 'music/刻在我心底的名字.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '在沒有你以後',
        'artist': '張智成',
        'album': 'n/a',
        'url': 'music/在沒有你以後.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '在這座城市遺失了你',
        'artist': '告五人',
        'album': 'n/a',
        'url': 'music/在這座城市遺失了你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
     {
        'name': '平衡木',
        'artist': '理想混蛋',
        'album': 'n/a',
        'url': 'music/平衡木.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '失重前幸福',
        'artist': '李艾薇',
        'album': 'n/a',
        'url': 'music/失重前幸福.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '心如止水',
        'artist': 'Ice Paper',
        'album': 'n/a',
        'url': 'music/心如止水.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '慢走不送',
        'artist': 'J.Sheon',
        'album': 'n/a',
        'url': 'music/慢走不送.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '晚安',
        'artist': '顏人中',
        'album': 'n/a',
        'url': 'music/晚安.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '水星記',
        'artist': '郭頂',
        'album': 'n/a',
        'url': 'music/水星記.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '炙愛',
        'artist': '陳忻玥',
        'album': 'n/a',
        'url': 'music/炙愛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '真的傻',
        'artist': '徐嘉瑩',
        'album': 'n/a',
        'url': 'music/真的傻.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '若即若離',
        'artist': 'K!ddingboi',
        'album': 'n/a',
        'url': 'music/若即若離.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '過熱',
        'artist': '周湯豪',
        'album': 'n/a',
        'url': 'music/過熱.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '醜人多作怪',
        'artist': '告五人',
        'album': 'n/a',
        'url': 'music/醜人多作怪.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '重感情的廢物',
        'artist': 'TRASH',
        'album': 'n/a',
        'url': 'music/重感情的廢物.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '高分貝',
        'artist': '呂士軒',
        'album': 'n/a',
        'url': 'music/高分貝.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    }
];

for (index = 0; index < songs.length; index++) {
    var listItem = `<div class="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="${index}">
                        <span class="song-number-now-playing">
                            <span class="number">${index + 1}</span>
                            <img class="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/now-playing.svg" />
                        </span>
                        <div class="song-meta-container">
                            <span class="song-name" data-amplitude-song-info="name" data-amplitude-song-index="${index}"></span>
                            <span class="song-artist-album">
                                <span data-amplitude-song-info="artist" data-amplitude-song-index="${index}"></span>
                                -
                                <span data-amplitude-song-info="album" data-amplitude-song-index="${index}"></span>
                            </span>
                        </div>
                    </div>`;
    $("#list").append(listItem);
}

Amplitude.init({
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    "songs": songs
});
