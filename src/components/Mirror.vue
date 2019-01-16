<template>
    <div>
        <canvas id="output" width="640" height="480"></canvas>
    </div>
</template>

<script>
import * as posenet from '@tensorflow-models/posenet';
import * as utils from "../util";
let net;
let video;
let width = 640, height = 480;
let stream;
export default {
    name: 'Mirror',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        
    },
    async mounted(){
       net = await posenet.load(1.01);
       video = await loadVideo();
       detectPose(video,net);
    },
    beforeDestroy(){
        net.dispose();
        console.log('disposed');
    }
}
async function loadVideo(){
    stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    let video = document.createElement('video');
    video.height = height;
    video.width = width;
    video.srcObject = stream;
    video.play();
    return video;
}

function detectPose(video,net){
    const canvas = document.getElementById('output');
    const ctx = canvas.getContext('2d');
    async function detect(){
        const pose = await net.estimateSinglePose(video,0.5,true,16);
        ctx.clearRect(0,0,width,height);
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(-width, 0);
        ctx.drawImage(video,0,0,width,height);
        ctx.restore();
        if (pose.score >= 0.1) {
            utils.drawKeypoints(pose.keypoints, 0.3, ctx);
            utils.drawSkeleton(pose.keypoints, 0.3, ctx);
            // utils.drawBoundingBox(pose.keypoints, ctx);
        }
        requestAnimationFrame(detect);
    }
    detect();
}
// setup();
</script>

<style scoped>

</style>
