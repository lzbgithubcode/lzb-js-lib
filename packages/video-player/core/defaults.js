export default {
    /**
     * 默认配置
     */
    options:{
        autoplay: false,  //   true/false 播放器准备好之后，是否自动播放 【默认false】
        controls: true,   // true/false 是否拥有控制条 【默认true】,如果设为false ,那么只能通过api进行控制了。也就是说界面上不会出现任何控制按钮
        loop: false,  // true/false 视频播放结束后，是否循环播放
        muted: false, //   true/false 是否静音
        poster: "", // 播放前显示的视频画面，播放开始之后自动移除。通常传入一个URL
        preload: 'auto',  // 建议浏览器是否应在加载元素后立即开始下载视频数据 ‘auto’ ‘metadata’  ‘none’
        src: "", // 要嵌入的视频源的源URL
        aspectRatio: "16:9", // 将播放器置于流体模式，并在计算播放器的动态大小时使用该值。该值应表示比率 - 由冒号（例如"16:9"或"4:3"）分隔的两个数字
        fluid: false,  // 何时true，Video.js播放器将具有流畅的大小。换句话说，它将扩展以适应其容器
        playbackRates: [0.5, 1, 1.5, 2],
        // 组件显示
        controlBar: {
            remainingTimeDisplay: false,
            playToggle: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeMenuButton: {
                inline: false,
                vertical: true
            }
        },
        crossOrigin: "", // 跨域设置
        playsinline: true, // ios设置的全屏幕播放
        techOrder: ['html5'],
        plugins: {}
    },

    /**
     * 默认事件
     */
    events: [
        'loadeddata',
        'canplay',
        'canplaythrough',
        'play',
        'pause',
        'waiting',
        'playing',
        'ended',
        'error'
    ],
}
