var iframe = document.getElementById('smphtml5iframebbcMediaPlayer0')
var innerDoc = iframe.contentDocument || iframe.contentWindow.document
var v = innerDoc.getElementsByTagName("video")
var stream = v[0].captureStream()
var options = {mimeType: 'video/webm'};

mediaRecorder = new MediaRecorder(stream, options);

var recordedChunks = [] 

mediaRecorder.ondataavailable = function(e){
    console.log(event)
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
  }
}

mediaRecorder.start()

//stop recording

mediaRecorder.stop()

//Store in a blob
var blob = new Blob(recordedChunks, { 'type' : 'video/webm' });

//Download
var url = window.URL.createObjectURL(blob)
var a = document.createElement('a')
a.style.display = 'none'
a.href = url
a.download = 'video.webm'
document.body.appendChild(a)
a.click()


