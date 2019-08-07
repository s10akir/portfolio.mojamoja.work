<template>
  <div class="skills">
    <h1 class="display-2 font-weight-medium teal--text">Skills</h1>
    <div class="my-3" v-for="skill in skills" :key="skill.id">
      <h2 class="title">
        {{ skill.title }}
      </h2>
      <v-container>
        <v-layout wrap>
          <v-flex lg4 md6 sm12 xs12 px-1 py-2 v-for="element in skill.elements" :key="element.id">
            <v-card outlined height="100%">
              <v-card-title class="teal--text">
                <v-icon class="mx-2" color="teal">{{ element.icon }}</v-icon>{{ element.title }}
                <v-card-text>{{ element.text }}</v-card-text>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data: function () {
    return {
      skills: [
        {
          title: '開発環境',
          elements: [
            {
              icon: 'mdi-linux',
              title: 'Linux',
              text: '中学2年生のころから普段の開発環境として常用しています。デスクトップ用途だけではなく、趣味としてサーバ運用もしているため知見が豊富です。最近はArch Linuxを使っています。',
            },
            {
              icon: 'mdi-pen',
              title: 'vim',
              text: 'ターミナルに引きこもってることが多いのでvim（neovim）を好んで使っています。高度なIDEがなくてもvim（とプラグイン）さえあれば開発できます。',
            },
            {
              icon: 'mdi-docker',
              title: 'Docker',
              text: '普段からDockerで開発環境を構築しており、このポートフォリオもDockerで動いています。Dockerfileを書き起こしたりdocker-composeで管理することに慣れています。',
            },
          ]
        },
        {
          title: '言語',
          elements: [
            {
              icon: 'mdi-ruby',
              title: 'Ruby',
              text: '最も付き合いの長い言語で、大抵のことはリファレンス無しで開発できます。ruby特有の文化に慣れており、「Rubyらしさ」を活かしたコードを意識しています。',
            },
            {
              icon: 'mdi-nodejs',
              title: 'Node.js',
              text: '非同期処理が好きで常駐するアプリケーションやサーバアプリケーションはNode.jsで開発することが多いです。高度な実装でなければリファレンス無しで開発できます。レガシーな記法よりもECMA Scriptを好んでいます。',
            },
            {
              icon: 'mdi-alphabetical',
              title: 'English',
              text: 'あまり話すのは得意ではありませんが、ドキュメントを読みながら開発したり海外のフォーラムから情報を得たりする程度には全く問題がない程度に読み書きできます。',
            },
            {
              icon: 'mdi-hammer',
              title: 'Other...',
              text: 'その他得意な言語としてJava, Kotlin, Python, Japaneseなどがありますが、メジャーなプログラミング言語は概ね扱ったことがあり、C++やC#, PHP, Goなどはリファレンスがあれば開発できます。'
            }
          ]
        },
        {
          title: 'フレームワークなど',
          elements: [
            {
              icon: 'mdi-vuejs',
              title: 'Vue.js',
              text: 'フロントエンド開発の際に好んで採用します。このポートフォリオもvue.jsでSPAとして制作しています。バックエンドにAPIサーバを必要とする場合は大抵Expressと組み合わせます。',
            },
            {
              icon: 'mdi-google-chrome',
              title: 'Electron',
              text: '自分がLinux環境なこともあり、デスクトップアプリケーションは簡単にマルチプラットフォームを実現するElectronを使うことが多いです。最近は前述のVue.jsと組み合わせて使うことが増えました。',
            },
            {
              icon: 'mdi-web',
              title: 'MVC-Model',
              text: 'MVCモデルでの開発に慣れています。Rails, Django, Flask, LaravelなどメジャーなMVC（に近い）フレームワークは一通りアルバイトでコンテンツ制作経験があります。ただし、最近は大掛かりなアプリケーションでなければExpressで最小限の構成にすることが多いです。'
            }
          ]
        },
        {
          title: 'DB',
          elements: [
            {
              icon: 'mdi-database',
              title: 'RDBMS',
              text: '取得には至っていませんが、データベーススペシャリスト試験のために勉強しており、RDBの設計理論や概念、SQLについて知識を持っています。個人ではアプリケーションの特性に合わせMariaDBかSQLiteを用いることが多いです。'
            },
            {
              icon: 'mdi-file-document',
              title: 'MongoDB',
              text: '相性が良いので、JSで開発する際は組み合わせてMongoDBを採用しています。また、MongoDB互換のあるNeDBを使うこともあります。'
            }
          ]
        }
      ]
    }
  }
}
</script>
