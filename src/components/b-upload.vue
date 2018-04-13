<template>
    <div class='b-upload'>
        <b-button @click='handleClick'>{{title}}</b-button>
        <div class='file-list'>
            <div class='file-item'>
                <div>{{fileName}}</div>
                <i ref='line'></i>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'bUpload',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            width: 300,
            fileName: ''
        }
    },
    methods: {
        handleClick() {
            const $input = document.createElement('input')
            $input.type = 'file'
            $input.addEventListener('change', _ => {
                this.fastUpload($input.files[0])
                this.sliceUpload($input.files[0])
            })
            $input.click()
            this.$refs.line.style.width = `${700 * 0}px`
        },
        async sliceUpload(file) {
            const _this = this
            const sliceSize = 2 * 1024 * 1024
            const sliceCount = Math.ceil(file.size / sliceSize)
            const requestList = []
            let allLoaded = []
            let lastRequest
            for (let i = 0; i < sliceCount; i++) {
                const start = i * sliceSize
                const end = Math.min(file.size, (i + 1) * sliceSize)
                const formData = new FormData()
                formData.append('file', file.slice(start, end))
                formData.append('total', sliceCount)
                formData.append('index', i)
                formData.append('fileName', file.name)
                if (i === sliceCount - 1) {
                    lastRequest = function() {
                        return _this.$http.post('/upload', formData, {
                            onUploadProgress(progressEvent) {
                                _this.onUploadProgress(
                                    progressEvent,
                                    allLoaded,
                                    i,
                                    file.size
                                )
                            }
                        })
                    }
                } else {
                    requestList.push(
                        _this.$http.post('/upload', formData, {
                            onUploadProgress(progressEvent) {
                                _this.onUploadProgress(
                                    progressEvent,
                                    allLoaded,
                                    i,
                                    file.size
                                )
                            }
                        })
                    )
                }
            }
            await axios.all(requestList)
            let {name, path} = await lastRequest()
            this.fileName = name
            this.$emit('change', path)
        },
        onUploadProgress(progressEvent, allLoaded, index, Totalsize) {
            allLoaded[index] = progressEvent.loaded
            let loaded = allLoaded.reduce(function(a, b) {
                return a + b
            }, 0)
            let prcent = loaded / Totalsize
            this.$refs.line.style.width = `${700 * prcent}px`
        },
        fastUpload() {

        }
    }
}
</script>

<style scoped lang='scss'>
.b-upload {
    .file-list {
        font-size: 12px;
        color: #666666;
        .file-item {
            margin: 20px 0;
            i {
                display: block;
                margin-top: 10px;
                height: 3px;
                width: 0;
                background-color: #409eff;
                border-radius: 4px;
                transition: all 0.5s;
            }
        }
    }
}
</style>
