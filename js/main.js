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
        'name': '誰',
        'artist': '李友廷',
        'album': 'n/a',
        'url': 'music/誰.mp3',
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
        'name': 'mother',
        'artist': '96貓',
        'album': 'n/a',
        'url': 'music/mother.mp3',
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
