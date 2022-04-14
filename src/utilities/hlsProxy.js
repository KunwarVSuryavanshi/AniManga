    const proxy_url = 'http://127.0.0.114:3000'
    const video_url = 'https://example.com/video/master.m3u8'
    const referer_url = 'https://example.com/videos.html'
    const file_extension = '.m3u8'

    const hls_proxy_url = `${proxy_url}/${btoa(`${video_url}|${referer_url}`)}${file_extension}`