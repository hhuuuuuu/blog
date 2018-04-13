<template>
    <div class='write-page'>
        <div class='title'>
            <b-form ref='form'
                    :rules='rules'
                    :forms='forms'>
                <b-form-item prop='title'
                             width='50px'
                             label='标题'>
                    <b-input v-model='forms.title'
                             width='938px'></b-input>
                </b-form-item>
                <b-form-item prop='desc'
                             width='50px'
                             label='简介'>
                    <b-input v-model='forms.desc'
                             width='938px'></b-input>
                </b-form-item>
            </b-form>
        </div>
        <b-upload title='上传封面'
                  @change="handleCoverFile"></b-upload>
        <div id="main">
            <mavon-editor @save='save'
                          v-model="markdownContent" />
        </div>
        <b-upload title='上传附件'
                  @change="handleFile"></b-upload>
        <b-button @click="submit">确定</b-button>
    </div>

</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { markdown } from 'markdown'
import bUpload from '../components/b-upload'
export default {
    name: 'Write',
    components: {
        mavonEditor,
        bUpload
    },
    data() {
        return {
            rules: {
                title: {
                    message: '标题不能为空'
                },
                desc: {
                    message: '内容不能为空'
                }
            },
            forms: {
                title: '',
                desc: ''
            },
            markdownContent: '',
            filePaht: '',
            cover: ''
        }
    },
    methods: {
        async submit() {
            if (this.$refs.form.valiate()) {
                try {
                    await this.$http.post('/article', {
                        ...this.forms,
                        content: markdown.toHTML(this.markdownContent || ''),
                        file: this.filePaht,
                        created_at: Date.now(),
                        cover: this.cover
                    })
                    alert('success')
                    this.init()
                } catch (e) {
                    console.log(e)
                }
            }
        },
        handleFile(filePath) {
            this.filePaht = filePath
        },
        handleCoverFile(filePath) {
            this.cover = filePath
        },
        init() {
            this.forms = {
                title: '',
                desc: ''
            }
            this.markdownContent = ''
            localStorage.removeItem('markdownContent')
        },
        save() {
            localStorage.setItem('markdownContent', this.markdownContent)
        }
    },
    created() {
        this.markdownContent = localStorage.getItem('markdownContent') || ''
    }
}
</script>

<style scoped lang='scss'>
.write-page {
    max-width: 1000px;
    padding: 120px 0 0 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 auto;
    #main {
        margin-bottom: 20px;
    }
}
</style>
