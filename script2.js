 // Create Vue App
 const app = Vue.createApp({
    data() {
      return {
        caseVideo: [
          { video_src: "video1.jpg", video_title: "Video 1" },
          { video_src: "video2.jpg", video_title: "Video 2" },
          { video_src: "video3.jpg", video_title: "Video 3" },
          { video_src: "video4.jpg", video_title: "Video 4" },
          { video_src: "video5.jpg", video_title: "Video 5" },
          { video_src: "video6.jpg", video_title: "Video 6" }
        ],
        itemsPerGroup: 4
      };
    },
    computed: {
      groupedVideos() {
        const groups = [];
        for (let i = 0; i < this.caseVideo.length; i += this.itemsPerGroup) {
          groups.push(this.caseVideo.slice(i, i + this.itemsPerGroup));
        }
        return groups;
      }
    }
  });

  // Mount the app
  app.mount("#app");