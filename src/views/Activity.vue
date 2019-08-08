<template>
  <div id="activity">
    <h1 class="display-2 font-weight-medium teal--text">Activity</h1>
    <div class="py-4" v-for="activity in activities" :key="activity.id">
      <v-card>
        <v-img :src="activity.image" v-if="activity.image"></v-img>
        <v-card-title class="teal--text">{{ activity.title }}</v-card-title>
        <v-card-text>
          {{ activity.text }}
        </v-card-text>
        <v-card-actions>
          <v-btn outlined color="teal" :href="activity.link" target="_blank">Link</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activity',
  data: function () {
    return {
      activities: [
        {
          title: 'moja-note',
          text: 'Electron製のマークダウンメモアプリです。「学生が授業に集中してノートを取れるように」というポリシーで開発しています。内部にDBを組み込んでおり、常に自動的に保存されます。実際のユーザであるクラスメートのフィードバックに基づき印刷や共有等の機能を随時実装していました。現在は開発を停止し、「レガシーさを捨てモダンな技術だけでリビルドする」という目標でVue.jsを採用し1から再設計、実装中です。',
          image: 'https://user-images.githubusercontent.com/34061817/34567566-1a9297da-f1a6-11e7-8f21-7a8246585638.png',
          link: 'https://github.com/s10akir/moja-note'
        },
        {
          title: 'paizaラーニング',
          text: 'paiza運営元「ギノ株式会社」のe-ラーニングサービス「paizaラーニング」でアルバイトをしています。主な業務はコンテンツ制作で、ユーザに提供するLinux開発環境や演習課題・課題の採点ロジックを実装したり、実際に講座で取り扱うアプリケーションを実装したりなどをしています。また、講座を公開するための業務フローを私主導で1から設計・開発しなおし講座公開までのサイクルを早めることに貢献しました。必要な社内ツールの開発・保守なども行っています。',
          link: 'https://paiza.jp/works'
        },
        {
          title: 'paiza開発日誌',
          text: 'アルバイト先のギノ株式会社で時々技術ブログを書かせていただいています。内容はほとんど私が普段趣味でやっているようなことですが、特にRemote Development for Visual Studio Codeがプレリリースされたときに書いた記事は好評のようで、たくさんのはてブをいただきました。',
          link: 'https://paiza.hatenablog.com/search?q=%40s10akir'
        },
        {
          title: 'Logging',
          text: 'Kotlinで開発したMinecraftサーバ用Modです。このバージョンのMinecraftにいわゆる「木こりMod」がなかったのが開発のきっかけですが、Kotlinに慣れることが主な目的でした。Spigot API特有の癖に悩まされましたが結構気に入っています。',
          link: 'https://github.com/s10akir/Logging'
        },
        {
          title: 'Github',
          text: 'privateに設定しているリポジトリが多いのですがそこそこプロフィールに草が生い茂っています。',
          link: 'https://github.com/s10akir'
        },
        {
          title: 'twitter',
          text: '事実上の日記。',
        },
      ]
    }
  }
}
</script>
