// #1

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(this.uploader + ' watched all ' + this.time + ' seconds of ' + this.title + '!');
    }
    
}

 

let firstVideo = new Video('Back To The Future', 'Mark', 50);
firstVideo.watch(); 


let secondVideo = new Video('Planet of the Apes', 'Aviv', 100);
secondVideo.watch(); 


let videoData = [
    { title: 'Back To The Future', uploader: 'Mark', time: 50 },
    { title: 'Planet of the Apes', uploader: 'Aviv', time: 100 },
    { title: 'The Matrix', uploader: 'Jon', time: 150 },
    { title: 'Hello', uploader: 'Tommy', time: 300 },
    { title: 'Yes Please', uploader: 'Zivush', time: 200 }
];

let videos = videoData.map(video => new Video(video.title, video.uploader, video.time));

// Loop through the videos array and call watch method on each Video instance
videos.forEach(video => video.watch());
