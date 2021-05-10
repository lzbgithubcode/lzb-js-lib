<template>
    <div class="video-player" :style="{width: width,height: height}">
        <video  :id="ele" class="video-js" ref="video">
              <source v-for="(item, index) in sources" :key="index" :src="item.url" :type="item.type">
        </video>
    </div>

</template>

<script>
    import _videojs from "video.js";
    import "video.js/dist/video-js.css";
    import defaults from "./defaults.js";
    const videojs = window.videojs || _videojs;
   export default {
       name: "video-player",
       props:{
           ele: {
               type: String,
               required: false,
               default: "player-container-id",
           },
           width: {
               type: String,
               required: false,
               default: "864px",
           },
           height: {
               type: String,
               required: false,
               default: "486px",
           },
           playsinline:{
              type: Boolean,
              required: false,
              default: true,
           },
           // 数据源 { url , type}
           sources:{
               type:Array,
               required: false,
               default:  () => [],
           },

           // 播放器配置
           globalOptions: {
               type: Object,
               required: false
           },
           // 播放器事件
           globalEvents: {
               type: Array,
               required: false,
               default: () => []
           },


       },
       data(){
           return {
               player: null, // 播放器
               videoOptions: {}, // 播放器配置
           }
       },
       watch:{
           options: {
               deep: true,
               handler(options, oldOptions) {
                   this.dispose(() => {
                       if (options && options.sources && options.sources.length) {
                           this.initialize();
                       }
                   })
               }
           }
       },
       created(){

       },
       mounted(){
          if(!this.player){
              this.initialize();
          }
       },
       beforeDestroy() {
           if (this.player) {
               this.dispose()
           }
       },
       methods:{
           /**
            * 初始化播放器
            */
           initialize(){

               // 1. 获取配置
               this.videoOptions = Object.assign({}, defaults.options, this.globalOptions);

               // 2. ios全屏适配
               if (this.videoOptions.playsinline) {
                   this.$refs.video.setAttribute('playsinline', this.videoOptions.playsinline);
                   this.$refs.video.setAttribute('webkit-playsinline', this.videoOptions.playsinline);
                   this.$refs.video.setAttribute('x5-playsinline', this.videoOptions.playsinline);
                   this.$refs.video.setAttribute('x5-video-player-type', 'h5');
                   this.$refs.video.setAttribute('x5-video-player-fullscreen', false);
               }

               //3. 跨域
               if (this.videoOptions.crossOrigin && this.videoOptions.crossOrigin.length > 0) {
                   this.$refs.video.crossOrigin = this.crossOrigin
                   this.$refs.video.setAttribute('crossOrigin', this.crossOrigin)
               }

               // 4. 插件处理
               if (this.videoOptions.plugins) {
                   delete this.videoOptions.plugins.__ob__
               }

               const that = this;

               // emit event
               const emitPlayerState = (event, value) => {
                   if (event) {
                       this.$emit(event, this.player)
                   }
               }

               // 5.创建播放器
               this.player = videojs(this.ele, this.videoOptions, function () {
                    const events  = defaults.events.concat(that.globalEvents);

                    // 监听所有事件
                     const onEvents = {};
                     let i = 0, length = events.length, eventName;
                     for (i; i < length; i++){
                         eventName = events[i];
                         if(typeof eventName === "string" && onEvents[eventName] === undefined){
                             ((event)=>{
                                 onEvents[event] = null;
                                 this.on(event, ()=>{
                                     emitPlayerState(event);
                                 });
                             })(eventName);
                         }

                     }

                   // watch timeupdate
                   this.on('timeupdate', function() {
                       emitPlayerState('timeupdate', this.currentTime())
                   })
                   // player readied
                   that.$emit('ready', this);
               });
           },

           /**
            * 销毁播放器
            */
           dispose(callBack){
               if(!this.player || !this.player.dispose){
                   return;
               }
               if (this.player.techName_ !== 'Flash') {
                   this.pause();
               }
               this.player.dispose();
               this.player = null;
               this.$nextTick(() => {
                   callBack && callBack();
               })
           },
           /**
            * 重新播放
            * */
           rePlay(url){
               if(this.player && url){
                   this.play(url);
               }
           },
           /**
            * 播放 - 加载数据
            */
           play(url){
               this.videoOptions.sources = [{
                   url,
                   type: 'video/mp4'
               }];
               this.player.src({type: 'video/mp4', src: url});
               //重新加载播放器
               this.player.load();
           },
           /**
            * 暂停
            */
           pause(){
               this.player && this.player.pause && this.player.pause();
           },
           /**
            * 是否是全屏幕
            */
           isFullScreen() {
               // 是否全屏
               return this.player && this.player.isFullscreen && this.player.isFullscreen();
           },
           /**
            * 设置打开全屏
            */
           openFullScreen() {
               this.player && this.player.requestFullscreen && this.player.requestFullscreen();
           },
           /**
            *  退出全屏
            */
           exitFullScreen() {
               this.player && this.player.exitFullscreen && this.player.exitFullscreen();
           },


       }
   }
</script>

<style lang="scss">
@import "./customPlayerTheme.scss";
.video-player .video-js{
    width: 100%;
    height: 100%;
}
</style>
