<template>
  <div>
    <h1 class="display-2 font-weight-medium teal--text">Hello My World</h1>
    <div class="my-3">
      <h2 class="title">自己紹介</h2>
      <h3 class="font-weight-bold teal--text">Akira Shinohara - 1998/10/02</h3>
      <p class="body-1">
        都内の専門学校に通う情報系学生です。システム開発を専攻しています。
        <br>
        contact: k017c1067(at)it-neec.jp
      </p>
    </div>
    <div class="my-3">
      <h2 class="title">将来像</h2>
      <v-card
        v-for="vision in visions"
        :key="vision.id"
        class="my-2"
        >
        <v-card-title>
          <span class="teal--text">
            <v-icon color="teal" class="mx-2">
              {{ vision.icon }}
            </v-icon>
            {{ vision.title }}
          </span>
        </v-card-title>
        <v-card-text>{{ vision.text }}</v-card-text>
      </v-card>
    </div>
    <div class="my-3">
      <h2 class="title">資格</h2>
      <v-simple-table class="my-2">
        <tbody>
          <tr v-for="item in certs" :key="item.date">
            <td>{{ item.date }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: function () {
    return {
      visions: [
        {
          icon: 'mdi-flash',
          title: '言われたコトだけじゃ満足できない',
          text: '「私じゃなきゃできない」価値を突き詰めたい。ただ開発するだけじゃなくエンジニアへも積極的に意見を求められる、意義ある仕事を目指しています。'
        },
        {
          icon: 'mdi-arrow-up-bold-hexagon-outline',
          title: '最前線で戦い続けるエンジニアでいたい',
          text: '常に新しいモノに触れていたい。新しい技術を追い求めていたい。'
        },
        {
          icon: 'mdi-creation',
          title: 'フルスタックな仕事がしたい',
          text: '様々な分野の技術に触れていたい。知らない世界を知ることで得られるモノを探し続けたい。'
        },
      ],
      certs: [
        {
          date: '2017.03',
          name: 'ITパスポート試験'
        },
        {
          date: '2017.09',
          name: 'Microsoft Office Specialist Word 2013'
        },
        {
          date: '2017.11',
          name: '基本情報技術者試験'
        },
        {
          date: '2018.02',
          name: 'Microsoft Office Specialist Excel 2013'
        },
        {
          date: '2018.06',
          name: '応用情報技術者試験'
        },
        {
          date: '2018.12',
          name: '情報処理安全確保支援士試験'
        },
        {
          date: '2019.04',
          name: '情報処理安全確保支援士 登録 （登録番号: 第018283号）'
        },
      ]
    }
  }
}
</script>

<style scoped lang="sass">

</style>
